import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Body from './Pages/Body';
function App() {
  return (
    <div className="App">
      <div className='navbar'><Navbar/></div>
      <div className='body'><Body/></div>
      <div className='footer'></div>

    </div>
  );
}

export default App;
