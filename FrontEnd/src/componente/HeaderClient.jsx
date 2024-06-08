// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';


import logo from "../../assets/logo_jaz.png";

function HeaderAdmin() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className=" bg-gray-100 p-0 dark:bg-neutral-900">
      {/* Header */}
      <div className="flex justify-between items-center bg-gradient-to-r from-green-600 via-white to-red-600 p-4 rounded-md shadow-md mb-4 ">
        <img src={logo} alt="Logo" className="h-24 py-5 " />
        
        <div className="flex items-center space-x-2 ">
          <button className="text-xl text-white" onClick={changeTheme}>🌙</button>
          <button className="text-xl text-white">👤</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
