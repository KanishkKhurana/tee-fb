export const Nav = () => {
  return (
    <div className="bg-white font-shareTechMono flex items-center justify-between p-2 px-16 border-b-4">
      <div className="flex items-center space-x-4 ">
        <p className="text-4xl md:text-7xl text-orange-500 brightness-125 drop-shadow-lg font-bold">
          AI CEO
        </p>
      </div>
      <div className="flex items-center space-x-4">
        {/* <button className="transition hover:bg-orange-500 hover:text-white border-outline border-2 border-orange-500 rounded-lg p-2 text-black">
          Connect Wallet
        </button> */}
      </div>
    </div>
  );
};

export default Nav;
