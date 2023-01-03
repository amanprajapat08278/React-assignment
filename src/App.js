
import './App.css';

function App(props) {
  const run = () => {
    console.log("Button has clicked")
  }
  return (
    <>
      <div className="box">
        <img id='logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png' alt='Loading' />
        <input id='search' />
        <div className="btnBox">
          <button id='btn1' className='btn' onClick={run}>Google Search</button>
          <button id='btn2' className='btn' onClick={run}>I'm Feeling Lucky</button>
        </div>
        <p id='para'>Google offer in : <a id='lang' href='/'>{props.lang}</a></p>
      </div>
    </>
  );
}

export default App;
