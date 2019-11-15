interface ScopedClassOptions {
  extra?: string | undefined
}

export function classes(...names: Array<string | undefined | false>) {
  return names.filter(Boolean).join(' ')
}

export function createScopedClass(prefix: string) {
  return function scopedClass(name?: string, options?: ScopedClassOptions) {
    const currentClasses = [prefix, name].filter(Boolean).join('-')

    return (options && options.extra) ?
      [currentClasses, options.extra].filter(Boolean).join(' ')
      :
      currentClasses
  }
}
