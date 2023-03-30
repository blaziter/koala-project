import { DataParameters } from "./DataParameters";

export interface FormatParameters {
    data: {
        [key: string]: string
    },
    children?: [
        DataParameters[] | false
    ]
}