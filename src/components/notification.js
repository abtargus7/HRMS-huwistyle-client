import { toast } from "react-toastify";

const notification = (response) => {

  const { success, message } = response.data;

    if (success === true) {
        return toast.success(`🦄 ${message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (success === false) {
        return toast.error(`🦄 ${message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
}

export default notification;