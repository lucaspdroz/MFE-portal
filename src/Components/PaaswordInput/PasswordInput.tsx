import React from 'react'

export const PasswordInput = (
    ({ value, onChange }: any) => {
        return (
            <input type="password" name="" id="" value={value} onChange={e => onChange(e.target.value)} />

        )
    }
)