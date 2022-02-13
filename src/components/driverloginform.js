import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Driverloginform = ({ setDriver, setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

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
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <Link to="/driver/register">Driver Registration</Link>
              <Link to="/">Dealer login</Link>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Driverloginform;
