import React from "react";

const WaterTank = ({
  waterlevel,
  handleAddWater,
  handleRemoveWater,
  setLeveling,
}) => {
  const addWater = () => {
    handleAddWater();
    setTimeout(() => setLeveling((prev) => !prev), 1000);
  };
  const removeWater = () => {
    handleRemoveWater();
    setTimeout(() => setLeveling((prev) => !prev), 1000);
  };

  return (
    <div className="w-fit flex flex-col">
      <button
        className="text-xl p-2 my-2 rounded-lg bg-gray-300"
        onClick={addWater}
      >
        Add Water
      </button>
      <button
        className="text-xl p-2 my-2 rounded-lg bg-gray-300"
        onClick={removeWater}
      >
        Empty Tank
      </button>
      <div
        className={`flex justify-center items-end z-0 my-10 h-40 w-24 bg-yellow-100 border-2 border-t-0 border-black `}
      >
        <div
          className=" border-2 w-full bg-blue-500 transition-all duration-700 ease-in-out transform translate-y-0 opacity-100"
          style={{ height: `${waterlevel}rem` }}
        ></div>
      </div>
      <p>{(waterlevel * 100).toFixed(2)}L</p>
    </div>
  );
};

export default WaterTank;
