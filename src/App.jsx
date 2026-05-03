import "./App.css"
import NetflixNavbar from "./components/NetflixNavbar"
import NetflixFooter from "./components/NetflixFooter"
import NetflixCarousel from "./components/NetflixCarousel"
import NetflixProfile from "./components/NetflixProfile"
import NetflixSettings from "./components/NetflixSettings"
import NetflixGenres from "./components/NetflixGenres"

function App() {
  return (
    <>
      <NetflixNavbar></NetflixNavbar>
      <NetflixGenres></NetflixGenres>
      <NetflixCarousel query="lord of the rings" title="The Lord of the Rings Saga" />
      <NetflixCarousel query="harry potter" title="Harry Potter Saga" />
      <NetflixCarousel query="matrix" title="Matrix Saga" />
      <NetflixFooter></NetflixFooter>
      <NetflixProfile></NetflixProfile>
      <NetflixSettings></NetflixSettings>
    </>
  )
}

export default App
