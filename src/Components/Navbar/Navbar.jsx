import React, { useState } from "react";
import css from "./Navbar.module.css";
import BlackButton from "../BlackButton/BlackButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openContact, setOpenContact] = useState(false)

  const navigate = useNavigate();
  return (
    <div className={css.container} style={{ position: 'relative' }}>
      <div className={css.sections}>
        <div
          className={css.logoSection}
          onClick={() => {
            navigate("home");
          }}
        >
          <h1>Pyrowatch</h1>
        </div>
        <div className={css.linksSections}>
          <h4
            onClick={() => {
              navigate("aboutus");
            }}
          >
            About Us
          </h4>
          <h4
            onClick={() => {
              navigate("services");
            }}
          >
            Services
          </h4>
          <div className={css.resourcesCenter}>
            <h4
              onClick={() => {
                navigate("resources");
              }}
            >
              Resources
            </h4>
            *
          </div>
        </div>
        <div className={css.signUpSection}>
          <BlackButton
            onClickMethod={() => {setOpenContact(!openContact) }}
            title={"Sign Up"} />
        </div>
      </div>

      {
        openContact ?
          <div className="w-screen h-screen flex flex-col bg-gray-600 bg-opacity-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center">
            <form className="w-2/4 p-10 bg-white shadow-lg">
              <div className="flex flex-row justify-between">
                <h3 className="text-4xl text-start pb-4 font-bold">Sign Up </h3>
                <button
                  onClick={() => { setOpenContact(!openContact) }}
                  type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                </button>
              </div>
              <div class="mb-6 flex items-start flex-col">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
              </div>
              <div class="mb-6 flex items-start flex-col">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
              </div>
              <div class="mb-6 flex items-start flex-col">
                <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
                <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
              </div>
              <div class="flex items-start mb-6 flex-row">
                <div class="flex items-center h-5">
                  <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
              </div>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>

          </div> : null
      }
    </div>
  );
};

export default Navbar;
