import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';

function App() {
  return (
    <>
    <div className="container">
      <div className='row align-items-center'>
        <div className='col-2 text-center'>{"<"}</div>
        <div className='col content'>
          <Landing />
        </div>
        <div className='col-2 text-center'>{">"}</div>
      </div>
    </div>
    </>
  );
}

export default App;
