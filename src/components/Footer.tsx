import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full flex bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 justify-between">
        <div>
          <div className="text-white text-sm font-bold">Spotify 미리 듣기</div>
          <div className="text-white">
            가끔 표시되는 광고와 함께 무제한 곡 및 팟캐스트를 이용하려면
            가입하세요. 신용카드는 필요 없습니다.
          </div>
        </div>
        <button className="bg-white text-black rounded-full px-8 text-sm font-bold whitespace-nowrap">
          무료로 가입하기
        </button>
      </footer>
    </>
  );
}

export default Footer;
