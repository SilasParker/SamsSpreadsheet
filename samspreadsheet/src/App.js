import './App.css';
import { useEffect, useState } from 'react';
import getWorksheet from './utilities/getWorksheet';

function App() {

  const [worksheet, setWorksheet] = useState(null);

  useEffect(() => {
    console.log(worksheet)
  }, worksheet);

  return (
    <div className="App">
      <h1>Sam's Spreadsheet App</h1>
      <input type="text" id="pathInput"/>
      <input type="button" onClick={() => { console.log(document.getElementById('pathInput').value) ; setWorksheet(getWorksheet(document.getElementById('pathInput').value)) }} value="Submit Path" />
    </div>
  );
}

export default App;
