import { useQuery } from "react-query";
import { Climate, weatherApi } from ".."

const getClimatesAll = async () => {
    const { data } = await weatherApi.get<Climate[]>('/climates');  
    return data;
}

export const useClimates = () => {
    const climatesAllQuery = useQuery(
        ['climates'],
        getClimatesAll,
        {
            refetchOnWindowFocus: false,
        }
    )

    return climatesAllQuery;
}