import { React, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


export const MoviesDetails = () => {
  const param = useParams()
  const [MovieDet, setMovieDet] = useState([])

  // Get All Moives by axois
  const getMoviesDetails = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=9501ab734522f9e905dd21f136e3e1d9&language=en-US`)
    setMovieDet(res.data)
  }
  useEffect(() => {
    getMoviesDetails()
  }, [])

  return (
    <div>
      <div className='row row-maine'>
        <div className='col-12 information'>
          <div className='men'>
            <img src={'https://image.tmdb.org/t/p/w500' + MovieDet.backdrop_path} />
            <div className='details'>
              <p className='form'> {MovieDet.original_title} </p>
              <p className='form'> {MovieDet.release_date}</p>
              <p className='form'> {MovieDet.vote_count}</p>
              <p className='form'> {MovieDet.vote_average} </p>
            </div>
          </div>
        </div>
      </div>

      <div className='row row-maine'>
        <div className='col-12 information'>
          <h2>Story</h2>
          <p className='story' > {MovieDet.overview} </p>
        </div>
      </div>

      <div className='row'>
        <div className='col-12 information info' >
          <div className='button'>
            <Link to="/">
              <button>Home</button>
            </Link>
            <button>Watch</button>
          </div>
        </div>
      </div>

    </div>
  )
}
export default MoviesDetails