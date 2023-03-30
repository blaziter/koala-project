import { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import { ImCross } from "react-icons/im"
import Table from "../table/Table"

interface props {
    row: any,
    index: number,
    children: any,
    setData: any,
    handleClick: (item: any) => any;
}

const TableRow = ({ index, row, children, setData, handleClick }: props) => {
    const [open, setOpen] = useState(false);
    const [hide, setHide] = useState(false);

    useEffect(() => {
    }, [])

    return (
        <>
            {
                !hide &&
                <>
                    <tr className='table-row'>
                        {
                            row.children
                                ?
                                <td onClick={() => setOpen(!open)}>
                                    <AiOutlineArrowRight />
                                </td>
                                :
                                <td>
                                </td>
                        }
                        {
                            Object.values(row.data).map((item: any, index: number) => <td key={index}>{item}</td>)
                        }
                        <td className='delete-button' onClick={() => handleClick(row)}>
                            <ImCross />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={12}>
                            {
                                open && children ?
                                    children.props != false ?
                                        <Table data={children.props.row} setData={setData} deleteItem={handleClick} />
                                        :
                                        <></>
                                    :
                                    <></>
                            }
                        </td>
                    </tr>
                </>
            }
        </>
    )
}

export default TableRow