const PRESSURE_UNITS = 0.750061

export const capitalizeLetter = (string: string) => {
  if (!string) return ''

  return string[0]?.toUpperCase() + string.slice(1)
}

export const convertToMmgh = (hpa: number) => {
  return Math.round(hpa * PRESSURE_UNITS)
}
