import { Component } from "react"

class NetflixCarousel extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
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
          loading: false,
        })
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          error: true,
          loading: false,
        })
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
    // conditions
    if (this.state.loading) {
      return (
        <div className="carousel-wrapper">
          <h2 className="text-light">{this.props.title}</h2>
          <p className="text-light px-4 text-center">Loading...</p>
        </div>
      )
    }
    if (this.state.error) {
           return (
        <div className="carousel-wrapper">
          <h2 className="text-light">{this.props.title}</h2>
          <p className="text-danger px-4 text-center">Error while loading</p>
        </div>
      )
    }
    return (
      <div className="carousel-wrapper">
        <h2 className="text-light">{this.props.title}</h2>

        {/* left arrow */}
        <button className="arrow left" onClick={this.scrollLeft}>
          ‹
        </button>

        <div
          className="movie-row"
          ref={(el) => (this.rowRef = el)} //link to row
        >
          <div className="movie-track py-3 ">
            {this.state.movies.map((movie) => (
              <div key={movie.imdbID} className="movie-item">
                <img src={movie.Poster} alt={movie.Title} />
              </div>
            ))}
          </div>
        </div>

        {/* right arrow */}
        <button className="arrow right" onClick={this.scrollRight}>
          ›
        </button>
      </div>
    )
  }
}

export default NetflixCarousel
