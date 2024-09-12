import logo from './logo.svg';
import './App.css';
import Simpleclass from './Components/Simpleclass';
import Props from './Components/Props';
import ErrorHandle from './Components/ErrorHandle';

function App() {
  return (
    // <Simpleclass />
    <>
      <Simpleclass />
      <PropsDemo name="Kavyam" />
      <ErrorHandle /></>  
  );
}

export default App;
