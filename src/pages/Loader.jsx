import background from "../assets/LOADER-POKESHOP.png"; // <-- import JS correct

export default function Loader() {
  const style = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={style}>
      <div className="animate-pulse">Loading...</div>
    </div>
  );
}
