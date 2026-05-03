function NetflixSettings() {
  return (
    <div id="settings" className="settings-body">
      <main className="settings-main">
        <div className="container mt-md-3 p-5">
          <div className="row justify-content-center">
            <div className="col">
              {/* TITLE */}
              <div className="row">
                <h1 className="fs-2 text-dark text-center text-md-start">
                  Settings Page - Account
                </h1>
              </div>

              {/* MEMBERSHIP */}
              <div className="row membership">
                <div className="col-12 col-md-4 col-lg-3">
                  <h3>MEMBERSHIP & BILLING</h3>
                  <button className="settings-button">Cancel Membership</button>
                </div>

                <div className="col-12 col-md-8 col-lg-9">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <p className="text-black">student@strive.school</p>
                      <p>Password: ******</p>
                      <p>Phone: 321 044 1279</p>
                    </div>

                    <div className="text-end">
                      <p>
                        <a href="#">Change account email</a>
                      </p>
                      <p>
                        <a href="#">Change password</a>
                      </p>
                      <p>
                        <a href="#">Change phone number</a>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-start paypal">
                    <div>
                      <p className="text-black">admin@strive.school</p>
                    </div>

                    <div className="text-end">
                      <p>
                        <a href="#">Update payment info</a>
                      </p>
                      <p>
                        <a href="#">Billing details</a>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-start">
                    <div></div>

                    <div className="text-end">
                      <p>
                        <a href="#">Redeem gift card or promo code</a>
                      </p>
                      <p>
                        <a href="#">Where to buy gift cards</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PLAN */}
              <div className="row plan">
                <div className="col-12 col-md-4 col-lg-3">
                  <h3>PLAN DETAILS</h3>
                </div>

                <div className="col-12 col-md-8 col-lg-9">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="text-black">
                        Premium <span className="ultra-hd">ULTRA HD</span>
                      </p>
                    </div>

                    <div className="text-end">
                      <p>
                        <a href="#">Change plan</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SETTINGS */}
              <div className="row settings">
                <div className="col-12 col-md-4 col-lg-3">
                  <h3>SETTINGS</h3>
                </div>

                <div className="col-12 col-md-8 col-lg-9">
                  <div>
                    <p>
                      <a href="#">Parental controls</a>
                    </p>
                    <p>
                      <a href="#">Test participation</a>
                    </p>
                    <p>
                      <a href="#">Manage download devices</a>
                    </p>
                    <p>
                      <a href="#">Activate a device</a>
                    </p>
                    <p>
                      <a href="#">Recent device streaming activity</a>
                    </p>
                    <p>
                      <a href="#">Sign out of all devices</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* PROFILE */}
              <div className="row my-profile">
                <div className="col-12 col-md-4 col-lg-3">
                  <h3>MY PROFILE</h3>
                </div>

                <div className="col-12 col-md-8 col-lg-9">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="d-flex align-items-center">
                        <img
                          src="../../assets/avatar.png"
                          alt="avatar"
                          className="avatar-settings"
                        />
                        <p className="ms-2 text-dark">Strive Student</p>
                      </div>

                      <p>
                        <a href="#">Language</a>
                      </p>
                      <p>
                        <a href="#">Playback settings</a>
                      </p>
                      <p>
                        <a href="#">Subtitle appearance</a>
                      </p>
                    </div>

                    <div className="text-end">
                      <p>
                        <a href="#">Manage profiles</a>
                      </p>
                      <p>
                        <a href="#">Add profile email</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NetflixSettings
