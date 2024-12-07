import React from "react";
import { hasMixedCase, hasMinimumLength, hasNumbers, hasSymbols } from './checks';

import { RequirementItem } from "./RequirementItem"

export const RequirementsList = ({ password }: any) => {
    const requirements = [
        {
            label: 'At least 8 characters',
            met: hasMinimumLength(password),
        },
        {
            label: 'Contains numbers',
            met: hasNumbers(password),
        },
        {
            label: 'Contains symbols',
            met: hasSymbols(password),
        },
        {
            label: 'Contains uppercase and lowercase letters',
            met: hasMixedCase(password),
        },
    ]


    return (
        <ul>
            {requirements.map(({ label, met }) => (
                <RequirementItem key={label} label={label} met={met} />
            ))}
        </ul>
    )
}