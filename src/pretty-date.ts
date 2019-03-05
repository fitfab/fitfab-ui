const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

export const prettyDate = (date?: string): string => {
    const d = date ? new Date(date) : new Date()
    return `${monthNames[d.getMonth()]} ${d.getDay()} ${d.getFullYear()}`
}
