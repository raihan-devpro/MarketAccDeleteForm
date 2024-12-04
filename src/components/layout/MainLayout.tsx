import { Outlet } from 'react-router-dom';
import TopNavbar from '../common/navbar/TopNavbar';
// import Footer from '../common/footer/Footer';
import { FC } from 'react';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { AppSidebar } from '../app-sidebar';


const MainLayout: FC = () => {
  return (
    <div className="flex flex-col  w-full bg-background">

      <SidebarProvider className=' bg-background '>
        <AppSidebar className=' bg-background z-50' />
        <main className='w-full  bg-background'>
          <div className='flex items-center w-full sticky top-0 bg-sidebar z-50'>
            <SidebarTrigger />
            <div className='w-full '>
              <TopNavbar />
            </div>
          </div>
          <div className=" bg-secondary h-[calc(_100vh-_80px)] overflow-auto  rounded-lg ">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>

    </div>

  );
};

export default MainLayout;
