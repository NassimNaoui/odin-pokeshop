/* avatar */
import peter from "../assets/AVATAR_PETER.png";
import cinthyia from "../assets/AVATAR_CINTHYIA.png";
import red from "../assets/AVATAR_RED.png";
/* icons */
import heart from "../assets/Heart.png";
import search from "../assets/Search.png";
import shopbag from "../assets/Shopping cart.png";

const avatarMap = {
  peter,
  cinthyia,
  red,
};
export default function Header({ avatar, searchBar, setSearchBar }) {
  const avatarToUse = avatarMap[avatar] || "";
  const displayOption = searchBar === false ? "none" : "block";
  console.log(`from header :${searchBar}`);
  console.log(`from header - displayOption:${searchBar}`);

  return (
    <header className="relative flex items-center justify-center">
      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-indigo-300 opacity-50 z-0"></div>
      {/* Container search bar and icons */}
      <div className="flex w-full h-full justify-center p-[10px]">
        {/* Contenu du header */}
        <input
          style={{ display: `${displayOption}` }}
          className="relative z-10 border border-gray-300 bg-neutral-50 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></input>
        {/* search bar*/}
        <div className="relative flex justify-end items-center gap-3 z-10 w-full text-center">
          <div
            className="h-[36px] w-[36px] cursor-pointer bg-no-repeat bg-center bg-contain hover:border-b border-b-indigo-500"
            style={{ backgroundImage: `url(${search})` }}
            onClick={() => setSearchBar()}
          ></div>
          <div
            className="h-[36px] w-[36px] cursor-pointer bg-no-repeat bg-center bg-contain hover:border-b border-b-indigo-500"
            style={{ backgroundImage: `url(${heart})` }}
          ></div>
          <div
            className="h-[36px] w-[36px] cursor-pointer bg-no-repeat bg-center bg-contain hover:border-b border-b-indigo-500"
            style={{ backgroundImage: `url(${shopbag})` }}
          ></div>
          <div
            className="h-[36px] w-[36px] cursor-pointer rounded-full bg-red-500 border-[2px] border-white hover:border-indigo-500"
            style={{
              backgroundImage: `url(${avatarToUse})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="hidden relative z-10 h-[20px] w-[20px] bg-red-500 top-10 right-10"></div>
        </div>
      </div>
    </header>
  );
}
