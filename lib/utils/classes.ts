interface ScopedClassOptions {
  extra?: string | undefined
}

interface ClassToggles {
  [K: string]: boolean
}

export function classes(...names: Array<string | undefined | false>) {
  return names.filter(Boolean).join(' ')
}

export function createScopedClass(prefix: string) {
  return function scopedClass(name?: string | ClassToggles, options?: ScopedClassOptions) {
    let name2
    let result
    if (typeof name === 'string' || typeof name === 'undefined') {
      name2 = name
      result = [prefix, name2].filter(Boolean).join('-')
    } else {
      name2 = Object.entries(name).filter(entry => entry[1]).map(entry => entry[0])
      result = name2.map(n => [prefix, n].filter(Boolean).join('-')).join(' ')
    }

    return (options && options.extra) ?
      [result, options.extra].filter(Boolean).join(' ')
      :
      result
  }
}
