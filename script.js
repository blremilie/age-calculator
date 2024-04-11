function formatDate (inputDay, inputMonth, inputYear){

  let dateInput = inputDay + "/" + inputMonth + "/" + inputYear;
  return dateInput
}

function validateDate(date) {
  const [day,month,year] = date.split("/"); 
  let errorTable = [];

  if (!day) {
    errorTable.append (document.getElementById ("required_day"))
  }
  if (!month) {
    errorTable.append (document.getElementById ("required_month"))
  }
  if (!year) {
    errorTable.append (document.getElementById ("required_year"))
  }

  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  if (isNaN(yearNum) || yearNum.lenght !== 4) {
    errorTable.append (document.getElementById("valid_year"))
  }

  if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
    errorTable.append (document.getElementById("valid_month"))
  }

  const dayInMonth = new Date(yearNum, monthNum, 0).getDate();

  if (isNaN(dayNum) || dayNum < 1 || dayNum > dayInMonth) {
    errorTable.append (document.getElementById("valid_day"))
  }

  return errorTable
}

function applyErrorStyle (errorTable){
  for (let index=0; index <errorTable.lenght; index ++) {
    errorTable[index].stye.display= block
  }
}

function calculateDate (inputDay, inputMonth, inputYear){
  let dateEnter = new Date(inputYear, inputMonth - 1, inputDay);
  let today = new Date();
  let differenceDate = today - dateEnter;

  let differenceInDays = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
  let differenceInYears = Math.floor(differenceInDays / 365);
  let remainderDaysAfterYears = differenceInDays % 365;

  let differenceInMonths = Math.floor(remainderDaysAfterYears / 30);
  let remainderDaysAfterMonths = remainderDaysAfterYears % 30;

  return [differenceInYears, differenceInMonths, remainderDaysAfterMonths]
}

let ageTable = calculateAge(inputDay, inputMonth,inputYear);

function applyCalculateStyle (ageTable){
   document.getElementById ("result_years").innerHTML = ageTable[0]
   document.getElementById("result_months").innerHTML = ageTable[0]
   document.getElementById("result_days").innerHTML = ageTable[0]
}

let button = document.getElementById("button");

button.addEventListener('click', function() {
  let inputDay = document.getElementById("inputDay").value
  let inputMonth = document.getElementById("inputMonth").value
  let inputYear = document.getElementById("inputYear").value
  if(validateInput(inputDay, inputMonth, inputYear)) {
      let ageTable = calculateDate(inputDay, inputMonth, inputYear)
      console.log(ageTable[0])
      console.log(ageTable[1])
      console.log(ageTable[2])
  }
})
