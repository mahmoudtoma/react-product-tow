import { AllMovies } from "../types/moivesType";



export const moviesReducer = (state = { movies: [], pageCount: 0 }, action) => {
    switch (action.type) {

        case AllMovies:
            return { movies: action.data , pageCount:action.pages }
        default:
            return state;
    }
}
