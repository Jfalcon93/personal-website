import * as React from "react";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <main className="h-screen px-8 flex flex-col place-content-center md:items-center text-white bg-black">
      <h1 className="text-8xl md:text-10xl font-medium">Yosh _</h1>
      <ul className="text-base flex flex-row mt-8 space-x-6">
        <li className="transition duration-300 ease-in-out hover:text-blue-300">
          <a href="https://twitter.com/yungyoshh" target="_blank">
            [ tweets ]
          </a>
        </li>
        <li className="transition duration-300 ease-in-out hover:text-indigo-300">
          <a href="https://yungyosh.substack.com" target="_blank">
            [ writing ]
          </a>
        </li>
        <li className="transition duration-300 ease-in-out hover:text-purple-300">
          <a href="https://github.com/Jfalcon93" target="_blank">
            [ code ]
          </a>
        </li>
        <li className="transition duration-300 ease-in-out hover:text-pink-300">
          <a href="https://music.apple.com/profile/YungYosh" target="_blank">
            [ music ]
          </a>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;
