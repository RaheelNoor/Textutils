import { toast } from 'react-toastify';

export const showToast = (message, type = 'info', position = 'top-right') => {
  switch (type) {
    case 'success':
      toast.success(message, { position });
      break;
    case 'error':
      toast.error(message, { position });
      break;
    case 'warn':
      toast.warn(message, { position });
      break;
    case 'info':
    default:
      toast.info(message, { position });
      break;
  }
};
