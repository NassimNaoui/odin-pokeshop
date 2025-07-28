/* hook */
import { useState } from "react";
/* background */
import background from "../assets/POKESHOP.png";
/* avatar */
import avatarPeter from "../assets/AVATAR_PETER.png";
/* icons */
import heart from "../assets/Heart.png";
import search from "../assets/Search.png";
import shopbag from "../assets/Shopping cart.png";

function OnlineStore() {
  const style = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "grid",
    gridTemplateRows: "0.2fr 2.6fr 0.2fr",
  };

  return (
    <>
      <div style={style}>
        <header className="relative flex items-center justify-center">
          {/* Overlay semi-transparent */}
          <div className="absolute inset-0 bg-indigo-300 opacity-50 z-0"></div>
          {/* Container search bar and icons */}
          <div className="flex w-full h-full justify-center p-[10px]">
            {/* Contenu du header */}
            <div className="hidden">TEST</div>
            <div className="relative flex justify-end items-center gap-3 z-10 w-full text-center">
              <div
                className="h-[36px] w-[36px] bg-no-repeat bg-center bg-contain hover:border-b border-b-indigo-500"
                style={{ backgroundImage: `url(${search})` }}
              ></div>
              <div
                className="h-[36px] w-[36px] bg-no-repeat bg-center bg-contain hover:border-b border-b-indigo-500"
                style={{ backgroundImage: `url(${heart})` }}
              ></div>
              <div
                className="h-[36px] w-[36px] bg-no-repeat bg-center bg-contain hover:border-b border-b-indigo-500"
                style={{ backgroundImage: `url(${shopbag})` }}
              ></div>
            </div>
          </div>
        </header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}

export default OnlineStore;
