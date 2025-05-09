import { Outlet } from "react-router-dom";
import ToastProvider from "./components/ToastProvider";
import { FloatingButton, Footer } from "./pages";

const App = () => {
  return (
    <>
      <ToastProvider/>
      <Outlet />
      <FloatingButton />
      <Footer />
    </>
  )
};

export default App;
