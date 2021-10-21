import './App.css';
import Content from './Content';
import useWindowSize from './hooks/useWindowSize'


function App() {

  const { width, height } = useWindowSize();


  return (
    <div className="App">
      <Content windowWidth={width} windowHeight={height} />
    </div>
  );
}

export default App;
