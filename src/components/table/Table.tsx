import { DataParameters } from "../../types/DataParameters";
import TableRow from "../tableRow/TableRow";
import { useEffect, useState } from "react"

interface props {
    data: DataParameters[]
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
                                                <TableRow row={item} key={index} index={index} handleClick={props.deleteItem} >
                                                    {
                                                        item.children &&
                                                        <TableRow row={item.children} key={index} index={index} handleClick={props.deleteItem} />
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