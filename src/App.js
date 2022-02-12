import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DriverHome from './components/driverhome';
import DealerHome from './components/dealerhome';
import DealerLoginForm from './components/dealerloginform';
import DealerRegisterForm from './components/dealerregisterform';
import DriverLoginForm from './components/driverloginform';
import DriverRegisterForm from './components/driverregisterform';

function App() {
  const [user, setUser] = useState(null);
  const [driver, setDriver] = useState(null);
  const [dealer, setDealer] = useState({ _id: 'kjdsnkfsnkfnskdfn' });

  return (
    <BrowserRouter>
      <Routes>
        {user === null ? (
          <>
            <Route path="/" element={<DealerLoginForm />} />
            <Route path="/register" element={<DealerRegisterForm />} />
            <Route path="/driver" element={<DriverLoginForm />} />
            <Route path="/driver/register" element={<DriverRegisterForm />} />
          </>
        ) : (
          <>
            {driver === null ? null : (
              <Route path="/" element={<DriverHome driverInfo={driver} />} />
            )}
            {dealer === null ? null : (
              <Route path="/" element={<DealerHome dealerInfo={dealer} />} />
            )}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
