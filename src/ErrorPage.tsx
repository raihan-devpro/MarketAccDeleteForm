// Adjust the imports based on available components
import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { RouteRoot } from "./Routes";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white">
      <div className="bg-appPrimary/5 flex w-full flex-col items-center justify-center sm:flex-row">
        {/* Left content */}
        <div className="flex w-full flex-col items-center justify-center">
          <div>
            <h1 className="text-[180px] leading-none font-bold">404</h1>
            <h1 className="text-5xl leading-none font-bold">Whoops!</h1>
            <div className="mt-2 mb-6 text-lg">
              Sorry, we couldn't find the page you're looking for.
            </div>
            <Button onClick={() => navigate(RouteRoot)}>Go back home</Button>
          </div>
        </div>

        {/* Right illustration */}
        <div className="flex h-screen w-full items-center justify-center bg-amber-50">
          <img
            src="/404.svg"
            alt="404 Illustration"
            className="h-screen w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
