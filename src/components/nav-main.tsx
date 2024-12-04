import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

export interface NavMainProps {
  heading?: string
  navItems: NavItemProps[]

}

export interface NavItemProps {
  title: string
  url: string
  icon: LucideIcon
  isActive?: boolean
  items?: NavItemProps[]
}
export function NavMain({
  navData,
  activeSidebar,
  activeSubItem,

}: {
  navData: NavMainProps;
  activeSidebar: NavItemProps | undefined;
  activeSubItem: NavItemProps | undefined;


}) {



  return (

    <SidebarGroup>
      {navData.heading && <SidebarGroupLabel className="font-bold text-sm ">{navData.heading}</SidebarGroupLabel>}
      <SidebarMenu>
        {navData.navItems.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem >
              <SidebarMenuButton asChild tooltip={item.title} size={"lg"}
                className={`${activeSidebar?.url.startsWith(item.url ?? "") ? "bg-appPrimary text-appPrimaryText hover:bg-appPrimary hover:text-appPrimaryText" : ""} `}>
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight className={`${activeSidebar?.url.startsWith(item.url ?? "") ? "bg-transparent text-appPrimaryText hover:bg-transparent hover:text-appPrimaryText" : ""} bg-transparent `} />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub >
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild className={`${activeSubItem?.url == subItem.url ? "text-appPrimary hover:text-appPrimary" : ""}`}>
                            <Link to={subItem.url} >
                              {subItem.icon && <subItem.icon />} <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
