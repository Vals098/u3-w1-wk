import { Component } from "react"

class NetflixCarousel extends Component {
  state = {
    movies: [],
  }

  rowRef = null

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

  scrollLeft = () => {
    this.rowRef.scrollBy({
      left: -300,
      behavior: "smooth",
    })
  }

  scrollRight = () => {
    this.rowRef.scrollBy({
      left: 300,
      behavior: "smooth",
    })
  }

  chunkArray = (array, size) => {
    const result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }

  render() {
    return (
      <div className="carousel-wrapper">
        <h2 className="text-light">{this.props.title}</h2>

        {/* freccia sinistra */}
        <button className="arrow left" onClick={this.scrollLeft}>
          ‹
        </button>

        <div
          className="movie-row"
          ref={(el) => (this.rowRef = el)} // 👈 COLLEGAMENTO
        >
          <div className="movie-track">
            {this.state.movies.map((movie) => (
              <div key={movie.imdbID} className="movie-item">
                <img src={movie.Poster} alt={movie.Title} />
              </div>
            ))}
          </div>
        </div>

        {/* freccia destra */}
        <button className="arrow right" onClick={this.scrollRight}>
          ›
        </button>
      </div>
    )
  }
}

export default NetflixCarousel
