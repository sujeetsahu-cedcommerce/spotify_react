// import logo from './logo.svg';
import './App.css';
import "./style.css";
import CollapsibleExample from './components/Componentnavbar';
import Componentmid1 from './components/Componentmid1';
import Componentmid2 from './components/Componentmid2';

function App() {
  return (
    <div className='container_main'>
      <div>
        <CollapsibleExample />
      </div>
      <div class="componentmid1">
        <Componentmid1/>
      </div>
      <div className='componentmid2'>
      <Componentmid2></Componentmid2>
      </div>
    </div>
   
  );
}

export default App;
