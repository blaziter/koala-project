import { ChildParameters } from './ChildParameters';

export interface DataParameters {
    data: {
        ID: string,
        Name: string,
        Gender: string,
        Ability: string,
        "Minimal distance": string,
        Weight: string,
        Born: string,
        "In space since": string,
        "Beer consumption (l/y)": string,
        "Knows the answer?": string
    },
    children: ChildParameters
}