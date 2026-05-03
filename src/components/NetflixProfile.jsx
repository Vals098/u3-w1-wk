function NetflixProfile() {
  return (
    <main id="profile" className="profile-main">
      <div className="container mt-md-5 p-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 mx-auto">

            <div className="row">
              <div className="col">
                <h1 className="text-center text-md-start">Edit Profile</h1>
              </div>
            </div>

            <div className="row second-row py-3 justify-content-center text-center text-md-start">

              <div className="col-12 col-md-3 px-1 mb-3 mb-md-0">
                <img
                  src="../../assets/avatar.png"
                  alt="avatar"
                  className="img-fluid"
                />
              </div>

              <div className="col-12 col-md-9">
                <form className="d-flex flex-column align-items-center align-items-md-start gap-3 profile-form">

                  <input
                    type="text"
                    className="form-control input-style text-center text-md-start"
                    defaultValue="Strive Student"
                  />

                  <h3>Language:</h3>

                  <select className="form-select border-secondary select-style">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Italian</option>
                    <option>Japanese</option>
                  </select>

                  <div className="form-maturity">
                    <h3>Maturity Settings:</h3>
                    <button className="btn-maturity">
                      ALL MATURITY RATINGS
                    </button>
                    <p>
                      Show titles of all maturity ratings for this profile.
                    </p>
                    <button className="btn-netflix">EDIT</button>
                  </div>

                  <h3>Autoplay controls</h3>

                  <div className="form-check d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label mx-2">
                      Autoplay next episode in a series on all devices.
                    </label>
                  </div>

                  <div className="form-check d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label mx-2">
                      Autoplay previews while browsing on all devices.
                    </label>
                  </div>

                </form>
              </div>
            </div>

            <div className="row mt-4 px-0">
              <div className="col-12 col-md-2 mb-2">
                <button className="btn-netflix w-100">SAVE</button>
              </div>

              <div className="col-12 col-md-4 mb-2">
                <button className="btn-netflix w-100">CANCEL</button>
              </div>

              <div className="col-12 col-md-6">
                <button className="btn-netflix w-100">
                  DELETE PROFILE
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default NetflixProfile