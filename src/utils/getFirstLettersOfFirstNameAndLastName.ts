const getFirstLettersOfFirstNameAndLastName = (name: string): string => {
  if (name === '') return ''

  const cleaningName = name.trimStart().trimEnd()
  const hasMoreThanOneWord = /\s/g.test(cleaningName)

  const splittedName = cleaningName.split(' ')

  const firstName = splittedName[0]
  const firstNameFirstLetter = firstName.charAt(0)

  const lastName =
    splittedName.length > 1 ? splittedName[splittedName.length - 1] : ''
  const lastNameFirstLetter = lastName.charAt(0)

  console.log(hasMoreThanOneWord, name)

  if (hasMoreThanOneWord) {
    return firstNameFirstLetter + lastNameFirstLetter
  } else {
    return firstNameFirstLetter
  }
}

export { getFirstLettersOfFirstNameAndLastName }
