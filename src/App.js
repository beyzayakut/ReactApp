import './App.css';
import SearchHeader from './SearchHeader';

function App() {
  const handleSubmit=(term)=>{ {/*bu sayede ekrana deger girdiğimizde bu değer consola yazdırılır*/}
    console.log(term);
    debugger;
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
    </div>
  );
}

export default App;
