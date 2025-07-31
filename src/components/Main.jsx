export default function Main({ avatar, setAvatar, avatarCard, setAvatarCard }) {
  return (
    <>
      <main className="flex justify-center items-center h-full w-full bg-amber-400 ">
        <div className="flex justify-around items-center h-[98%] w-[98%] bg-red-400">
          <div className=" h-[90%] w-[70%] bg-blue-300"></div>
          <div className=" h-[90%] w-[25%] bg-green-200">
            {avatarCard && (
              <AvatarChoice
                avatar={avatar}
                setAvatar={setAvatar}
                setAvatarCard={setAvatarCard}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

/* avatar */
import peter from "../assets/AVATAR_PETER.png";
import cinthyia from "../assets/AVATAR_CINTHYIA.png";
import red from "../assets/AVATAR_RED.png";

const avatarMap = { peter: peter, cinthyia: cinthyia, red: red };

function AvatarChoice({ avatar, setAvatar, setAvatarCard }) {
  const filteredAvatar = Object.fromEntries(
    Object.entries(avatarMap).filter(([key]) => key !== avatar)
  );
  const listAvatar = Object.entries(filteredAvatar).map(([name, src]) => (
    <>
      <div key={name} className="flex items-center gap-2.5">
        <div
          data-name={name}
          onClick={(e) => {
            setAvatar(e);
            setAvatarCard();
          }}
          className="h-[72px] w-[72px] cursor-pointer rounded-full bg-red-500 border-[2px] border-white hover:border-indigo-500"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="">{name}</div>
      </div>
    </>
  ));

  return <div>{listAvatar}</div>;
}
