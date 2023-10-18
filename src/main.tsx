// main.tsx
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './modal';
import Notification from './notification';

import { SnackbarCloseReason } from '@mui/material/Snackbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ id: number; description: string }>({ id: 0, description: '' });
  const openModal = (data: { id: number; description: string }) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBet = () => {
    setIsModalOpen(false);
    showNotification('Bet placed successfully!', 'success');
  };
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (message: string, type: 'success' | 'info' | 'warning' | 'error') => {
    const id = String(new Date().getTime()); // Generate a unique ID for the notification
    setNotification({ id, message, type });
  };

  const closeNotification = (event: Event | React.SyntheticEvent<Element, Event>, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification(null);
  };

  const [events, setEvents] = useState([{
    event_id: 0,
    event_name: '',
    odds: 0
  }]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/events', {
      withCredentials: true,
    })
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events', error));
  }, []);

  return (
    
    <div>
      <h1>Sports Betting Dashboard</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="right">event</TableCell>
              <TableCell align="right">odd</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow
                key={event.event_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {event.event_id}
                </TableCell>
                <TableCell align="right">{event.event_name}</TableCell>
                <TableCell align="right">{event.odds}</TableCell>
                <TableCell align="right"><Button onClick={() => openModal({ id: event.event_id, description: event.event_name })}>Place bet</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={isModalOpen} handleClose={closeModal} handleBet={handleBet} >
        {modalData}
      </Modal>
      <Notification notification={notification} onClose={closeNotification} />
    </div>
    
  );
}

export default App;
