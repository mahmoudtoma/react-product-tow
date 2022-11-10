import React, { useEffect, useState } from 'react';
import NavBar from './component/NavBar';
import Movies from './component/Movies';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviesDetails from './component/MoviesDetails';
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie } from "./redux/actions/moviesAction";
function App() {
  const [Movie, setMovie] = useState([])
  const [pageCount, setpageCount] = useState(0)

  const dispatch = useDispatch()
  // Get All Moives by axois
  const getAllMovies = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9501ab734522f9e905dd21f136e3e1d9&language=en-US&page=1')
    setMovie(res.data.results)
    setpageCount(res.data.total_pages)
  }
  useEffect(() => {
    getAllMovies();
    dispatch(getAllMovie())
  }, [])

  // search api
  const search = async (word) => {
    if (word === "") {
      getAllMovies()
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9501ab734522f9e905dd21f136e3e1d9&query=${word}&language=en-US`)
      setMovie(res.data.results)
      setpageCount(res.data.total_pages)
    }
  }
  // get current page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9501ab734522f9e905dd21f136e3e1d9&language=en-US&page=${page}`)
    setMovie(res.data.results)
    setpageCount(res.data.total_pages)
  }

  return (
    <div>
      <NavBar search={search} />
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Movies Movie={Movie} getPage={getPage} pageCount={pageCount} />} />
            <Route path='/movie/:id' element={<MoviesDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
