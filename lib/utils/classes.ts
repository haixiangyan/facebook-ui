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
  return function scopedClass(name: string | ClassToggles, options?: ScopedClassOptions) {
    const nameObj = (typeof name === 'string' || typeof name === 'undefined')
      ? {[name]: name} : name

    const scoped = Object.entries(nameObj)
                      .filter(entry => entry[1] !== false)
                      .map(entry => entry[0])
                      .map(name => [prefix, name]
                        .filter(Boolean)
                        .join('-'))
                      .join(' ')

    return (options && options.extra) ?
      [scoped, options.extra].filter(Boolean).join(' ') : scoped
  }
}
