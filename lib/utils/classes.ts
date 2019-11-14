export function classes(...names: Array<string | undefined | false>) {
  return names.filter(Boolean).join(' ')
}

export function createScopedClass(prefix: string) {
  return function x(name?: string) {
    return [prefix, name].filter(Boolean).join('-')
  }
}
