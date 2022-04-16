export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = `${date.getMonth()}`.padStart(2, '0')
    const day = `${date.getDate()}`.padStart(2, '0')
    return `${year}.${month}.${day}`
}