//notification.tsx
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { SnackbarCloseReason } from '@mui/material/Snackbar';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

interface NotificationProps {
  notification: Notification | null;
  onClose: (event: Event | React.SyntheticEvent<Element, Event>, reason: SnackbarCloseReason) => void;
}

const Notification: React.FC<NotificationProps> = ({ notification, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={!!notification}
      autoHideDuration={5000}
      onClose={onClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity={notification?.type || 'info'}
      >
        {notification?.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Notification;
