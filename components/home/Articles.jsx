import Container from "@/app/ui/Container";
import React from "react";

export default function Articles() {
  return (
    <div className="my-20">
      <Container>
        <div className=" text-center">
          <h1 data-aos="fade-up" className="text-[#7dd3fc] font-bold text-3xl">
            Latest Blogs
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-gray-300 max-w-[900px] text-xl mt-5 mx-auto"
          >
            {" "}
            Itaque sed consectetur modi tenetur autem hic molestiae illo
            consequatur, atque, impedit debitis aperiam veritatis et unde animi
            consequuntur necessitatibus quod esse adipisci aliquam eos incidunt.
            Dolorem dicta doloribus, distinctio dolore qui in pariatur atque
            blanditiis. Illo, dolore inventore?
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="mt-20 grid grid-cols-2 justify-items-center "
        >
          <div className="max-w-xl p-6   border   rounded-lg shadow-sm  bg-gray-800  border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                Noteworthy technology acquisitions 2025
              </h5>
            </a>
            <p className="mb-3 font-normal  text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#7dd3fc] bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none        focus:ring-gray-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="max-w-xl p-6   border   rounded-lg shadow-sm  bg-gray-800  border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                Noteworthy technology acquisitions 2024
              </h5>
            </a>
            <p className="mb-3 font-normal  text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#7dd3fc] bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none      focus:ring-gray-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
