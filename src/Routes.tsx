import { Clipboard, Eye, Heart, Home, MessageSquare, Pencil, Plus, Settings, UserRound } from "lucide-react"

export const RouteRoot = "/"
export const RouteSetupProfile = "/setup-profile"
export const RouteSetupConsultancy = "/setup-consultancy"
export const RouteSignIn = "/sign-in"
export const RouteSignUp = "/sign-up"
export const RouteSignUpUserDetails = "/sign-up/user-details"
export const RouteSignUpCompanyDetails = "/sign-up/company-details"
export const RouteSignUpPayment = "/sign-up/payment"
export const RouteSetUpDirectDebit = "/sign-up/payment/set-up-direct-debit"
export const RouteDirectDebitReview = "/sign-up/payment/set-up-direct-debit/review"
export const RouteDirectDebitSuccess = "/sign-up/payment/set-up-direct-debit/success"
export const RouteProfile = "/profile"
export const RouteProfileSetup = "/profile/setup"
export const RouteEditProfile = "/profile/edit-profile"
export const RouteAddCandidate = "/profile/add-candidate"
export const RouteAddJob = "/profile/add-job"
export const RouteViewLivePage = "/profile/view-live-page"
export const RouteMyCandidates = "/profile/my-candidates"
export const RouteMyJobs = "/profile/my-jobs"
export const RouteMessage = "/message"
export const RouteFavorites = "/favorites"
export const RouteCandidates = "/candidate"
export const RouteJobs = "/jobs"
export const RouteSettings = "/settings"



export const sidebarData = {
  user: {
    name: "Bench Bee User",
    email: "user@benchbee.io",
    avatar: "/icon.svg",
  },
  navMain: {
    heading: "My Consultancy",
    navItems: [
      {
        title: "Profile",
        url: RouteProfile,
        icon: Home,
        isActive: true,
        items: [
          {
            title: "Edit Profile",
            url: RouteEditProfile,
            icon: Pencil,
          },
          {
            title: "View Live Page",
            url: RouteViewLivePage,
            icon: Eye,
          },
          {
            title: "My Candidates",
            url: RouteMyCandidates,
            icon: UserRound,
          },


          {
            title: "My Jobs",
            url: RouteMyJobs,
            icon: Clipboard,
          },
          {
            title: "Add Candidate",
            url: RouteAddCandidate,
            icon: Plus,
          },
          {
            title: "Add Job",
            url: RouteAddJob,
            icon: Plus,
          },



        ],
      },
      {
        title: "Messages",
        url: RouteMessage,
        icon: MessageSquare,

      },
      {
        title: "Favorites",
        url: RouteFavorites,
        icon: Heart,

      }
    ],
  },
  navSecondary: {
    heading: "Search",
    navItems: [

      {
        title: "Candidates",
        url: RouteCandidates,
        icon: UserRound,

      },
      {
        title: "Jobs",
        url: RouteJobs,
        icon: Clipboard,

      }
    ],
  },
  navFooter: {

    navItems: [

      {
        title: "Settings",
        url: RouteSettings,
        icon: Settings,

      }
    ],
  }

}