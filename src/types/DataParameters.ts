export interface DataParameters {
    data: {
        [key: string]: string
    },
    children?: {
        records: [
            DataParameters[] | null
        ]
    }
}