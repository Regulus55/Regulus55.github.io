import { ToastContainer } from "react-toastify"

const ToastProvider = () => {
    return (
        <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            closeButton={false}
            icon={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
            theme="colored"
            toastClassName={() =>
                "flex flex-col items-center justify-center border-4 border-gray-500 bg-white text-gray-500 font-bold text-lg rounded-lg p-4 my-0.5"
            }
        />
    )
}

export default ToastProvider;