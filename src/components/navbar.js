import React from 'react';

const Navbar = ({ handleLogout }) => {
  return (
    <div className="flex w-full justify-between px-10 pt-3">
      <h3 className="text-lg font-bold">Carry Go</h3>
      <button
        className="py-1 px-2 bg-red-600 text-white rounded"
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
