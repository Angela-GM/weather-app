import { SearchComponent } from "..";
import MostlyCloudySVG from "../../public/images/overcast.svg";
import SunnySVG from "../../public/images/sunny.svg";

import { WiThermometer } from "react-icons/wi";

export const HomePage = () => {
  return (
    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <SearchComponent placeholder="Search city..." />

      <div className="flex gap-6 flex-wrap">
        <div className="w-3/4 md:w-3/6 m-auto rounded-lg p-5 border border-white/5 shadow-lg hover:border-white/50 cursor-pointer">
          <h2 className="text-lg">Barcelona</h2>
          <div className="flex-col">
            <h3>Mostly Cloudy</h3>
            <img className="w-20 m-auto" src={MostlyCloudySVG} alt="Cloudy" />
          </div>
          <div className="flex gap-4 items-center justify-center bg-card/50  rounded-lg py-5 ">
            <WiThermometer className="text-red-700 text-2xl" />
            <p>18° min</p>
            <p>25° max</p>
          </div>
        </div>

        <div className="w-3/4 md:w-3/6 m-auto rounded-lg p-5 border border-white/5 shadow-lg hover:border-white/50 cursor-pointer">
          <h2 className="text-lg">Tarragona</h2>
          <div className="flex-col">
            <h3>Sunny</h3>
            <img className="w-20 m-auto" src={SunnySVG} alt="Cloudy" />
          </div>
          <div className="flex gap-4 items-center justify-center bg-card/50  rounded-lg py-5 ">
            <WiThermometer className="text-red-700 text-2xl" />
            <p>18° min</p>
            <p>25° max</p>
          </div>
        </div>

        <div className="w-3/4 md:w-3/6 m-auto rounded-lg p-5 border border-white/5 shadow-lg hover:border-white/50 cursor-pointer">
          <h2 className="text-lg">Tarragona</h2>
          <div className="flex-col">
            <h3>Sunny</h3>
            <img className="w-20 m-auto" src={SunnySVG} alt="Cloudy" />
          </div>
          <div className="flex gap-4 items-center justify-center bg-card/50  rounded-lg py-5 ">
            <WiThermometer className="text-red-700 text-2xl" />
            <p>18° min</p>
            <p>25° max</p>
          </div>
        </div>
      </div>
    </div>
  );
};
