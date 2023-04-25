import './App.css';

function App() {
  const handleClick = () =>{
    alert("You clicked")
  }
  return (
    <div className="App">
      <div className='Btn'><button name='OkayBtn' onClick={handleClick}>OK</button></div>
      <div className='Btn'><button name='CancelBtn'>Cancel</button></div>
      <div className='Btn'><button name='Submit'>Submit</button></div>
    </div>
  );
}

export default App;
