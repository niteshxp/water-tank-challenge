import { useEffect, useState } from "react";
import WaterTank from "./WaterTank";

function App() {
  const [waterLevel, setWaterLevel] = useState({
    tank1: 0,
    tank2: 0,
    tank3: 0,
    tank4: 0,
  });
  const [leveling, setLeveling] = useState(false);

  const handleAddWater = (tank) => {
    console.log("Adding water to ", tank);
    if (tank === 1 && waterLevel.tank1 < 10)
      setWaterLevel({ ...waterLevel, tank1: waterLevel.tank1 + 2 });
    if (tank === 2 && waterLevel.tank2 < 10)
      setWaterLevel({ ...waterLevel, tank2: waterLevel.tank2 + 2 });
    if (tank === 3 && waterLevel.tank3 < 10)
      setWaterLevel({ ...waterLevel, tank3: waterLevel.tank3 + 2 });
    if (tank === 4 && waterLevel.tank4 < 10)
      setWaterLevel({ ...waterLevel, tank4: waterLevel.tank4 + 2 });
  };

  const handleRemoveWater = (tank) => {
    console.log("Removing water");
    if (tank === 1 && waterLevel.tank1 > 0)
      setWaterLevel({ ...waterLevel, tank1: 0 });
    if (tank === 2 && waterLevel.tank2 > 0)
      setWaterLevel({ ...waterLevel, tank2: 0 });
    if (tank === 3 && waterLevel.tank3 > 0)
      setWaterLevel({ ...waterLevel, tank3: 0 });
    if (tank === 4 && waterLevel.tank4 > 0)
      setWaterLevel({ ...waterLevel, tank4: 0 });
  };

  useEffect(() => {
    console.log("Water level changed");
    let perTank =
      (waterLevel.tank1 +
        waterLevel.tank2 +
        waterLevel.tank3 +
        waterLevel.tank4) /
      4;

    setWaterLevel(() => ({
      ...waterLevel,
      tank1: perTank,
      tank2: perTank,
      tank3: perTank,
      tank4: perTank,
    }));
  }, [leveling]);

  return (
    <div className="w-full h-screen border-2 border-red-800">
      <h1 className="text-center text-3xl font-bold my-10">Water tank</h1>

      <div className="flex justify-evenly items-end">
        <WaterTank
          waterlevel={waterLevel.tank1}
          handleAddWater={() => handleAddWater(1)}
          handleRemoveWater={() => handleRemoveWater(1)}
          setLeveling={setLeveling}
        />

        <WaterTank
          waterlevel={waterLevel.tank2}
          handleAddWater={() => handleAddWater(2)}
          handleRemoveWater={() => handleRemoveWater(2)}
          setLeveling={setLeveling}
        />

        <WaterTank
          waterlevel={waterLevel.tank3}
          handleAddWater={() => handleAddWater(3)}
          handleRemoveWater={() => handleRemoveWater(3)}
          setLeveling={setLeveling}
        />

        <WaterTank
          waterlevel={waterLevel.tank4}
          handleAddWater={() => handleAddWater(4)}
          handleRemoveWater={() => handleRemoveWater(4)}
          setLeveling={setLeveling}
        />
      </div>
    </div>
  );
}

export default App;
