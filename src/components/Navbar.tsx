import React from "react";
import { Archive, Download, Home, Search } from "lucide-react";

function Navbar() {
  return (
    <>
      <header className="w-full h-12 flex items-center justify-between px-4">
        <div className="h-full w-160 flex items-center justify-between gap-4">
          <a href="">
            <img
              src="../../public/spotify-white-icon.png"
              alt="logo"
              className="h-10 w-10"
            />
          </a>
          <div className="h-full flex items-center gap-3 text-white">
            <div className="rounded-full bg-neutral-700 p-2 hover:bg-neutral-600 mr-2">
              <Home />
            </div>
            <div className="flex items-center gap-2 border-1 border-gray-500 rounded-full py-2 px-3">
              <Search />
              <input
                className="w-100"
                type="text"
                placeholder="어떤 콘텐츠를 감상하고 싶으세요?"
              />
              <div className="w-[2px] h-6 bg-neutral-500"></div>
              <Archive />
            </div>
          </div>
        </div>
        <div className="flex h-full gap-4 items-center text-white gap-8">
          <div className="h-full flex items-center gap-8">
            <a href="">Premium</a>
            <a href="">지원</a>
            <a href="">다운로드</a>
          </div>
          <div className="w-[1px] h-7 bg-neutral-500"></div>
          <div className="h-full flex items-center gap-8">
            <a className="flex items-center" href="">
              <Download size={20} />앱 설치하기
            </a>
            <a href="">가입하기</a>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full">
            로그인하기
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
