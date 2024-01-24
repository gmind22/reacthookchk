import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg',
      rating: 9.3,
    },
    {
      title: 'Blasted',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BN2IxNWIyN2QtNjY3OS00YTk4LTg4NDEtYzYwNmJjZGI2Nzc1XkEyXkFqcGdeQXVyMTA3MTMwNjcw._V1_.jpg',
      rating: 5.3,
    },
    {
      title: 'Adire',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNDc5NDc1Y2EtNjVhMS00ZTVkLWJmODItNjQwMDA1ZmJhMjhlXkEyXkFqcGdeQXVyNzc5NDg5Mjc@._V1_FMjpg_UX1000_.jpg',
      rating: 5.3,
    },
    {
      title: 'Lift',
      description: 'A mind-bending action thriller.',
      posterURL: 'data:image/jpeg;base64,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',
      rating: 5.3,
    },
    {
      title: 'A Tribe Called Judah',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BOTk2YjViOTgtZTQ5ZC00ZDhiLThlMjMtOTNhYzhmYzI3NDg3XkEyXkFqcGdeQXVyNzc5NDg5Mjc@._V1_FMjpg_UX1000_.jpg',
      rating: 5.3,
    },
    {
      title: 'Ada Omo Daddy',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMzQ4NTgyOTEtYmRjYi00ZWIzLWE5YzMtNDI0YTk3NDNiN2FhXkEyXkFqcGdeQXVyMTMwOTU1NzY3._V1_.jpg',
      rating: 9.3,
    },
    {
      title: 'Breath of Life',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://i0.wp.com/shockng.com/wp-content/uploads/2023/11/unnamed-1.jpg?resize=780%2C1387&ssl=1',
      rating: 9.5,
    },
    {
      title: 'A Naija Christmas',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20812594_v_v9_aa.jpg',
      rating: 8.5,
    },
    {
      title: 'Mission Impossible 7',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg',
      rating: 6.3,
    },
    {
      title: 'Merry Men 3: Nemesis',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNWNhYjRmMjctZmNiNS00Zjg3LWI2NGYtZjZlMDA0NDE5NDUzXkEyXkFqcGdeQXVyNzc5NDg5Mjc@._V1_FMjpg_UX1000_.jpg',
      rating: 5.3,
    },
    {
      title: 'Aquaman: The lost kingdom',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://resizing.flixster.com/ioQtD3b6hKJON0J4_7S-Wp0Ss5M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzczNzQ3NjczLTE3MWMtNGJlYi1hODUwLTNkMmU5MGYxYjJiNy5qcGc=',
      rating: 4.0,
    },
    {
      title: 'Anikulapo',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYzUyOWM2MTktYTNkOC00NTczLWEzMDEtY2U3ZTA0ODcwNDU2XkEyXkFqcGdeQXVyNzc5NDg5Mjc@._V1_FMjpg_UX1000_.jpg',
      rating: 7.5,
    },
    {
      title: 'Jagun Jagun',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://media.premiumtimesng.com/wp-content/files/2023/08/Jagun-Jagun-poster.jpg',
      rating: 7.3,
    },
    {
      title: 'Adire',
      description: 'A mind-bending action thriller.',
      posterURL: 'data:image/jpeg;base64,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',
      rating: 5.3,
    },
    {
      title: 'Adire',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BOTk2YjViOTgtZTQ5ZC00ZDhiLThlMjMtOTNhYzhmYzI3NDg3XkEyXkFqcGdeQXVyNzc5NDg5Mjc@._V1_FMjpg_UX1000_.jpg',
      rating: 5.3,
    },
    // Add more movie objects as needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies)

  const [filter, setFilter] = useState({
    title: '',
    rating: '',
  });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const applyFilter = () => {
    // Implement filtering logic here based on the 'filter' state
    // You can filter the 'movies' array and update the state accordingly
    // For simplicity, let's just log the filtered movies for now
   
      const filteredMovies = movies.filter(movie => {
        if (movie.title === filter.title || parseInt(movie.rating) === parseInt(filter.rating)) {
          return movie;
        }
        // if (movie.title.trim() === filter.title.trim() || parseInt(movie.rating) === parseInt(filter.rating)) {
        //   return movie;
        // }
      });
    
      setFilteredMovies(filteredMovies);
      } 
    


  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{paddingLeft: '20px', fontWeight: 'bolder'}}>
        <Navbar.Brand>GEMINI BOX</Navbar.Brand>
      </Navbar>
      <Container style={{ marginTop: '20px' }}>
        <Filter filter={filter} onFilterChange={setFilter} />
        <button onClick={applyFilter}>Apply Filter</button>
        <MovieList movies={filteredMovies} />
        
      </Container>
    </div>
  );
};

export default App;