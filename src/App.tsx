import './app.css'; // Import the CSS file
import imagen from'./assets/ensalada de pollo.png'
function Ensala() {
  return (
    <div className="ensala">
    <img src={imagen} alt=""className='pollo'/>
      <div className="da">
        <h1>Fast delivery</h1>
        <h1>your doorstep</h1>
      </div>
      <div className="di">
        <h2>Home delivery and online reservation</h2>
        <h2>system for restaurant & cafe</h2>
      </div>
      <button>
        <div className="lo">Let´s Explore</div>
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Ensala />
    </div>
  );
}

export default App;