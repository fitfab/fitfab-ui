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

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// comments more
export const prettyDate = (date?: string): string => {
    const d = date ? new Date(date) : new Date()
    return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

export const getWeekDay = (date?: string): string => {
    const d = date ? new Date(date) : new Date()
    return `${weekDays[d.getDay()]}`
}
