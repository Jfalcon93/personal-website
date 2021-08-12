import * as React from "react";
import { Link } from "gatsby";
import "../styles/global.css";
import Meta from "../components/Meta";

const IndexPage = () => {
  return (
    <main className="h-screen px-7 flex flex-col place-content-center md:items-center text-white bg-black">
      <Meta />
      <h1 className="text-8xl md:text-10xl font-medium">
        <Link
          className="transition duration-300 ease-in-out hover:text-blue-300"
          to="/resume"
        >
          Yosh _
        </Link>
      </h1>
      <ul className="text-base flex flex-row mt-8 space-x-5 md:space-x-6">
        <li className="transition duration-300 ease-in-out hover:text-blue-300">
          <a
            href="https://twitter.com/yungyoshh"
            target="_blank"
            rel="noreferrer"
          >
            [ tweets ]
          </a>
        </li>
        <li className="transition duration-300 ease-in-out hover:text-indigo-300">
          <a
            href="https://yungyosh.substack.com"
            target="_blank"
            rel="noreferrer"
          >
            [ writing ]
          </a>
        </li>
        <li className="transition duration-300 ease-in-out hover:text-purple-300">
          <a
            href="https://github.com/Jfalcon93"
            target="_blank"
            rel="noreferrer"
          >
            [ code ]
          </a>
        </li>
        <li className="transition duration-300 ease-in-out hover:text-pink-300">
          <a
            href="https://music.apple.com/profile/YungYosh"
            target="_blank"
            rel="noreferrer"
          >
            [ music ]
          </a>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;
