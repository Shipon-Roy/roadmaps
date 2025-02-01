import Container from "@/app/ui/Container";
import Image from "next/image";
import React from "react";

export default function Teachers() {
  return (
    <div className="my-20">
      <Container>
        <div className=" text-center">
          <h1 className="text-[#7dd3fc] font-bold text-3xl">
            Modern. Current. Expert Teachers.
          </h1>
          <p className="text-gray-300">
            In addition to our full-time instructors, we often reach out to top
            developers in the programming space for their expertise.
          </p>
          <div className="mt-20 grid grid-cols-3">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg px-4 pt-4"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                  width={24}
                  height={24}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Visual Designer
                </span>
                <div className="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg px-4 pt-4"
                  src="/teacher.png"
                  alt="Bonnie image"
                  width={24}
                  height={24}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Visual Designer
                </span>
                <div className="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg px-4 pt-4"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                  width={24}
                  height={24}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Visual Designer
                </span>
                <div className="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
