const PRESSURE_UNITS = 0.750061

export const capitalizeLetter = (string: string) => {
  if (!string) return ''

  return string[0]?.toUpperCase() + string.slice(1)
}

export const convertToMmgh = (hpa: number) => {
  return Math.round(hpa * PRESSURE_UNITS)
}

export const getTime = (seconds: number) => {
  return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' })
}
