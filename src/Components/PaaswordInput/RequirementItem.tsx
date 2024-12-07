import React from "react";

export const RequirementItem = ({ label, met }: any) => {
    return (
        <li key={label}>
            <p style={{ color: met ? 'green' : 'black' }}>
                {met ? '✔' : 'o'} {label}
            </p>
        </li>
    )
}
