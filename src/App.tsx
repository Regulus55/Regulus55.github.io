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
      {isHome && (
        <>
          <FloatingButton />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
