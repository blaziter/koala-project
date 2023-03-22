import { useEffect, useState } from "react"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'
import { ChildParameters } from "../../types/ChildParameters";
import { DataParameters } from "../../types/DataParameters";

const ChildTable = ({ data }: ChildParameters) => {
    const [child, setChild] = useState(false);

    useEffect(() =>{
        console.log(data)
    }, [])

    return (
        <>
            <table className="table is-striped">
                <thead className="table-head">
                    <tr className="table-row">
                        <th></th>
                        {
                            Object.keys(data).map(item =>
                                <th>{item}</th>
                            )
                        }
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        /*children.map(item =>
                            item.records[0].children.has_secrete ?
                                <tr className="table-row" key={item.records[0].data.ID}>
                                    <td colSpan={12}>
                                        <td className="children" onClick={() => setChild(!child)}>
                                            <AiOutlineArrowRight />
                                        </td>
                                        {
                                            Object.values(item.data).map(item => <td>{item}</td>)
                                        }
                                        <td className="delete-button"><ImCross /></td>
                                    </td>
                                </tr>
                                :
                                <tr className="table-row" key={item.data.ID}>
                                    <td className="children">
                                        {item.children.has_secrete ? <AiOutlineArrowRight /> : <></>}
                                    </td>
                                    {
                                        Object.values(item.data).map(item => <td>{item}</td>)
                                    }
                                    <td className="delete-button"><ImCross /></td>
                                </tr>
                        )*/
                    }
                </tbody>
            </table>
        </>
    )
}

export default ChildTable