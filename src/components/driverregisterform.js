import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleReg = async (e) => {
    e.preventDefault();

    const driverData = axios.post('http://localhost:3001/api/driver/register', {
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
        { to: tocity1, from: fromcity1 },
        { to: tocity2, from: fromcity2 },
        { to: tocity3, from: fromcity3 },
      ],
    });

    console.log(driverData);
  };

  return (
    <div>
      driverregisterform
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-black">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your driver account
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
                <label htmlFor="username" className="sr-only">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="emai;"
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
                <label htmlFor="age" className="sr-only">
                  Age
                </label>
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  id="age"
                  name="age"
                  type="number"
                  autoComplete="age"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Age"
                />
              </div>
              <div>
                <label htmlFor="truckno" className="sr-only">
                  Truck No.
                </label>
                <input
                  value={truckno}
                  onChange={(e) => setTruckno(e.target.value)}
                  id="truckno"
                  name="truckno"
                  type="number"
                  autoComplete="truckno"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Truck Number"
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">
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
                <label htmlFor="capacity" className="sr-only">
                  Truck Capacity
                </label>
                <input
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  id="capacity"
                  name="capacity"
                  type="number"
                  autoComplete="capacity"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Truck Capacity"
                />
              </div>
              <div>
                <div>
                  <label htmlFor="transporter" className="sr-only">
                    Transporter Name
                  </label>
                  <input
                    value={transporter}
                    onChange={(e) => setTransporter(e.target.value)}
                    id="transporter"
                    name="transporter"
                    type="text"
                    autoComplete="transporter"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Transporter Name"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="sr-only">
                    Driving Experience
                  </label>
                  <input
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    id="experience"
                    name="experience"
                    type="number"
                    autoComplete="experience"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Driving Experience"
                  />
                </div>
                <div>
                  <h2 className="font-bold">Route1</h2>
                  <div className="flex w-full">
                    <div className="w-full">
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
                    </div>
                    <div className="w-full">
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
                  </div>
                </div>
                <div>
                  <h2 className="font-bold">Route2</h2>
                  <div className="flex w-full">
                    <div className="w-full">
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
                    </div>
                    <div className="w-full">
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
                  </div>
                </div>
                <div>
                  <h2 className="font-bold">Route3</h2>
                  <div className=" flex w-full">
                    <div className="w-full">
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
                    </div>
                    <div className="w-full">
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
