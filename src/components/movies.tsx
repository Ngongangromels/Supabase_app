import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './movies.css'
import { useMediaQuery } from 'react-responsive';
import { supabase } from '../supabaseClient';

interface MovieType {
  id?: number;
  poster_path?: any
  backdrop_path?: any
  title?: string;
  overview?: string;
  original_language?: string
  backgroundImage?: any
  popularity?: string
  release_date?: string
  vote_average?: number
  video?: boolean
  vote_count?: number
  
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<MovieType[] | null>(null)
const navigate = useNavigate()
  const handleLikeClick = async (film: MovieType) => {
    // const { data: { user } } = await supabase.auth.getUser()
  const { data, error } = await supabase.auth.admin.deleteUser('')
  }

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc?api_key=4807bd84983a5d21524fa45027c13744'
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODA3YmQ4NDk4M2E1ZDIxNTI0ZmE0NTAyN2MxMzc0NCIsIm5iZiI6MTcyMTYwNzMxNi41NzQ5MTgsInN1YiI6IjY2OWM3N2Q1MmQzZGVkZDE1M2RlYjQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gZSKK5Ti7gPRSCn02VN0pgFFkygOF_IxRB_3cGXuWsw'
    
    const getMovies = async () => {
      try{
        const { data } = await axios.get( url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
         }) 
         setMovies(data.results || null)
         console.log(data.results)
      } catch( error ) {
        console.log('a the problem of request')
      }
    }
      
     getMovies()
  }, [])
  const isDesktopOrMobile = useMediaQuery({query: '(max-width: 400px)'})
  return (
    <div > 
      {isDesktopOrMobile ? (
        <div className='mr-0 ml-0 mt-10'>
           {movies?.map((item, id) => (
             <li className='list-none' key={id}>
               <Link to = {`/DescriptionMobile/${item.id}`}> <img className='imageM' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" /> </Link> 
             </li>
           ))}
        </div>
      ): (
        <div  className='flex  flex-row items-center flex-wrap gap-10 mr-0 ml-3 mt-24 bg-' >
              {movies?.map((item, id) => (
                <li className='list-none' key={id}>
                  <Link className='-z-40'  to = {`/Description/${item.id}`}> <img className='imageM' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" /> </Link> 
                  <button onClick={() => handleLikeClick(item)}>❤️Like</button>
                </li>
           ))}
        </div>
      )}
      
    </div>
      
  
  );
};

export default Movies;
