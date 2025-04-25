import { Outlet } from "react-router-dom";
import ToastProvider from "./components/ToastProvider";

const App = () => {
  return (
    <>
      <ToastProvider/>
      <Outlet />
    </>
  )
};

export default App;
