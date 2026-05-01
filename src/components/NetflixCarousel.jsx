import { Component } from "react"

class NetflixCarousel extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=dc5ad717&s=${this.props.query}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore")
        }
      })
      .then((data) => {
        this.setState({
          movies: data.Search,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>

        {this.state.movies.map((movie) => (
          <div key={movie.imdbID}>
            <p>{movie.Title}</p>
            <img src={movie.Poster} alt={movie.Title} width="100" />
          </div>
        ))}
      </div>
    )
  }
}

export default NetflixCarousel