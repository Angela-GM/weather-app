import { WiThermometer } from "react-icons/wi";

interface Props {
    temp_min: string;
    temp_max: string;
}

export const DisplayTemperature = ({temp_min, temp_max}: Props) => {
  return (
    <div className="flex gap-4 items-center justify-center bg-card/50  rounded-lg py-5 ">
            <WiThermometer className="text-red-700 text-2xl" />
            <p>{temp_min}° min</p>
            <p>{temp_max}° max</p>
          </div>
  )
}
