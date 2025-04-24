import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Outlet />
    </>
  )
};

export default App;
