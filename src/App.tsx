import './App.css'
import Table from './components/table/Table'
import _exampleData from './assets/example-data.json'
import { useEffect, useState } from 'react';

const App = () => {
  const exampleData = _exampleData;
  const [tableData, setTableData] = useState()

  useEffect(() => {
    setTableData(formatData(exampleData))
    console.log(exampleData)
    console.log(tableData)
  }, [])

  const formatData = (data: any) => {
    const formattedData: any = [];

    data.forEach((item: any) => {
      const row = {
        data: item.data,
        children: Object.values(item.children).length > 0 && formatData(item.children[Object.keys(item.children).pop() as string].records)
      }
      formattedData.push(row)
    })
    return formattedData as any
  }

  return (
    <>
      <div className="container">
        <Table parentIndex={0} data={tableData} setData={setTableData} />
      </div>
    </>
  )
}

export default App
