import { PasswordStrenght } from './types'

export const evaluateStrenght = (password: string): PasswordStrenght => {
    const check = [
        hasMinimumLength(password),
        hasNumbers(password),
        hasSymbols(password),
        hasMixedCase(password),
    ]

    const PassedChecks = check.filter(Boolean).length;

    if (PassedChecks <= 1) return 'weak';
    if (PassedChecks <= 3) return 'medium';
    return 'strong';
}

export const getStrenghtPercentage = (strengh: PasswordStrenght): string => {
    const percentages = {
        weak: '33%',
        medium: '66%',
        strong: '100%'
    }

    return percentages[strengh]
}

export const hasMinimumLength = (password: string) => {
    return password.length >= 8;
}

export const hasNumbers = (password: string) => {
    return /\d/.test(password);
}
export const hasSymbols = (password: string) => {
    return /[^A-Za-z0-9]/.test(password);
}
export const hasMixedCase = (password: string) => {
    return /[A-Z]/.test(password) && /[a-z]/.test(password);
}