import './App.css'
import Table from './components/table/Table'
import _exampleData from './assets/example-data.json'
import TableRow from './components/tableRow/TableRow';
import { useEffect } from 'react';

const App = () => {

  const exampleData = _exampleData;

  useEffect(() => {
    const reformatData = [];
    exampleData.forEach(item => reformatData.push(item))
    console.log(reformatData)
  }, [])

  /*
  <div className="container">
        <Table data={exampleData}/>
      </div>
  */

  return (
    <>
      <div className="container">
        
      </div>
    </>
  )
}

export default App
