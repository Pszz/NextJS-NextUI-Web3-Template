export function formatDecimals(value: string, decimal: number = 18) {
  if (decimal === 0) {
    return value.replace(/^\D*(\d*(?:\.\d*)?).*$/g, '$1')
  }
  const decimalRegex = new RegExp(`^\\D*(\\d*(?:\\.\\d{0,${decimal}})?).*$`, 'g')
  const formattedValue = value.replace(decimalRegex, '$1')

  const decimalIndex = formattedValue.indexOf('.')
  if (decimalIndex !== -1 && formattedValue.length - decimalIndex - 1 > decimal) {
    return formattedValue.slice(0, decimalIndex + decimal + 1)
  }

  return formattedValue
}

export async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

export function parseJSON(str: string | null, initValue?: any) {
  if (str === null) return initValue || null
  try {
    return JSON.parse(str)
  } catch (err) {
    return initValue || null
  }
}

export function storageLocal() {
  return {
    getItem: (key: string, initValue: any = null) => parseJSON(localStorage.getItem(key), initValue),
    setItem: (key: string, value: any) =>
      localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value)),
  }
}

export function storageSession() {
  return {
    getItem: (key: string, initValue: any = null) => parseJSON(sessionStorage.getItem(key), initValue),
    setItem: (key: string, value: any) =>
      sessionStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value)),
  }
}
