import { useState, useRef } from "react"
import useClickedOutsideSideBar from "../../hooks/useClickedOutsideSideBar"


export default function SideBar() {
      const [showSidebar, setShowSidebar] = useState(false);
      const wrapperRef = useRef(null)
      useClickedOutsideSideBar(wrapperRef, setShowSidebar)

    return (
      <div
        ref={wrapperRef}
        id="navbar-layout"
        className="bg-primary-900 flex flex-wrap justify-between"
      >
        <a href="/">
          <h3 id="home" className="text-secondary-200 font-semibold text-xl">
            Duke Maquiling
          </h3>
        </a>
        <div className="self-center">
          <div>
            <svg
              onClick={() => setShowSidebar(!showSidebar)}
              className="flex cursor-pointer fill-secondary-200"
              fill="white"
              viewBox="0 0 100 80"
              width="30"
              height="30"
            >
              <rect y="5" width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="55" width="100" height="10"></rect>
            </svg>
          </div>
          <div
            className={`bg-primary-900 top-0 right-0 w-1/3 bg-nb-pink text-white fixed h-full z-40  ease-in-out duration-300 shadow-xl ${
              showSidebar ? "translate-x-0 " : "translate-x-full"
            }`}
          >
            <div className="mt-10 ml-5 rotate-45 w-fit h-fit">
              <svg
                onClick={() => setShowSidebar(!showSidebar)}
                className="flex cursor-pointer fill-secondary-200"
                // fill="bg-primary"
                viewBox="0 0 100 80"
                width="20"
                height="20"
              >
                <rect
                  transform="rotate(0)"
                  x="0"
                  y="34"
                  width="100"
                  height="10"
                ></rect>
                <rect
                  transform="rotate(90)"
                  x="-10"
                  y="-56"
                  width="100"
                  height="10"
                ></rect>
              </svg>
            </div>
            <div className="flex flex-col gap-5 mt-6 ml-5 text-secondary-200">
              <a onClick={() => setShowSidebar(!showSidebar)} href="/">
                My Work
              </a>
              <a onClick={() => setShowSidebar(!showSidebar)} href="/myart">
                My Art
              </a>
              <a onClick={() => setShowSidebar(!showSidebar)} href="/about">
                About
              </a>
              <a
                // alt="alt text"
                download
                target="_blank"
                rel="noopener noreferrer"
                href="/Resume - Mikaela Maquiling.pdf"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}