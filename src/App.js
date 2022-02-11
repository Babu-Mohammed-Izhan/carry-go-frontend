import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import DriverHome from './components/driverhome';
import DealerHome from './components/dealerhome';
import DealerLoginForm from './components/dealerloginform';
import DealerRegisterForm from './components/dealerregisterform';
import DriverLoginForm from './components/driverloginform';
import DriverRegisterForm from './components/driverregisterform';

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState(null);
  const [driver, setDriver] = useState(null);
  const [dealer, setDealer] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <div className="App">
          {user === null ? (
            <section>
              <Route path="/" element={<DealerLoginForm />} />
              <Route path="/register" element={<DealerRegisterForm />} />
              <Route path="/driver" element={<DriverLoginForm />} />
              <Route path="/driver/register" element={<DriverRegisterForm />} />
            </section>
          ) : (
            <section>
              {driver === null ? null : (
                <Route path="/" element={<DriverHome />} />
              )}
              {dealer === null ? null : (
                <Route path="/" element={<DealerHome />} />
              )}
            </section>
          )}
        </div>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
