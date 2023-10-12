import Layout from "../components/Layout";

function OnBording() {
  return (
    <Layout>
      <div className="flex w-screen flex-wrap text-slate-800 bg-white">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="my-auto mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]">
            <div className="flex w-full flex-col rounded-2xl bg-white px-2 sm:px-14">
              <div className="mx-auto w-full max-w-md pb-20 px-8 sm:px-0">
                <div className="relative">
                  <div
                    className="absolute left-0 top-2 h-0.5 w-full bg-gray-200"
                    aria-hidden="true"
                  >
                    <div className="absolute h-full w-1/3 bg-gray-900"></div>
                    <div className="left absolute left-1/3 h-full w-1/3 bg-gradient-to-r from-gray-900"></div>
                  </div>
                  <ul className="relative flex w-full justify-between">
                    <li className="text-left">
                      <a
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white"
                        href="#"
                      >
                        1
                      </a>
                    </li>
                    <li className="text-left">
                      <a
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                        href="#"
                      >
                        2
                      </a>
                    </li>
                    <li className="text-left">
                      <a
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white"
                        href="#"
                      >
                        3
                      </a>
                    </li>
                    <li className="text-left">
                      <a
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white"
                        href="#"
                      >
                        4
                      </a>
                    </li>{" "}
                    <li className="text-left">
                      <a
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white"
                        href="#"
                      >
                        5
                      </a>
                    </li>
                    <li className="text-left">
                      <a
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white"
                        href="#"
                      >
                        6
                      </a>
                    </li>
                    <li className="text-left">
                      <a
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white"
                        href="#"
                      >
                        7
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-gray-700">
                How big is your company
              </h2>
              <div className="mt-8 flex w-full flex-col pb-8">
                <div className="relative mb-4">
                  <div className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16">
                    <span className="mb-2 text-lg font-semibold">
                      Small Team
                    </span>
                    <p className="text-sm sm:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="relative h-10 w-full min-w-[200px] mt-10">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-black bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-accent focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-accent peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Input Teal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="my-4 space-y-3">
                  <label htmlFor="terms" className="flex space-x-4">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-6 w-6 shrink-0 accent-gray-900"
                      checked
                    />
                    <span
                      id="terms-description"
                      className="text-sm text-gray-600"
                    >
                      I agree to the{" "}
                      <a className="underline" href="#">
                        Terms and Conditions
                      </a>
                      . Learn about our Privacy Policy and our measures to keep
                      your data safe and secure.
                    </span>
                  </label>
                </div>

                <button
                  id="bottone1"
                  className="flex justify-center items-center"
                >
                  <strong>Discover features</strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-4 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden h-screen select-none flex-col justify-center bg-secondary bg-gradient-to-br md:flex md:w-1/2">
          <div className="py-16 px-8 text-white xl:w-[40rem]">
            <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
              New Feature
            </span>
            <p className="my-6 text-3xl font-semibold leading-10">
              Create animations with{" "}
              <span className="whitespace-nowrap py-2 text-cyan-300">
                drag and drop
              </span>
              .
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              necessitatibus nostrum repellendus ab totam.
            </p>
            <a
              href="#"
              className="font-semibold tracking-wide text-white underline underline-offset-4"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OnBording;
