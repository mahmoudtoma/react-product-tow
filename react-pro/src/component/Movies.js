import React from "react";
import Pagination from './Pagination';
import { Link } from 'react-router-dom'



const Movies = ({ Movie, getPage, pageCount }) => {
    return (
        <div className="box-all" >
            {
                Movie.length ? (Movie.map((mov) => {
                    return (

                        <div className="box" key={mov.id}>
                            <Link to={`/movie/${mov.id}`} className='Link'>
                                <img src={'https://image.tmdb.org/t/p/w500' + mov.backdrop_path} />
                                <div className="text">
                                    <h3 className="name">{mov.original_title}</h3>
                                    <div className="text-tow">
                                        <p className="date">{mov.release_date}</p>
                                        <p className="type" >{mov.vote_average}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })) : <h2> Not Found Moives </h2>
            }
            <Pagination getPage={getPage} pageCount={pageCount} />
        </div>
    )
}

export default Movies

