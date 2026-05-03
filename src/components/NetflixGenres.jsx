function NetflixGenres() {
  return (
    <main className="homepage-main p-4">
      <div className="genres d-flex flex-column flex-md-row align-items-start align-items-md-center">
        <h1>TV Shows</h1>
        <div className="dropdown mt-2 mt-md-0 mx-md-4">
          <button
            className="btn btn-netflix dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Genres
          </button>

          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Adventure
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Comedy
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Drama
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Horror
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Romance
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sci-Fi
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex gap-2 gap-lg-0 mt-2 mt-md-0 ms-lg-auto">
          <button className="btn btn-netflix">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
          <button className="btn btn-netflix">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-grid-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  )
}

export default NetflixGenres
