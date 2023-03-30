import { DataParameters } from "../types/DataParameters";

const formatData = (data: DataParameters[]) => {
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

export default formatData