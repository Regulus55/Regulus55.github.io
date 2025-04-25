import { ToastContainer } from "react-toastify"

const ToastProvider = () => {
    return (
        <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            icon={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
            theme="colored"
        />
    )
}

export default ToastProvider;