import React, {Component} from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    // key syntax
    return movieData.map((d, i) => <MovieCard key={i} {...d}/>)
  };

  render() {
    return (<div id="movie-showcase">
      {this.generateMovieCards()}
    </div>)
  }
}
