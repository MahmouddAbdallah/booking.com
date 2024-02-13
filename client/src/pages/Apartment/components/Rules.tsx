import React from 'react'

interface rulesProps {
    rules: {
        CheckIn: {
            time: {
                from: string,
                to: string
            },
            message: string
        },
        CheckOut: {
            time: {
                from: string,
                to: string
            },
            message: string
        },
        childrenAndBeds: string,
        smoking: string,
        pets: string,
        ageRestriction: string,
        Damagepolicy: string
    } | undefined,
}
const Rules: React.FC<rulesProps> = ({ rules }) => {
    console.log(rules);

    return (
        <div>
            <div className="py-3">
                <h3 className="font-bold">Most popular facilities</h3>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Rules