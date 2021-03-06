import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Driverloginform = ({ setDriver, setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [sent, setSent] = useState(false);

  const navigate = useNavigate();

  const handleSendOtp = async () => {
    const driverData = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/driver/otp`,
      {
        email,
      }
    );
    if (driverData.status === 200) {
      setSent(true);
    }
  };

  const handleVerify = async () => {
    const driverData = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/driver/login`,
      {
        email,
        otp,
      }
    );

    if (driverData.status === 200) {
      const data = driverData.data;
      window.localStorage.setItem(
        'loggedGoappUser',
        JSON.stringify({ ...data, role: 'driver' })
      );

      console.log(data);

      setDriver({ ...data, role: 'driver' });
      setUser({ ...data, role: 'driver' });
      navigate('/');
    }
  };

  const handelLogin = async (e) => {
    e.preventDefault();

    const driverData = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/driver/login`,
      {
        username,
        password,
      }
    );

    if (driverData.status === 200) {
      const data = driverData.data;
      window.localStorage.setItem(
        'loggedGoappUser',
        JSON.stringify({ ...data, role: 'driver' })
      );

      console.log(data);

      setDriver({ ...data, role: 'driver' });
      setUser({ ...data, role: 'driver' });
      navigate('/');
    }
  };

  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-center text-5xl font-extrabold text-gray-900">
              {' '}
              Carry Go{' '}
            </h1>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in to your driver account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handelLogin}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username">Username</label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <h1 className="text-center text-3xl font-extrabold text-gray-900">
            Using OTP
          </h1>
          {sent ? (
            <div>
              <label htmlFor="username">Otp</label>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              />
              <button
                onClick={() => handleVerify()}
                className="my-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Verify
              </button>
            </div>
          ) : (
            <div>
              <label htmlFor="username">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              />
              <button
                onClick={() => handleSendOtp()}
                className="my-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send Otp
              </button>
            </div>
          )}
          <div className="flex justify-between">
            <Link to="/driver/register">Driver Registration</Link>
            <Link to="/">Dealer login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driverloginform;
