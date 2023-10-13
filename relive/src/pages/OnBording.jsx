import Layout from "../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

function OnBording() {
  const navigateTo = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const field = [
    "UserName",
    "Age",
    "Gender",
    "Weight",
    "Height",
    "Plan",
    "ReminderTime",
  ];

  const fieldsValues = [
    "Choose a unique username for your account which will represent you on the platform",
    "Your age will help us to provide you with the best exercies recommendation",
    "Gender plays a vital role in the selection of exercises",

    "Weight is an important factor in the repitition and duration selection of exercises",
    "One of the most important factor in the selection of exercises",
    "Choose a plan that suits you the best and we will provide you with the best exercises",

    " Choose a time when you want to be reminded about your exercises everyday ",
  ];
  const [input, setInput] = useState({});

  const [currentInput, setCurrentInput] = useState("");

  const handelChange = async () => {
    setInput({ ...input, [field[currentStep]]: currentInput });
    setCurrentInput("");
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log(input);
      
      try {
        const res = await axios.put("/user/update", input)
        console.log(res);
        const result = res.data;
        console.log(result);
        localStorage.setItem("user", JSON.stringify({ ...result }));
        navigateTo("/Home")
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <Layout>
      <div className="flex flex-wrap w-screen bg-white text-slate-800">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="my-auto mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]">
            <div className="flex flex-col w-full px-2 bg-white rounded-2xl sm:px-14">
              <div className="w-full max-w-md px-8 pb-20 mx-auto sm:px-0">
                <div className="relative">
                  <div
                    className="absolute left-0 top-2 h-0.5 w-full bg-gray-200"
                    aria-hidden="true"
                  >
                    {/* <div
                      className={`absolute h-full ${
                        "w-" + currentStep + "/6"
                      } bg-gray-900`}
                    ></div>
                    <div
                      className={`left absolute ${
                        "left-" + "1/" + currentLine
                      } h-full ${
                        "w-" + currentStep + "/6"
                      } bg-gradient-to-r from-gray-900`}
                    ></div> */}
                  </div>
                  <ul className="relative flex justify-between w-full">
                    {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                      return (
                        <li className="text-left" key={index}>
                          <a
                            className={
                              currentStep == index
                                ? "flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white ring ring-primary ring-offset-2"
                                : "flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white"
                            }
                            href="#"
                          >
                            {index + 1}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-gray-700">
                Just answer a few questions to get started !!
              </h2>
              <div className="flex flex-col w-full pb-8 mt-8">
                <div className="relative mb-4">
                  <div className="flex flex-col p-4 pr-8 border border-gray-300 cursor-pointer rounded-2xl bg-slate-100/80 sm:pr-16">
                    <span className="mb-2 text-lg font-semibold">
                      {field[currentStep]}
                    </span>
                    <p className="text-sm sm:text-base">
                      {fieldsValues[currentStep]}
                    </p>
                    <div className="relative h-10 w-full min-w-[200px] mt-10">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-black bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=""
                        value={currentInput}
                        onChange={(e) => {
                          setCurrentInput(e.target.value);
                        }}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        {field[currentStep]}
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
                      className="w-6 h-6 shrink-0 primary-gray-900"
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
                  className="flex items-center justify-center"
                  onClick={handelChange}
                >
                  <strong>Discover features</strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-4"
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
        <div className="relative flex-col justify-center hidden h-screen select-none bg-secondary bg-gradient-to-br md:flex md:w-1/2">
          <div className="py-16 px-8 text-white xl:w-[40rem]">
            <span className="px-3 py-1 font-medium bg-white rounded-full text-accent">
              ReLive
            </span>
            <p className="my-6 text-3xl font-semibold leading-10">
              A Fitter Way to Live | {" "}
              <span className="py-2 whitespace-nowrap text-accent">
                Relive
              </span>
              .
            </p>
            <p className="mb-4">
              Elevate your fitness journey with our app, where you can connect with friends, track your exercise form and pose through AI, and achieve your wellness goals while following a tailored, personalized workout plan with the support of your Gym Buddy followers.
            </p>
            <a
              href="#"
              className="font-semibold tracking-wide underline text-accent underline-offset-4"
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
