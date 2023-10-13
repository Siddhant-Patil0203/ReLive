import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <section className="text-text body-font px-7">
        <div className="container py-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-medium title-font mb-2 text-text">
                Statistic
              </h1>
              <div className="h-1 w-20 bg-secondary rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <div className="bg-secondary rounded-lg p-2 xl:p-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  2.7K
                </h2>
                <p className="leading-relaxed text-gray-100 font-bold">Users</p>
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <div className="bg-secondary rounded-lg p-2 xl:p-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  1.8K
                </h2>
                <p className="leading-relaxed text-gray-100 font-bold">
                  Subscribes
                </p>
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <div className="bg-secondary rounded-lg p-2 xl:p-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  35
                </h2>
                <p className="leading-relaxed text-gray-100 font-bold">
                  Downloads
                </p>
              </div>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <div className="bg-secondary rounded-lg p-2 xl:p-6">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  4
                </h2>
                <p className="leading-relaxed text-gray-100 font-bold">
                  Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-text body-font px-7">
        <div className="container py-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <div className="w-full mb-6 lg:mb-0">
                <h1 className="text-4xl lg:text-5xl font-medium title-font mb-2 text-text">
                  Todays Exercises
                </h1>
                <div className="h-1 w-20 bg-secondary rounded"></div>
              </div>
              <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
                {[1, 2, 3].map((item, index) => {
                  return (
                    <div
                      className="flex flex-col overflow-hidden bg-secondary shadow-md rounded-xl"
                      key={index}
                    >
                      <div className="flex flex-col justify-between flex-1 px-5 py-6">
                        <div className="flex-shrink-0">
                          <span className="block text-xs font-semibold tracking-widest text-accent uppercase">
                            {" "}
                            Marketing{" "}
                          </span>
                        </div>

                        <div className="flex-1 mt-16">
                          <p className="text-2xl font-semibold">
                            <a href="#" title="" className="text-text">
                              {" "}
                              6 Product launching emails you want to use next.{" "}
                            </a>
                          </p>
                          <p className="mt-4 text-base text-text">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 bg-primary">
                        <div className="flex">
                          <div className="flex items-center flex-1 px-6 py-5">
                            <img
                              className="object-cover w-8 h-8 rounded-full"
                              src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-3.jpg"
                              alt=""
                            />
                            <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                              {" "}
                              Jenny Wilson{" "}
                            </span>
                          </div>

                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-accent border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                          >
                            Read more
                            <svg
                              className="w-5 h-5 ml-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-text body-font px-7">
        <div className="container py-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-medium title-font mb-2 text-text">
                Your Favourites
              </h1>
              <div className="h-1 w-20 bg-secondary rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between text-center">
            <div className="relative bg-secondary py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">App Development</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Marketing Team</p>
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>1 Weeks Left</p>
                </div>
                <div className="border-t-2"></div>

                <div className="flex justify-between">
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Team Member</p>
                    <div className="flex space-x-2">
                      <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        className="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"
                        className="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Progress</p>
                    <div className="text-base text-gray-400 font-semibold">
                      <p>34%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-secondary py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="mt-8 text-start">
                <p className="text-xl font-semibold my-2">Web Design</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Core UI Team</p>
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>3 Weeks Left</p>
                </div>
                <div className="border-t-2 "></div>

                <div className="flex justify-between">
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Team Member</p>
                    <div className="flex space-x-2">
                      <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Progress</p>
                    <div className="text-base text-gray-400 font-semibold">
                      <p>76%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-secondary py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div className="mt-8 text-start">
                <p className="text-xl font-semibold my-2">Leading Page</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Marketing Team</p>
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>2 Days Left</p>
                </div>
                <div className="border-t-2 "></div>

                <div className="flex justify-between">
                  <div className="my-2 text-start">
                    <p className="font-semibold text-base mb-2">Team Member</p>
                    <div className="flex space-x-2">
                      <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        className="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"
                        className="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Progress</p>
                    <div className="text-base text-gray-400 font-semibold">
                      <p>4%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-secondary py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <div className="mt-8 text-start">
                <p className="text-xl font-semibold my-2">Business Compare</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Marketing Team</p>
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>1 Month Left</p>
                </div>
                <div className="border-t-2 "></div>

                <div className="flex justify-between">
                  <div className="my-2 text-start">
                    <p className="font-semibold text-base mb-2">Team Member</p>
                    <div className="flex space-x-2">
                      <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        className="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="my-2">
                    <p className="font-semibold text-base mb-2">Progress</p>
                    <div className="text-base text-gray-400 font-semibold">
                      <p>90%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
