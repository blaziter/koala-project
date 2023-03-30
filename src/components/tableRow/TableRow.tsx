import { DataParameters } from '../../types/DataParameters';
import { AiOutlineArrowRight } from "react-icons/ai"
import { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im"
import Table from "../table/Table"

interface props {
    row: DataParameters,
    index: number,
    children?: JSX.Element,
    handleClick: (item: DataParameters) => void;
}

const TableRow: React.FC<props> = (props: props) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
    }, [])

    return (
        <>
            <tr className='table-row'>
                {
                    props.row.children
                        ?
                        <td onClick={() => setOpen(!open)}>
                            <AiOutlineArrowRight />
                        </td>
                        :
                        <td>
                        </td>
                }
                {
                    Object.values(props.row.data).map((item: any, index: number) => <td key={index}>{item}</td>)
                }
                <td className='delete-button' onClick={() => props.handleClick(props.row)}>
                    <ImCross />
                </td>
            </tr>
            <tr>
                <td colSpan={12}>
                    {
                        open && props.children ?
                            props.children.props != false ?
                                <Table data={props.children.props.row} deleteItem={props.handleClick} />
                                :
                                <></>
                            :
                            <></>
                    }
                </td>
            </tr>
        </>
    )
}

export default TableRow