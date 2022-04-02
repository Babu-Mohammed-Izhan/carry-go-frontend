import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import DriverHome from './components/driverhome';
import DealerHome from './components/dealerhome';
import DealerLoginForm from './components/dealerloginform';
import DealerRegisterForm from './components/dealerregisterform';
import DriverLoginForm from './components/driverloginform';
import DriverRegisterForm from './components/driverregisterform';
import Navbar from './components/navbar';

function App() {
  const [user, setUser] = useState(null);
  const [driver, setDriver] = useState(null);
  const [dealer, setDealer] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedGoappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      if (user.role === 'dealer') {
        setDealer(user);
      }
      if (user.role === 'driver') {
        setDriver(user);
      }
      setUser(user);
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem('loggedGoappUser');
    setUser(null);
    setDealer(null);
    setDriver(null);
    navigate('/');
  };

  if (user === null) {
    return (
      <Routes>
        <Route
          path="/"
          element={<DealerLoginForm setUser={setUser} setDealer={setDealer} />}
        />
        <Route path="/register" element={<DealerRegisterForm />} />
        <Route
          path="/driver"
          element={<DriverLoginForm setUser={setUser} setDriver={setDriver} />}
        />
        <Route path="/driver/register" element={<DriverRegisterForm />} />
      </Routes>
    );
  }

  return (
    <>
      <Navbar handleLogout={() => handleLogout()} />
      <Routes>
        {driver != null && (
          <Route path="/" element={<DriverHome driverInfo={driver} />} />
        )}
        {dealer != null && (
          <Route path="/" element={<DealerHome dealerInfo={dealer} />} />
        )}
      </Routes>
    </>
  );
}

export default App;
