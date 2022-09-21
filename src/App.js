import "./index.css";
import { vocab } from "./cakevocab";

function App() {
  const randomNum = Math.floor(Math.random() * Math.floor(vocab.length));
  const images = [
    "./cupcake1.jpg",
    "./cupcake2.jpg",
    "./cupcake3.jpg",
    "./cupcake4.jpg",
    "./cupcake5.jpg",
    "./cupcake6.jpg",
    "./cupcake7.jpg",
  ];

  return (
    <div className="App">
      <div id="search-area">
        <input type="text" placeholder="Search Google or type a URL"></input>

        <button onClick={() => (window.location.href = "")}>
          SEARCH
        </button>
      </div>
      <h1>{vocab[randomNum].title}</h1>
      <h3>{vocab[randomNum].previewDescription}</h3>

      <div className="thumb-nails">
      {images.map(image => {
        console.log(image)
        return (
          
            <img src={require(`${image}`)} alt="cakes" />
          
        );
      })}
      </div>
    </div>
  );
}

export default App;
