import { useEffect, useState } from "react"
import TableRow from "../tableRow/TableRow";

interface props {
    data: any,
    setData: any,
    deleteItem: (item: any) => void
}

const Table: React.FC<props> = (props: props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.data?.length > 0) setLoading(false)
    }, [props.data])

    return (
        <>
            {
                loading
                    ?
                    <div>loading</div>
                    :
                    Object.values(props.data).pop() != undefined
                        ?
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th></th>
                                    {
                                        Object.keys(Object.values(Object.values(props.data).pop() as string)[0]).map((item, index) =>
                                            <th key={index}>{item}</th>
                                        )
                                    }
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.data.map((item: any, index: number) =>
                                        <>
                                            {
                                                item.data &&
                                                <TableRow row={item} key={index} index={index} setData={props.setData} handleClick={props.deleteItem} >
                                                    {
                                                        item.children &&
                                                        <TableRow row={item.children} key={index} index={index} setData={props.setData} handleClick={props.deleteItem}>
                                                        </TableRow>
                                                    }
                                                </TableRow>
                                            }
                                        </>
                                    )
                                }
                            </tbody>
                        </table>
                        :
                        <div className='card'>
                            <div className='card-content'>
                                <div className='content'>
                                    no data
                                </div>
                            </div>
                        </div>
            }
        </>
    )
}

export default Table