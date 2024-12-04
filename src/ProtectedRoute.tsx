import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteSignIn, RouteSignUpCompanyDetails, RouteSignUpUserDetails } from '@/Routes';
import { fetchAuthSession, AuthError } from 'aws-amplify/auth';
import LoadingSpinner from '@/components/loader/loader-icon';
import { useShallow } from 'zustand/react/shallow';
import { useAuthStore } from '@/store/auth-store';
import { EnumOnboardingStatus, EnumOnboardingStep } from '@/types/auth-type';
type ProtectedRouteProps = PropsWithChildren & {
  redirectTo?: string;
};
export default function ProtectedRoute({
  children,
  redirectTo = RouteSignIn
}: ProtectedRouteProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { onboarding, apiInitializeOnboarding } = useAuthStore(
    useShallow((state) => ({
      onboarding: state.onboarding,
      apiInitializeOnboarding: state.apiGetOnboarding,

    }))
  );

  const isTokenValid = (token: any) => {
    if (!token?.payload?.exp) return false;
    const currentTime = Math.floor(Date.now() / 1000);
    return (token.payload.exp - currentTime) > 5 * 60; // More than 5 minutes until expiration
  };
  useEffect(() => {
    let mounted = true;

    const handleOnboardingNavigation = (onboardingData: any) => {
      return;

      if (!onboardingData?.status || onboardingData.status !== EnumOnboardingStatus.InProgress) return;

      switch (onboardingData.current_step) {
        case EnumOnboardingStep.Initialize:
          navigate(RouteSignUpUserDetails, { replace: true });
          break;
        case EnumOnboardingStep.VerifyCompany:
        case EnumOnboardingStep.CompanyDetails:
          navigate(RouteSignUpCompanyDetails, { replace: true });
          break;
      }
    };

    const checkSession = async () => {
      try {
        const session = await fetchAuthSession();
        const idToken = session.tokens?.idToken;

        console.log("Token: ", idToken?.toString());

        if (!idToken || !isTokenValid(idToken)) {
          throw new AuthError({
            name: 'TokenInvalidException',
            message: 'Invalid or expired token'
          });
        }

        try {
          if (onboarding == null) {
            await apiInitializeOnboarding();
          }
          const updatedOnboarding = useAuthStore.getState().onboarding;
          console.log("Onboarding: ", updatedOnboarding);
          handleOnboardingNavigation(updatedOnboarding);
        } catch (e) {
          console.log(e)
        }

        mounted && setIsLoading(false);
      } catch (error) {
        if (!mounted) return;
        navigate(redirectTo, { replace: true });
        setIsLoading(false);
      }
    };

    checkSession();
    return () => { mounted = false; };
  }, [navigate, redirectTo]);
  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-screen bg-background'>
        <LoadingSpinner />
      </div>
    );
  }
  return <>{children}</>;
}