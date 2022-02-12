import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

  console.log(state, city);

  const handleReg = (e) => {
    e.preventDefault();

    const driverData = axios.post('http://localhost:3001/api/dealer/register', {
      name,
      username,
      password,
      email,
      mobileno,
      nature,
      weigth,
      quantity,
      state: state.name,
      city: state.name,
    });

    console.log(driverData);
  };

  return (
    <div>
      Dealerregisterform
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your dealer account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleReg}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
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
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
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
              <div>
                <label htmlFor="mobileno" className="sr-only">
                  Mobile No.
                </label>
                <input
                  value={mobileno}
                  onChange={(e) => setMobileno(e.target.value)}
                  id="mobileno"
                  name="mobileno"
                  type="tel"
                  autoComplete="mobileno"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Mobile No."
                />
              </div>
              <div>
                <label htmlFor="nature" className="sr-only">
                  Nature of material
                </label>
                <input
                  value={nature}
                  onChange={(e) => setNature(e.target.value)}
                  id="nature"
                  name="nature"
                  type="text"
                  autoComplete="nature"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nature of material"
                />
              </div>
              <div>
                <label htmlFor="weight" className="sr-only">
                  Weight of material
                </label>
                <input
                  value={weigth}
                  onChange={(e) => setWeight(e.target.value)}
                  id="weight"
                  name="weigth"
                  type="number"
                  autoComplete="weight"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Weight of material"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="sr-only">
                  Quantity of material
                </label>
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  id="quantity"
                  name="quantity"
                  type="number"
                  autoComplete="quantity"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Quantity of material"
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
