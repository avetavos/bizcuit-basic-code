import readline from 'readline'

export const sum = (a: any, b: any) => {
  const aInt = +a
  const bInt = +b

  if (isNaN(aInt) || isNaN(bInt)) {
    throw new Error('Invalid input')
  }

  return aInt + bInt
}

const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

cli.question('Enter first number: ', (a) => {
  cli.question('Enter second number: ', (b) => {
    try {
      const result = sum(a, b)
      console.log(`Result: ${result}`)
    } catch (error) {
      console.error(error)
    } finally {
      cli.close()
    }
  })
})