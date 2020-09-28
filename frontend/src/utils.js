export function convertDate(date) {
  return new Date(date).toLocaleDateString({
    day: 'numeric',
    month:'numeric',
    year:'numeric'
  })
}