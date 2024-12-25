import React from "react"
import WindowTracker from "../components/WindowTracker"

export default function App(props) {
  const [starWarsData, setStarWarsData] = React.useState(null)
  const [character, setCharacter] = React.useState(1)

  // React.useEffect(() => {
  //   fetch("https://swapi.py4e.com/api/people/1")
  //   .then(res => res.json())
  //   .then(data => setStarWarsData(data))
  //   .then(data => console.log(data))
  // }, [0])

  // React.useEffect(() => {
  //   fetch(`https://swapi.py4e.com/api/people/${character}`)
  //   .then(res => res.json())
  //   .then(data => setStarWarsData(data))
  //   .then(console.log('Effect ran'))
  // },[character])

  console.log('Rendered!')

  // const [memes, setMemes] = React.useState([])

  // React.useEffect(() => {
  //   fetch('https://api.imgflip.com/get_memes')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .then(data => setMemes(data))
  //   .then(console.log('Effect ran'))
  // }, [])

  const [show, setShow] = React.useState(true)

  function toggleShow () {
    setShow(prevShow => !prevShow)
  }
  
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function watchWindowWidth() {
      console.log('Resized!')
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', watchWindowWidth)
    return function (){
      console.log('Cleaning up...')
      window.removeEventListener('resize', watchWindowWidth)
    }
  }, [])

  return (
    <>
      <div>
        <button onClick={() => setCharacter(prevCharacter => prevCharacter + 1)}>Get next character</button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
      <button onClick={toggleShow}>Toggle Window Tracker</button>
      {show && <WindowTracker windowWidth={windowWidth}/>}
    </>
  )
}

