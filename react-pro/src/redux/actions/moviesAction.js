import { AllMovies } from "../types/moivesType";





export const getAllMovie = () => {

    return { type: AllMovies , data: [1, 2 ,2 ], pages:0 }
}