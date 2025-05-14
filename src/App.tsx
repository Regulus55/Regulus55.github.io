import { Outlet, useLocation } from "react-router-dom";
import ToastProvider from "./components/common/ToastProvider";
import { FloatingButton, Footer } from "./pages";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ToastProvider />
      <Outlet />
      
          <FloatingButton />
          {isHome && (
        <>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
