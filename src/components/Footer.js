// src/components/footer.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";



export default function Footer() {
  return (
    <footer className="bg-gray-800 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-small text-white md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
        © Andrew Dames 2021
        </a>
        <a
          href="mailto: a.dames09@gmail.com"
          className="inline-flex items-center bg-gray-800 text-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Email Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </footer>
  );
}