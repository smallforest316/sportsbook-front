// modal.tsx
import React, { FC } from 'react';
import { Modal, Button, Box, Typography, TextField } from '@mui/material';

interface SimpleModalProps {
  open: boolean;
  handleClose: () => void;
  handleBet: () => void;
  children: any;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const SimpleModal: FC<SimpleModalProps> = ({ open, handleClose, handleBet, children }) => {
  return (
    <Modal 
        open={open} 
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Event ID: {children.id}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Event Name: {children.description}
                </Typography>
                <TextField
                  variant="standard"
                  margin='none'
                  placeholder='Input bet amount'
                />
                <Button onClick={handleBet}>Place bet</Button>
                <Button onClick={handleClose}>Close</Button>
            </div>
        </Box>
    </Modal>
  );
};

export default SimpleModal;
