import { useEffect, useState } from "react"
import TableRow from "../tableRow/TableRow";

interface props {
    parentIndex: number,
    data: any,
    setData: any
}

const Table = ({ parentIndex, data, setData }: props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data?.length > 0) setLoading(false)
        if (data) console.log(Object.values(data))
    }, [data])

    const deleteRow = (item: any, index: number, parentIndex: number) => {
        console.log(index, parentIndex)
        console.log(data.includes(item))
    }

    return (
        <>
            {
                loading
                    ?
                    <div>loading</div>
                    :
                    <table className="table">
                        <thead className="table-head">
                            <tr className="table-row">
                                <th></th>
                                {
                                    Object.keys(Object.values(Object.values(data).pop() as string)[0]).map((item, index) =>
                                        <th key={index}>{item}</th>
                                    )
                                }
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item: any, index: number) =>
                                    <>
                                        {
                                            item.data &&
                                            <TableRow row={item} key={index} index={index} parentIndex={parentIndex} setData={setData} handleClick={() => deleteRow(item, index, parentIndex)} >
                                                {
                                                    item.children &&
                                                    <TableRow row={item.children} key={index} index={index} parentIndex={parentIndex} setData={setData} handleClick={() => deleteRow(item, index, parentIndex)}>
                                                    </TableRow>
                                                }
                                            </TableRow>
                                        }
                                    </>
                                )
                            }
                        </tbody>
                    </table>
            }
        </>
    )
}

export default Table