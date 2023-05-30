
import './App.css';
import Side from'./components/Side'
import Right from  "./components/Right"
import Bottom from "./components/Bottom"
import Down from './components/Down';
function App() {
  return (
    <div className="App">
      <div className='side'><Side /></div>
     <div className='right'>
      <Right />
      <Bottom/>
      <Down/>
    
     </div>
    </div>
  );
}

export default App;
