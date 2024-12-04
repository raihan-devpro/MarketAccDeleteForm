

import CustomBreadcrumb from '@/components/breadcrumb/CustomBreadcrumb';
import { NavUser } from '@/components/nav-user';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { sidebarData } from '@/Routes';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { FC } from 'react';


const TopNavbar: FC = () => {
  const { setTheme } = useTheme()
  return (
    <nav className=" p-4 ">
      <div className=" flex justify-between items-center ">
        {/* Logo or Brand Name */}
        <div>
          <CustomBreadcrumb />

        </div>
        {/* Navigation Links */}
        <div className=" flex items-center gap-2 justify-end">


          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <NavUser user={sidebarData.user} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
