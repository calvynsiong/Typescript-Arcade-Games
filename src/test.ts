function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1+n2
  if (!showResult) {return  result} 
  console.log(phrase + result)
}
const number1 = 1222
const number2 = 2
add(number1, number2, true, `Result is `)