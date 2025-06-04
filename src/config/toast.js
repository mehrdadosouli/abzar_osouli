import { toast } from 'react-toastify';


export const notify = (text, type) => {
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  if (type === 'success') {
    toast.success(text, options);
  } else {
    toast.error(text, options);
  }
};

