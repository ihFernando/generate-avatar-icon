function formatNameIcon(name: string): string {
  const nameIcon = name.replace(' ', '-').toLocaleLowerCase()

  return nameIcon
}

export { formatNameIcon }
