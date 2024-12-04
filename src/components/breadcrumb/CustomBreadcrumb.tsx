import { useLocation, Link } from "react-router-dom";
import { BreadcrumbSeparator } from "../ui/breadcrumb";
import { containsDigit } from "@/lib/utils";
// Use ShadCN components for styling

function CustomBreadcrumb() {
  const location = useLocation();

  // Split pathname into an array
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center space-x-2">

      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        console.log(value)
        console.log(value.replace("-", " "))

        return (

          <>
            {!containsDigit(value) ? (<span key={to} className="flex items-center gap-1">

              {!isLast ? (
                <Link to={to} className="text-sidebar-foreground text-opacity-75 capitalize">
                  {value.replace(/-/g, " ")}
                </Link>
              ) : (
                <div className="font-medium text-sidebar-foreground  capitalize">
                  {value.replace(/-/g, " ")}
                </div>
              )
              }
              {(isLast || containsDigit(value)) ? <div></div> : <BreadcrumbSeparator className="hidden md:block" />}


            </span>) : (<></>)}

          </>


        );
      })}
    </div>
  );
}

export default CustomBreadcrumb;
