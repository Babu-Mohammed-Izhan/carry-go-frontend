import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-dropdown-select';
import { cities, states } from '../utils/constants';
import axios from 'axios';

const Driverregisterform = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [capacity, setCapacity] = useState('');
  const [truckno, setTruckno] = useState('');
  const [transporter, setTransporter] = useState('');
  const [experience, setExperience] = useState('');

  const [tostate1, setToState1] = useState('');
  const [tocity1, setToCity1] = useState('');
  const [fromstate1, setFromState1] = useState('');
  const [fromcity1, setFromCity1] = useState('');

  const [tostate2, setToState2] = useState('');
  const [tocity2, setToCity2] = useState('');
  const [fromstate2, setFromState2] = useState('');
  const [fromcity2, setFromCity2] = useState('');

  const [tostate3, setToState3] = useState('');
  const [tocity3, setToCity3] = useState('');
  const [fromstate3, setFromState3] = useState('');
  const [fromcity3, setFromCity3] = useState('');

  const navigate = useNavigate();

  const handleReg = async (e) => {
    e.preventDefault();

    const driverData = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/driver/register`,
      {
        name,
        username,
        password,
        age,
        email,
        mobileno,
        capacity,
        truckno,
        transporter,
        experience,
        routes: [
          {
            to: `${tostate1.name}-${tocity1.name}`,
            from: `${fromstate1.name}-${fromcity1.name}`,
          },
          {
            to: `${tostate2.name}-${tocity2.name}`,
            from: `${fromstate2.name}-${fromcity2.name}`,
          },
          {
            to: `${tostate3.name}-${tocity3.name}`,
            from: `${fromstate3.name}-${fromcity3.name}`,
          },
        ],
      }
    );

    if (driverData.status === 200) {
      navigate('/driver');
    }
  };

  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-black">
          <div>
            <h1 className="text-center text-5xl font-extrabold text-gray-900">
              {' '}
              Carry Go{' '}
            </h1>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your driver account
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleReg}
          >
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
                <label htmlFor="username">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="emai;"
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
                <label htmlFor="age">Age</label>
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  id="age"
                  name="age"
                  type="number"
                  autoComplete="age"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="truckno">Truck No.</label>
                <input
                  value={truckno}
                  onChange={(e) => setTruckno(e.target.value)}
                  id="truckno"
                  name="truckno"
                  type="number"
                  autoComplete="truckno"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="username">Mobile No.</label>
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
                <label htmlFor="capacity">Truck Capacity</label>
                <input
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  id="capacity"
                  name="capacity"
                  type="number"
                  autoComplete="capacity"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <div>
                  <label htmlFor="transporter">Transporter Name</label>
                  <input
                    value={transporter}
                    onChange={(e) => setTransporter(e.target.value)}
                    id="transporter"
                    name="transporter"
                    type="text"
                    autoComplete="transporter"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="experience">Driving Experience</label>
                  <input
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    id="experience"
                    name="experience"
                    type="number"
                    autoComplete="experience"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <h2 className="font-bold">Route1</h2>

                  <p className="font-bold">From:</p>
                  <label>State</label>
                  <Select
                    className="text-black"
                    options={states}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setFromState1(values[0])}
                  />
                  <label>City</label>
                  <Select
                    options={cities[fromstate1.name]}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setFromCity1(values[0])}
                  />

                  <p className="font-bold">To:</p>
                  <label>State</label>
                  <Select
                    options={states}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setToState1(values[0])}
                  />
                  <label>City</label>
                  <Select
                    options={cities[tostate1.name]}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setToCity1(values[0])}
                  />
                </div>
                <div>
                  <h2 className="font-bold">Route2</h2>

                  <p className="font-bold">From:</p>
                  <label>State</label>
                  <Select
                    className="text-black"
                    options={states}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setFromState2(values[0])}
                  />
                  <label>City</label>
                  <Select
                    options={cities[fromstate2.name]}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setFromCity2(values[0])}
                  />

                  <p className="font-bold">To:</p>
                  <label>State</label>
                  <Select
                    options={states}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setToState2(values[0])}
                  />
                  <label>City</label>
                  <Select
                    options={cities[tostate2.name]}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setToCity2(values[0])}
                  />
                </div>
                <div>
                  <h2 className="font-bold">Route3</h2>

                  <p className="font-bold">From:</p>
                  <label>State</label>
                  <Select
                    className="text-black"
                    options={states}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setFromState3(values[0])}
                  />
                  <label>City</label>
                  <Select
                    options={cities[fromstate3.name]}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setFromCity3(values[0])}
                  />

                  <p className="font-bold">To:</p>
                  <label>State</label>
                  <Select
                    options={states}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setToState3(values[0])}
                  />
                  <label>City</label>
                  <Select
                    options={cities[tostate3.name]}
                    labelField="name"
                    valueField="name"
                    onChange={(values) => setToCity3(values[0])}
                  />
                </div>
              </div>

              <div className="flex justify-between my-5">
                <Link to="/driver">Driver Login</Link>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Driverregisterform;
