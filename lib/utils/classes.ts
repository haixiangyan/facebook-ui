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
  return (name: string | ClassToggles, options?: ScopedClassOptions) =>
    Object.entries(name instanceof Object ? name: {[name]: name})
      .filter(entry => entry[1] !== false)
      .map(entry => entry[0])
      .map(name => [prefix, name]
        .filter(Boolean)
        .join('-'))
      .concat(options && options.extra || [])
      .join(' ')
}
