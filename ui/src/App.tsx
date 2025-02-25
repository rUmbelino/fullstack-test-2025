import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; // Import the custom CSS file for styling
import { AppointmentsList } from './components/ListAppointments/ListAppointments';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <AppointmentsList />
      </div>
    </>
  );
}

export default App;

