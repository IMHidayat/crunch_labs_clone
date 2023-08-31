import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../components/Button";

import crunchLabsLogo from "../assets/img/crunchLabsLogo.png";
import { rotate180 } from "../utils/variants";

export default function Home() {
  useEffect(() => {
    // console.log("hello bish");
  }, []);

  // ? COMPONENTS/////////////////////////////////////////////////////////////////////////
  function Navbar() {
    const [isNavDropBtn, setIsNavDropBtn] = useState(false);
    const [isMoreBtn, setIsMoreBtn] = useState(false);

    const navbarDropBtnHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        (e.target as HTMLInputElement).checked = !(e.target as HTMLInputElement)
          .checked;
        setIsNavDropBtn(!isNavDropBtn);
        setIsMoreBtn(false);
      }
    };

    const DropdownLink = (p: {
      children: string | React.ReactNode;
      className?: string;
      link?: string;
      onClick?: () => void;
    }) => {
      return (
        <li className="">
          <a
            href={p.link || "#"}
            className={`flex py-4 uppercase font-bold border-b border-b-blue-100 text-c1 ${p.className}`}
            onClick={p.onClick}>
            {p.children}
          </a>
        </li>
      );
    };

    const NavLink = (p: {
      children: string | React.ReactNode;
      className?: string;
      onClick?: () => void;
    }) => {
      return (
        <a
          href="#"
          className={`btn text-xs text-white hover:text-c4 bg-transparent hover:bg-transparent ${p.className}`}>
          {p.children}
        </a>
      );
    };

    return (
      <>
        <nav className="bg-c1">
          <div className="flex mx-auto p-2 xl:py-0 xl:px-8 flex-wrap items-center xl:justify-between">
            {/* NAVBAR MENU BUTTON */}
            <label className="btn xl:hidden btn-square swap swap-rotate sm:me-2 bg-c1 hover:bg-transparent">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onKeyDown={(e) => {
                  navbarDropBtnHandler(e);
                }}
                onClick={() => {
                  setIsNavDropBtn(!isNavDropBtn);
                  setIsMoreBtn(false);
                }}
              />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>

            {/* SM: NAVBAR DROPDOWN MENU */}
            <motion.div
              className="absolute top-[70px] left-0 bottom-0 w-full overflow-auto bg-white"
              initial={{ height: 0, display: "none" }}
              animate={
                isNavDropBtn
                  ? { height: "auto", display: "block" }
                  : { height: 0, transitionEnd: { display: "none" } }
              }
              transition={{ duration: 0.25, ease: "easeOut" }}>
              <ul className="flex p-4 mb-10 mt-4 flex-col overflow-y-scroll">
                <Button className="mb-8">SUBSCRIBE</Button>
                <DropdownLink className="mb-2">EDUCATORS</DropdownLink>
                <DropdownLink
                  className="items-center"
                  onClick={() => setIsMoreBtn(!isMoreBtn)}>
                  MORE
                  <svg
                    className="ms-auto"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
                  </svg>
                </DropdownLink>
              </ul>
            </motion.div>

            {/* SM: MORE BTN */}
            <motion.div
              className="absolute top-[70px] left-0 bottom-0 h-screen w-full overflow-hidden bg-white"
              initial={false}
              animate={
                isMoreBtn
                  ? { x: 0, display: "block" }
                  : { x: 400, transitionEnd: { display: "none" } }
              }
              transition={{ duration: 0.25, ease: "easeOut" }}>
              <ul className="flex p-4 mb-10 flex-col overflow-scroll ">
                <DropdownLink
                  className="mb-2 items-center "
                  onClick={() => setIsMoreBtn(!isMoreBtn)}>
                  <svg
                    className="me-2"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
                  </svg>
                  MORE
                </DropdownLink>
                <DropdownLink className="mb-2">STORE</DropdownLink>
                <DropdownLink className="mb-2">GIFT CREDITS</DropdownLink>
                <DropdownLink className="mb-2">ABOUT US</DropdownLink>
                <DropdownLink className="items-center">FAQ</DropdownLink>
              </ul>
            </motion.div>

            {/* LOGO */}
            <img src={crunchLabsLogo} className="h-8 mr-3" alt="C" />

            {/* XL NAVIGATION MENU */}
            <div className="hidden xl:flex gap-4 items-center bg-red-500a">
              <NavLink className="">SUBSCRIBE</NavLink>
              <NavLink className="">EDUCATORS</NavLink>
              <div className="dropdown dropdown-hover">
                <motion.label
                  initial="default"
                  animate="default"
                  whileHover="hover"
                  tabIndex={0}
                  className="btn h-16 text-xs rounded-none text-white bg-transparent hover:bg-transparent">
                  More
                  <motion.svg
                    variants={rotate180}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5.56L2.413 5h11.194l.393.54L8.373 11h-.827L2 5.56z" />
                  </motion.svg>
                </motion.label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow rounded-b-xl w-52 bg-c1 text-white ">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 focus:ring focus:text-white">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 focus:ring focus:text-white">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 focus:ring focus:text-white">
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 focus:ring focus:text-white">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* USER AND SHOPPING CART CONTAINER */}
            <div className="flex items-center gap-3 md:gap-6 xl:gap-10 me-2 ms-auto xl:ms-0">
              {/* USER PROFILE */}
              <button className="btn p-0 bg-transparent hover:bg-transparent">
                <svg
                  className="w-8 h-8 me-2"
                  stroke="#fff"
                  fill="#fff"
                  strokeWidth={-10}
                  viewBox="0 0 496 512"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z" />
                </svg>
                <span className="hidden xl:inline text-white">Sign in</span>
              </button>
              {/* SHOPPING CART */}
              <div className="drawer drawer-end">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label
                    htmlFor="my-drawer"
                    className="drawer-button btn p-0 hover:bg-transparent bg-c1 ">
                    <svg
                      className="w-8 h-8"
                      stroke="#fff"
                      fill="#fff"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z" />
                    </svg>
                    <span className="ms-[-7px] text-white">(0)</span>
                  </label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer" className="drawer-overlay"></label>
                  <div className="menu py-2 px-4 w-80 min-h-full bg-white text-base-content">
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold text-xl text-c1">CART</h1>
                      <label
                        htmlFor="my-drawer"
                        className="drawer-button btn p-0 btn-transparent">
                        <svg
                          className="w-6 h-6"
                          stroke="#000"
                          fill="#000"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                        </svg>
                      </label>
                    </div>
                    <div className="flex flex-col items-center text-c1">
                      <svg
                        className="w-16 h-16"
                        stroke="#00416c"
                        fill="#00416c"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </g>
                      </svg>
                      <h1 className="my-4 font-bold text-xl font-cycloneLayers">
                        YOUR CART IS EMPTY
                      </h1>
                      <a href="#" className="underline">
                        Continue shopping
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="grid">
        {/* <video className="w-full h-screen" loop autoPlay>
          <source src="../assets/Video/heroVideo.mp4" type="video/mp4" />
        </video> */}
        <video
          className="w-full h-[40rem] bg-gray-500 object-cover"
          autoPlay
          loop>
          <source src="" type="video/mp4" />
        </video>
      </main>
    </>
  );
}
