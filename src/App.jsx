import "./App.css"

import NetflixNavbar from "./components/NetflixNavbar"
import NetflixFooter from "./components/NetflixFooter"
import NetflixCarousel from "./components/NetflixCarousel"

function App() {
  return (
    <>
      <NetflixNavbar></NetflixNavbar>
      <NetflixCarousel></NetflixCarousel>
      <NetflixFooter></NetflixFooter>
    </>
  )
}

export default App
