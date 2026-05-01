import "./App.css"
import NetflixNavbar from "./components/NetflixNavbar"
import NetflixFooter from "./components/NetflixFooter"
import NetflixCarousel from "./components/NetflixCarousel"

function App() {
  return (
    <>
      <NetflixNavbar></NetflixNavbar>
      <NetflixCarousel query="harry potter" title="Harry Potter" />
      <NetflixCarousel query="star wars" title="Star Wars" />
      <NetflixCarousel query="lord of the rings" title="Lord of the Rings" />
      <NetflixFooter></NetflixFooter>
    </>
  )
}

export default App
