import { useEffect, useState } from "react"
import { TableParameters } from "../../types/TableParameters";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'

const Table = ({ data }: TableParameters) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {

    })

    return (
        <>
            <table className="table is-striped">
                <thead className="table-head">
                    <tr className="table-row">
                        <th></th>
                        {
                            Object.keys(data[0].data).map(item =>
                                <th>{item}</th>
                            )
                        }
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item =>
                            <>
                                {
                                    
                                }
                            </>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table