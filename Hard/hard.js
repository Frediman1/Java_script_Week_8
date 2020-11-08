const massTom = 8
const massJerry = 45
const heightJerry = 10
const heightTom = 9
const BmiTom = massTom / 9 * 9
const BmiJerry = massJerry / 10 * 10
console.log(BmiTom)
console.log(BmiJerry)
const isTomGtJerry = BmiTom > BmiJerry
console.log(`isTomGtJerry = ${isTomGtJerry}`)
if (isTomGtJerry) {
    console, log(`Tom has a higher BMI than Jerry`)
} else {
    console.log(`Jerry has a higher Bmi Than Tom`)
}