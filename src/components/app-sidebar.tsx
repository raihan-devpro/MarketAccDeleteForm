import * as React from "react"
import {

  Home,

} from "lucide-react"

import { NavItemProps, NavMain, } from "@/components/nav-main"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"
import { RouteRoot, sidebarData } from "@/Routes"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const location = useLocation();
  const [activeSidebar, setActiveSidebar] = React.useState<NavItemProps>({
    url: location.pathname == "/" ? "/profile" : location.pathname,
    icon: Home,
    title: "Home",
  });
  const [activeSubItem, setActiveSubItem] = React.useState<NavItemProps>({
    url: location.pathname,
    icon: Home,
    title: "Home",
  });
  React.useEffect(() => {

    setActiveSidebar({ url: location.pathname == "/" ? "/profile" : location.pathname, icon: Home, title: "Home" })
    setActiveSubItem({ url: location.pathname, icon: Home, title: "Home" })
    // console.log(location)
  }, [location]);


  return (
    <Sidebar variant="inset" {...props} >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild >
              <Link to={RouteRoot}>
                <div className="">
                  <img src="/logo.svg" alt="Logo" className="h-12 " />
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent >
        <NavMain navData={sidebarData.navMain} activeSidebar={activeSidebar} activeSubItem={activeSubItem} />

        <hr />

        <NavMain navData={sidebarData.navSecondary} activeSidebar={activeSidebar} activeSubItem={activeSubItem} />
        <hr />
        <NavMain navData={sidebarData.navFooter} activeSidebar={activeSidebar} activeSubItem={activeSubItem} />

      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
