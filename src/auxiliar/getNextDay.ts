export const getNextDays = (currentDate: Date = new Date(), daysToAdd: number = 1): Date => {
  const nextDate = new Date(currentDate)
  nextDate.setDate(currentDate.getDate() + daysToAdd)
  return nextDate
}
