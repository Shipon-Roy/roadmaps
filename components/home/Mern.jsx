import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Mern() {
  return (
    <div className="wrapper border-general scroll-mt-16 border-t bg-right bg-no-repeat dark:bg-none lg:bg-shape2 ">
      <div className="container space-y-5 ">
        <div className="w-full text-center">
          <h1 className="animate-slide-in text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded shadow-md p-2 w-[13rem] bg-gray-700">
            Learn MERN
          </h1>
        </div>

        <div className="relative mx-auto max-w-7xl space-y-1 lg:px-20">
          <div className="flex-col-reverse lg:flex-row-reverse relative flex    lg:items-center lg:gap-12">
            <div className="grid w-full place-items-center lg:min-h-[536px]">
              <div className="w-full" style={{ opacity: 1, transform: "none" }}>
                <DotLottieReact
                  autoplay="true"
                  loop="true"
                  src="/mern/html.lottie"
                  background="transparent"
                  style={{ width: "100%", height: "100%" }}
                ></DotLottieReact>
              </div>
            </div>
            <div className="h-full w-full space-y-6 bg-gray-700 shadow-2xl rounded-2xl p-4">
              <div
                className="relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px "
                style={{ transform: "none" }}
              >
                <h1 className="section-title relative z-10 text-xl !text-white drop-shadow-[3px_3px_0px_#1e293b]">
                  HTML
                </h1>
                <svg
                  className="absolute top-0 z-0 opacity-50 dark:opacity-100"
                  width="100%"
                  height="100%"
                  viewBox="0 0 602 473"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                    fill="#FF8731"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center">
                <Link href="/classes/html/w3">
                  <div className="flex  bg-gray-500 shadow-2xl rounded-2xl">
                    <Image
                      src="/mern/w3schools.png"
                      alt="W3Schools logo"
                      width={60}
                      height={40}
                      className="rounded-l-2xl"
                    />
                    <div className="p-4">
                      <h1 className="title text-white font-bold text-xl text-center lg:text-left">
                        W3
                      </h1>

                      <p className="text-1 text-gray-300 text-medium text-center lg:!text-left ">
                        W3Schools
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="/classes/html/stacklearner">
                  <div className="flex  bg-gray-500 shadow-2xl rounded-2xl">
                    <Image
                      src="/mern/stacklearner.png"
                      alt="stack learner"
                      width={60}
                      height={40}
                      className="rounded-l-2xl"
                    />
                    <div className="p-4">
                      <h1 className="title text-white font-bold text-xl text-center lg:text-left">
                        HM Nayem
                      </h1>

                      <p className="text-1 text-gray-300 text-medium text-center lg:!text-left ">
                        Stack Learner
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <svg
                className="absolute left-[20%] top-[85%] hidden lg:block"
                width="432"
                height="125"
                fill="none"
                data-reveal="in-fade"
              >
                <path
                  d="M1.633 1.29c.308 12.988-3.497 38 10.01 54.328 14.885 19.842 32.162 24.39 52.725 28.521 36.088 7.25 72.202 8.779 109.27 1.774 11.033-2.085 21.968-8.278 32.723-12.617 11.066-4.465 22.127-8.914 33.321-12.404 23.822-7.426 47.443-7.882 71.079-5.229 20.514 2.303 41.669 2.608 61.157 11.122 30.981 6.832 49.838 47.155 58.34 57.199"
                  stroke="#F0B9DD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="4 8 4 8"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" relative flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
            <div className="grid w-full place-items-center lg:min-h-[536px]">
              <div
                className="w-full "
                style={{ opacity: 1, transform: "none" }}
              >
                <DotLottieReact
                  autoplay="true"
                  loop="true"
                  src="/mern/css.lottie"
                  background="transparent"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                ></DotLottieReact>
              </div>
            </div>
            <div className="h-full w-full space-y-6 bg-gray-700 shadow-2xl rounded-2xl p-4">
              <div
                className="relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px "
                style={{ transform: "none" }}
              >
                <h1 className="section-title relative z-10 text-xl !text-white drop-shadow-[3px_3px_0px_#1e293b]">
                  CSS
                </h1>
                <svg
                  className="absolute top-0 z-0 opacity-50 dark:opacity-100"
                  width="100%"
                  height="100%"
                  viewBox="0 0 602 473"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                    fill="#3FB8A9"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center">
                <Link href="/classes/css/w3">
                  <div className="flex  bg-gray-500 shadow-2xl rounded-2xl">
                    <Image
                      src="/mern/w3schools.png"
                      alt="stack learner"
                      width={60}
                      height={40}
                      className="rounded-l-2xl"
                    />
                    <div className="p-4">
                      <h1 className="title text-white font-bold text-xl text-center lg:text-left">
                        W3
                      </h1>

                      <p className="text-1 text-gray-300 text-medium text-center lg:!text-left ">
                        W3Schools
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="classes/css/stacklearner">
                  <div className="flex  bg-gray-500 shadow-2xl rounded-2xl">
                    <Image
                      src="/mern/stacklearner.png"
                      alt="stack learner"
                      width={60}
                      height={40}
                      className="rounded-l-2xl"
                    />
                    <div className="p-4">
                      <h1 className="title text-white font-bold text-xl text-center lg:text-left">
                        HM Nayem
                      </h1>

                      <p className="text-1 text-gray-300 text-medium text-center lg:!text-left ">
                        Stack Learner
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <svg
                className="absolute left-[10%] top-[79%] z-0 hidden h-[268.09px] w-full -rotate-6 transform lg:block"
                width="100%"
                height="268.09px"
                fill="none"
                data-reveal="in-fade"
              >
                <path
                  d="M595 1c-5.312 32.44-14.005 32.911-28.493 54.17-14.488 22.676-40.566 37.32-86.927 53.383-16.359 9.183-58.29 17.919-77.329 20.941-27.961 4.438-57.257 4.44-85.565 4.82-22.571.303-45.071.327-67.53-2.002-48.556-5.035-97.306-19.13-146.184-19.13-21.265 0-43.185 6.042-63.875 10.529C21.527 127.522 16.22 128.888 1 138"
                  stroke="#B5CAF9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="4 8 4 8"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex-col-reverse lg:flex-row-reverse relative flex lg:flex-row lg:items-center lg:gap-12">
            <div className="grid w-full place-items-center lg:min-h-[536px]">
              <div className="w-full" style={{ opacity: 1, transform: "none" }}>
                <DotLottieReact
                  autoplay="true"
                  loop="true"
                  src="/mern/gitgithub.lottie"
                  background="transparent"
                  style={{ width: "100%", height: "100%" }}
                ></DotLottieReact>
              </div>
            </div>
            <div className="h-full w-full space-y-6 bg-gray-700 shadow-2xl rounded-2xl p-4">
              <div
                className="relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px "
                style={{ transform: "none" }}
              >
                <h1 className="section-title relative z-10 text-xl font-bold !text-white ">
                  <span className="text-[#d56000]">Git</span> & <br />
                  <span className="text-gray-700">Github</span>
                </h1>
                <svg
                  className="absolute top-0 z-0 opacity-50 dark:opacity-100"
                  width="100%"
                  height="100%"
                  viewBox="0 0 602 473"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                    fill="#ffb887"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-4">
                <Link href="/classes/gitgithub/anisul">
                  <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                    <Image
                      src="/mern/anisul.png"
                      alt="stack learner"
                      width={50}
                      height={20}
                      className="rounded-l-2xl bg-white  h-full"
                    />
                    <div className="p-4">
                      <h1 className="title text-white text-sm font-semibold">
                        Anisul Islam
                      </h1>

                      <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                        Anisul Islam
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="/classes/gitgithub/lws">
                  <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                    <Image
                      src="/mern/lws.png"
                      alt="Sumit shaha"
                      width={50}
                      height={20}
                      className="rounded-l-2xl"
                    />
                    <div className="p-4">
                      <h1 className="title   text-white text-sm font-semibold text-center lg:text-left">
                        Sumit shaha
                      </h1>

                      <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                        LWS
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="/classes/gitgithub/stacklearner">
                  <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                    <Image
                      src="/mern/stacklearner.png"
                      alt="stack learner"
                      width={50}
                      height={20}
                      className="rounded-l-2xl"
                    />
                    <div className="p-4">
                      <h1 className="title text-white text-sm font-semibold text-center lg:text-left">
                        HM Nayem
                      </h1>

                      <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                        Stack Learner
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <svg
                className="absolute left-[55%] -bottom-[20%] hidden h-[150px] w-[580px] -translate-x-1/2 -translate-y-1/2 transform lg:block"
                fill="none"
                data-reveal="in-fade"
              >
                <path
                  d="M1 1c7.255 23.316 12.132 49.428 31.848 67.45 11.32 10.349 16.684 18.72 32.52 24.395 13.96 5.003 51.325 18.606 66.469 5.364 7.463-6.526 16.624-20.318 3.781-26.82-6.446-3.262-17.016-2.214-24.201-1.616-5.314.443-6.954 5.964-8.739 9.258-5.374 9.922-2.814 24.311 4.874 32.256 17.363 17.942 41.593 32.2 69.242 35.71 22.248 2.823 45.197 1.977 67.561 4.041 34.213 3.157 70.887 7.217 104.031 15.577 18.72 4.721 37.381 9.547 56.133 14.18 10.798 2.669 27.801 6.337 37.726 11.137C463.073 201.574 473.557 214.827 479 218"
                  stroke="#AAD1B6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="4 8 4 8"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" relative flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
            <div className="grid w-full place-items-center lg:min-h-[536px]">
              <div className="w-full" style={{ opacity: 1, transform: "none" }}>
                <DotLottieReact
                  autoplay="true"
                  loop="true"
                  src="/mern/javascript.lottie"
                  background="transparent"
                  style={{ width: "100%", height: "100%" }}
                ></DotLottieReact>
              </div>
            </div>
            <div className="h-full w-full space-y-6 bg-gray-700 shadow-2xl rounded-2xl p-4">
              <div
                className="relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px "
                style={{ transform: "none" }}
              >
                <h1 className="section-title relative z-10 text-xl !text-white drop-shadow-[3px_3px_0px_#1e293b]">
                  Javascript
                </h1>
                <svg
                  className="absolute top-0 z-0 opacity-50 dark:opacity-100"
                  width="100%"
                  height="100%"
                  viewBox="0 0 602 473"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                    fill="#324ecf"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/anisul.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl bg-white  h-full"
                  />
                  <div className="p-4">
                    <h1 className="title text-white text-sm font-semibold">
                      Anisul Islam
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      Anisul Islam
                    </p>
                  </div>
                </div>
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/lws.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl"
                  />
                  <div className="p-4">
                    <h1 className="title   text-white text-sm font-semibold text-center lg:text-left">
                      Sumit shaha
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      LWS
                    </p>
                  </div>
                </div>
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/stacklearner.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl"
                  />
                  <div className="p-4">
                    <h1 className="title text-white text-sm font-semibold text-center lg:text-left">
                      HM Nayem
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      Stack Learner
                    </p>
                  </div>
                </div>
              </div>
              <svg
                className="absolute -bottom-[35%] right-[35%] hidden h-[190px] w-[620px] -rotate-[17deg] lg:block z-50"
                fill="none"
                data-reveal="in-fade"
              >
                <path
                  d="M595 1c-5.312 32.44-14.005 32.911-28.493 54.17-14.488 22.676-40.566 37.32-86.927 53.383-16.359 9.183-58.29 17.919-77.329 20.941-27.961 4.438-57.257 4.44-85.565 4.82-22.571.303-45.071.327-67.53-2.002-48.556-5.035-97.306-19.13-146.184-19.13-21.265 0-43.185 6.042-63.875 10.529C21.527 127.522 16.22 128.888 1 138"
                  stroke="#B5CAF9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="4 8 4 8"
                ></path>
              </svg>{" "}
            </div>
          </div>
          <div className="flex-col-reverse lg:flex-row-reverse relative flex  lg:flex-row lg:items-center lg:gap-12">
            <div className="grid w-full place-items-center lg:min-h-[536px]">
              <div className="w-full" style={{ opacity: 1, transform: "none" }}>
                <DotLottieReact
                  autoplay="true"
                  loop="true"
                  src="/mern/react.lottie"
                  background="transparent"
                  style={{ width: "100%", height: "100%" }}
                ></DotLottieReact>
              </div>
            </div>
            <div className="h-full w-full space-y-6 bg-gray-700 shadow-2xl rounded-2xl p-4">
              <div
                className="relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px "
                // style={{
                //   transform: "translateX(-100px) scale(0.2) translateZ(0)",
                // }}
              >
                <h1 className="section-title relative z-10 text-xl text-sky-400 font-bold  drop-shadow-[3px_3px_0px_#1e293b]">
                  Reactjs
                </h1>
                <svg
                  className="absolute top-0  opacity-50 dark:opacity-100 "
                  width="100%"
                  height="100%"
                  viewBox="0 0 602 473"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                    fill="#222222"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/anisul.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl bg-white  h-full"
                  />
                  <div className="p-4">
                    <h1 className="title text-white text-sm font-semibold">
                      Anisul Islam
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      Anisul Islam
                    </p>
                  </div>
                </div>
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/lws.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl"
                  />
                  <div className="p-4">
                    <h1 className="title   text-white text-sm font-semibold text-center lg:text-left">
                      Sumit shaha
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      LWS
                    </p>
                  </div>
                </div>
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/stacklearner.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl"
                  />
                  <div className="p-4">
                    <h1 className="title text-white text-sm font-semibold text-center lg:text-left">
                      HM Nayem
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      Stack Learner
                    </p>
                  </div>
                </div>
              </div>
              <svg
                className="absolute left-[20%] top-[85%] hidden lg:block"
                width="432"
                height="125"
                fill="none"
                data-reveal="in-fade"
              >
                <path
                  d="M1.633 1.29c.308 12.988-3.497 38 10.01 54.328 14.885 19.842 32.162 24.39 52.725 28.521 36.088 7.25 72.202 8.779 109.27 1.774 11.033-2.085 21.968-8.278 32.723-12.617 11.066-4.465 22.127-8.914 33.321-12.404 23.822-7.426 47.443-7.882 71.079-5.229 20.514 2.303 41.669 2.608 61.157 11.122 30.981 6.832 49.838 47.155 58.34 57.199"
                  stroke="#F0B9DD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="4 8 4 8"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" relative flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
            <div className="grid w-full place-items-center lg:min-h-[536px]">
              <div className="w-full" style={{ opacity: 1, transform: "none" }}>
                <DotLottieReact
                  autoplay="true"
                  loop="true"
                  src="/mern/node.lottie"
                  background="transparent"
                  style={{ width: "100%", height: "100%" }}
                ></DotLottieReact>
              </div>
            </div>
            <div className="h-full w-full space-y-6 bg-gray-700 shadow-2xl rounded-2xl p-4">
              <div
                className="relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px "
                style={{ transform: "none" }}
              >
                <h1 className="section-title relative z-10 text-xl !text-white drop-shadow-[3px_3px_0px_#1e293b]">
                  Nodejs
                </h1>
                <svg
                  className="absolute top-0 z-0 opacity-50 dark:opacity-100"
                  width="100%"
                  height="100%"
                  viewBox="0 0 602 473"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                    fill="#10c151"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/anisul.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl bg-white  h-full"
                  />
                  <div className="p-4">
                    <h1 className="title text-white text-sm font-semibold">
                      Anisul Islam
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      Anisul Islam
                    </p>
                  </div>
                </div>
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/lws.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl"
                  />
                  <div className="p-4">
                    <h1 className="title   text-white text-sm font-semibold text-center lg:text-left">
                      Sumit shaha
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      LWS
                    </p>
                  </div>
                </div>
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/stacklearner.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl"
                  />
                  <div className="p-4">
                    <h1 className="title text-white text-sm font-semibold text-center lg:text-left">
                      HM Nayem
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      Stack Learner
                    </p>
                  </div>
                  <svg
                    className="absolute -bottom-[35%] right-[35%] hidden h-[190px] w-[620px] -rotate-[17deg] lg:block z-50"
                    fill="none"
                    data-reveal="in-fade"
                  >
                    <path
                      d="M595 1c-5.312 32.44-14.005 32.911-28.493 54.17-14.488 22.676-40.566 37.32-86.927 53.383-16.359 9.183-58.29 17.919-77.329 20.941-27.961 4.438-57.257 4.44-85.565 4.82-22.571.303-45.071.327-67.53-2.002-48.556-5.035-97.306-19.13-146.184-19.13-21.265 0-43.185 6.042-63.875 10.529C21.527 127.522 16.22 128.888 1 138"
                      stroke="#B5CAF9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="4 8 4 8"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col-reverse lg:flex-row-reverse relative flex  lg:flex-row lg:items-center lg:gap-12">
            <div className="grid w-full place-items-center lg:min-h-[536px]">
              <div className="w-full" style={{ opacity: 1, transform: "none" }}>
                <DotLottieReact
                  autoplay="true"
                  loop="true"
                  src="/mern/mongodb.lottie"
                  background="transparent"
                  style={{ width: "100%", height: "100%" }}
                ></DotLottieReact>
              </div>
            </div>
            <div className="h-full w-full space-y-6 bg-gray-700 shadow-2xl rounded-2xl p-4">
              <div
                className="relative z-10 mx-auto grid w-24 place-items-center py-10 lg:mx-px "
                // style={{
                //   transform: "translateX(-100px) scale(0.2) translateZ(0)",
                // }}
              >
                <h1 className="section-title relative z-10 text-md font-bold text-[#489c49] drop-shadow-[3px_3px_0px_#1e293b]">
                  MongoDB
                </h1>
                <svg
                  className="absolute top-0  opacity-50 dark:opacity-100 "
                  width="100%"
                  height="100%"
                  viewBox="0 0 602 473"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M290.806 463.188C374.905 469.353 468.778 492.629 529.757 434.517C597.098 370.239 616.804 266.193 591.202 177.098C566.996 92.3192 491.898 30.0454 407.023 5.07419C335.338 -15.8893 270.48 32.9741 202.363 62.8779C128.971 95.248 31.0635 104.651 6.54775 180.797C-18.899 259.873 34.0116 342.956 93.1287 401.839C144.488 453.014 218.345 457.793 290.806 463.188Z"
                    fill="#252525"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/anisul.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl bg-white  h-full"
                  />
                  <div className="p-4">
                    <h1 className="title text-white text-sm font-semibold">
                      Anisul Islam
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      Anisul Islam
                    </p>
                  </div>
                </div>
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/lws.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl"
                  />
                  <div className="p-4">
                    <h1 className="title   text-white text-sm font-semibold text-center lg:text-left">
                      Sumit shaha
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      LWS
                    </p>
                  </div>
                </div>
                <div className="flex w-[180px] h-[70px] bg-gray-500 shadow-2xl rounded-2xl">
                  <Image
                    src="/mern/stacklearner.png"
                    alt="stack learner"
                    width={50}
                    height={20}
                    className="rounded-l-2xl"
                  />
                  <div className="p-4">
                    <h1 className="title text-white text-sm font-semibold text-center lg:text-left">
                      HM Nayem
                    </h1>

                    <p className="text-1 text-gray-300 text-sm text-center lg:!text-left ">
                      Stack Learner
                    </p>
                  </div>
                </div>
              </div>
              {/* <svg
                className="absolute left-[20%] top-[85%] hidden lg:block"
                width="432"
                height="125"
                fill="none"
                data-reveal="in-fade"
              >
                <path
                  d="M1.633 1.29c.308 12.988-3.497 38 10.01 54.328 14.885 19.842 32.162 24.39 52.725 28.521 36.088 7.25 72.202 8.779 109.27 1.774 11.033-2.085 21.968-8.278 32.723-12.617 11.066-4.465 22.127-8.914 33.321-12.404 23.822-7.426 47.443-7.882 71.079-5.229 20.514 2.303 41.669 2.608 61.157 11.122 30.981 6.832 49.838 47.155 58.34 57.199"
                  stroke="#F0B9DD"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="4 8 4 8"
                ></path>
              </svg> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center border-b ">
        <Link href="/topics">
          <h1 className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded shadow-md p-2 w-[400px] bg-gray-700">
            Learn And explore Anther Topic
          </h1>
        </Link>
      </div>
    </div>
  );
}
