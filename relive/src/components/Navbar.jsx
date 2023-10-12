import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white fixed bg-transparent w-full z-50">
      <div className="">
        <nav className="relative flex items-center justify-between h-20 lg:shadow-lg lg:h-18 lg:px-8 bg-background border-b drop-shadow-lg">
          <div className="flex-shrink-0">
            <Link href="#" title="" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="./Logo/logo(transparent).png"
                alt=""
              />
              <p className="text-2xl font-bold text-primary lg:text-3xl">
                {" "}
                <span className="text-accent">Re</span>Live{" "}
              </p>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>

            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            <Link
              to="#"
              title=""
              className="text-base font-medium text-white transition-all duration-200 hover:text-accent focus:text-accent"
            >
              {" "}
              Features{" "}
            </Link>

            <Link
              to="#"
              title=""
              className="text-base font-medium text-white transition-all duration-200 hover:text-accent focus:text-accent"
            >
              {" "}
              Solutions{" "}
            </Link>

            <Link
              to="#"
              title=""
              className="text-base font-medium text-white transition-all duration-200 hover:text-accent focus:text-accent"
            >
              {" "}
              Resources{" "}
            </Link>

            <Link
              to="#"
              title=""
              className="text-base font-medium text-white transition-all duration-200 hover:text-accent focus:text-accent"
            >
              {" "}
              Pricing{" "}
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <Link
              to="/SignUp"
              title=""
              className="text-base font-medium text-white transition-all duration-200 hover:text-accent focus:text-accent"
            >
              {" "}
              Sign up{" "}
            </Link>

            <Link
              to="/Login"
              title=""
              className="text-base font-medium text-white transition-all duration-200 hover:text-accent focus:text-accent"
            >
              {" "}
              Sign in{" "}
            </Link>
          </div>
        </nav>

        <nav className="flex flex-col py-4 space-y-2 lg:hidden">
          <Link
            href="#"
            title=""
            className="py-2 text-base font-medium text-black transition-all duration-200  hover:text-accent focus:text-accent"
          >
            {" "}
            Features{" "}
          </Link>

          <Link
            href="#"
            title=""
            className="py-2 text-base font-medium text-black transition-all duration-200  hover:text-accent focus:text-accent"
          >
            {" "}
            Solutions{" "}
          </Link>

          <Link
            href="#"
            title=""
            className="py-2 text-base font-medium text-black transition-all duration-200  hover:text-accent focus:text-accent"
          >
            {" "}
            Resources{" "}
          </Link>

          <Link
            href="#"
            title=""
            className="py-2 text-base font-medium text-black transition-all duration-200 hover:text-accent focus:text-accent"
          >
            {" "}
            Pricing{" "}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
