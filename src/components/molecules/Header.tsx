import BgHeaderDesktop from "@/assets/bg-header-desktop.svg"

const Header = () => {
  return (
    <div className="w-full h-16 mb-8" style={{ backgroundImage: `url(${BgHeaderDesktop.src})`, objectFit: "cover" }}>
      {/* TODO: header */}
    </div>
  );
};

export default Header;
