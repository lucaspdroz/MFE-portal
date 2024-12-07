import React from "react"
import { getStrenghtPercentage } from "./checks"
import { PasswordStrenght } from "./types"

export const StrenghtIndicator = ({ strenght }: { strenght: PasswordStrenght }) => {
    const colors = {
        weak: 'red',
        medium: 'yellow',
        strong: 'green'
    }

    return (
        <div
            className={`background:`}
            style={{ width: getStrenghtPercentage(strenght), height: '10px', backgroundColor: colors[strenght] }}
        >
        </div>
    )
}