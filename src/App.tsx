import { DataParameters } from './types/DataParameters';
import _exampleData from './data/example-data.json'
import Table from './components/table/Table'
import formatData from './utils/formatData'
import { useState } from 'react';
import './App.css'

const App = () => {
  const exampleData = _exampleData;
  const [tableData, setTableData] = useState<DataParameters>(formatData(exampleData))

  /* *
     * function for deleting an item
     * tempData is declared so I didn't have to stringify data everytime
     * deletedItem is used for deleting selected item from data
     * first I check if the deleted item is last or not, hence the comma
     * secondly check if it has a comma on the end otherwise it won't render and spit an error
     * lastly replacing empty array with false, so it goes with my logic in rendering children
     */
  const deleteItem = (item: any) => {
    let tempData = JSON.stringify(tableData)
    let deletedItem = JSON.stringify(item)
    let result = tempData.includes(deletedItem + ',') ? tempData.replace(deletedItem + ',', '') : tempData.replace(deletedItem, '')
    result = result.endsWith(',]') ? result.replace(',]', ']') : result
    result = result.replace('[]', 'false')
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
