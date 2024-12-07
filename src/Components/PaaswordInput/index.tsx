import React, { useState } from 'react'
import { StrenghtIndicator } from './StrenghtIndicator';
import { PasswordInput } from './PasswordInput';
import { evaluateStrenght } from './checks';
import { RequirementsList } from './RequirementsList';
import './style.css'

export const PasswordChecker = () => {
    const [password, setPassword] = useState('');
    const strengh = evaluateStrenght(password || '');

    return (
        <>
            <PasswordInput value={password} onChange={setPassword} />
            <StrenghtIndicator strenght={strengh} />
            <RequirementsList password={password} />
        </>
    )
}





