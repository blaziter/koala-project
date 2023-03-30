import './App.css'
import Table from './components/table/Table'
import _exampleData from './data/example-data.json'
import { useEffect, useState } from 'react';
import formatData from './utils/formatData';

const App = () => {
  const exampleData = _exampleData;
  const [tableData, setTableData] = useState()

  useEffect(() => {
    setTableData(formatData(exampleData))
  }, [])

  const deleteItem = (item: any) => {
    let tempData = JSON.stringify(tableData)
    let deletedItem = JSON.stringify(item)
    let result = tempData.includes(deletedItem + ',') ? tempData.replace(deletedItem + ',', '') : tempData.replace(deletedItem, '')
    result = result.endsWith(',]') ? result.replace(',]', ']') : result
    result = result.replace('[]', 'false')
    console.log(result)
    setTableData(JSON.parse(result))
  }

  return (
    <>
      <div className="container">
        <Table data={tableData} setData={setTableData} deleteItem={deleteItem} />
      </div>
    </>
  )
}

export default App
