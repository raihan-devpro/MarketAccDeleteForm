import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/sonner";
import MarketAccountDeletionForm from "./app/pages/MarketDeleteForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/market",
      element: <MarketAccountDeletionForm />,
    },
  ]);

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <RouterProvider router={router} />
        <Toaster
          richColors
          duration={2000}
          position="top-right"
          expand={false}
          visibleToasts={5}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
