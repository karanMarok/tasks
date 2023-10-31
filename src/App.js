import './App.css';
import Color from './Color';
import ColorProvider, { useColorContext } from './ColorProvider';
import Dropdown from './Dropdown';
import Hero from './Hero';

function App() {

  const color = useColorContext();

  return (
    <>
    <div style={{backgroundColor:color}}>
      <Hero/>
        <Color/>
        <Dropdown/>
        {/* <Multiselect/> */}
       </div>
      
    </>
  );
}

export default App;
