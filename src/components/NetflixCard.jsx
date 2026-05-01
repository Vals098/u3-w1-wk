function NetflixCard ({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-100"
      />
    </div>
  )
}

export default NetflixCard 
