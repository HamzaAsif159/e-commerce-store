export default function calculateSum(obj) {
  let total = 0
  for (let i = 0; i < obj.length; i++) {
    total = total + obj[i].price
  }
  return total
}
