import React from 'react'
import { PasswordChecker } from '../components/PaaswordInput'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div style={{ width: '500px' }}>
                <PasswordChecker />
            </div>
        </div>
    )
}
