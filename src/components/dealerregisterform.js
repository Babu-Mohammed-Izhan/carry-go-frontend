import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-dropdown-select';
import { cities, states } from '../utils/constants';

const Dealerregisterform = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [nature, setNature] = useState('');
  const [weigth, setWeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const navigate = useNavigate();

  const handleReg = async (e) => {
    e.preventDefault();

    const dealerData = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/dealer/register`,
      {
        name,
        username,
        password,
        email,
        mobileno,
        nature,
        weigth,
        quantity,
        state: state.name,
        city: city.name,
      }
    );

    if (dealerData.status === 200) {
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
              Create your dealer account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleReg}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="mobileno">Mobile No.</label>
                <input
                  value={mobileno}
                  onChange={(e) => setMobileno(e.target.value)}
                  id="mobileno"
                  name="mobileno"
                  type="tel"
                  autoComplete="mobileno"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="nature">Nature of material</label>
                <input
                  value={nature}
                  onChange={(e) => setNature(e.target.value)}
                  id="nature"
                  name="nature"
                  type="text"
                  autoComplete="nature"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="weight">Weight of material</label>
                <input
                  value={weigth}
                  onChange={(e) => setWeight(e.target.value)}
                  id="weight"
                  name="weigth"
                  type="number"
                  autoComplete="weight"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity of material</label>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  id="quantity"
                  name="quantity"
                  type="number"
                  autoComplete="quantity"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <label>State</label>
              <Select
                options={states}
                labelField="name"
                valueField="name"
                onChange={(values) => setState(values[0])}
              />
              <label>City</label>
              <Select
                options={cities[state.name]}
                labelField="name"
                valueField="name"
                onChange={(values) => setCity(values[0])}
              />
            </div>

            <div className="flex justify-between">
              <Link to="/">Dealer login</Link>
              <Link to="/driver">Driver Login</Link>
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

export default Dealerregisterform;
