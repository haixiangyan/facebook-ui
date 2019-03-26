function classes(...names: Array<string | undefined | false>) {
  return names.filter(Boolean).join(' ')
}

export default classes
