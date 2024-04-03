function isLeapYear(year) {
  year = parseInt(document.getElementById("inputYear").value);
  if (year % 4 !== 0) {
    return false;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  return true;
}

function validateInput(inputDay, inputMonth, inputYear) {
  if(inputDay == "" || inputMonth == "" || inputYear == "") {
      alert("This field is required")
      return false
  }
  else if(!isLeapYear(inputYear) && parseInt(inputMonth) === 2 && parseInt(inputDay) >= 29) {
      alert("Day is to high")
      return false
  }
  else {
      return true
  }
}

function calculateDate (inputDay, inputMonth, inputYear){
  let dateEnter = new Date(inputYear, inputMonth-1, inputDay)
  let today = new Date ();
  let differenceDate = dateEnter.getTime() - today.getTime();

  let dayDifference = differenceDate.getDay()
  let monthDifference = differenceDate.getMonth()
  let yearDifference = differenceDate.getYears()

  return dayDifference, monthDifference, yearDifference
}
let button = document.getElementById("button");

button.addEventListener('click', function() {
  let inputDay = document.getElementById("inputDay").value
  let inputMonth = document.getElementById("inputMonth").value
  let inputYear = document.getElementById("inputYear").value
  if(validateInput(inputDay, inputMonth, inputYear)) {
      let day, month, year = calculateDate(inputDay, inputMonth, inputYear)
      console.log(day)
      console.log(month)
      console.log(year)
  }
})