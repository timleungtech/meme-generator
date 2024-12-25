import { useState, useEffect } from 'react'

export default function Main() {

  const [memes, setMemes] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    // .then(data => console.log(data.data.memes))
    .then(data => setMemes(data.data.memes))
    .then(console.log('Effect ran'))
  }, [])
  
  const [meme, setMeme] = useState({
    topText: '', 
    bottomText: '',
    imageUrl: 'http://i.imgflip.com/1bij.jpg'
  })
  
  function getMemeImage () {
    const randomNumber = Math.floor(Math.random() * memes.length)
    setMeme(prevMeme => ({
      ...prevMeme, 
      imageUrl: memes[randomNumber].url
    }))
  }

  function handleChange (event) {
    const {value, name} = event.currentTarget
    setMeme(prevMeme => ({
      ...prevMeme, 
      [name]: value // name property of inputs. value is grabbed from input box
    }))
  }
  
  return (
    <main>
      <div className="form">
        <label>Top Text
          <input
            type="text"
            placeholder=""
            name="topText"
            onChange={handleChange}
            value={meme.topText}    // controlled component - saves value to react
          />
        </label>

        <label>Bottom Text
          <input
            type="text"
            placeholder=""
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={getMemeImage}>Get a Meme meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  )
}