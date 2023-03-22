export interface ChildParameters {
    has_nemesis: {
        records: [
            {
                data: {
                    ID: string,
                    "Character ID": string,
                    "Is Alive?": string,
                    Years: string
                },
                children: {
                    has_secrete: {
                        records: [
                            {
                                data: {
                                    ID: string,
                                    "Nemesis ID": string,
                                    "Secrete Code": string
                                },
                                children: {

                                }
                            }
                        ]
                    }
                }
            }
        ]
    }
}