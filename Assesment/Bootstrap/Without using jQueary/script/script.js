const intervalBtn = document.getElementById("interval");
const intervalDate = document.getElementById("intervalDate");

  intervalBtn.addEventListener("click", () => {
    const startDateInput = document.getElementById("startDate").value;
    const startDate = new Date(startDateInput);
    const endDateInput = document.getElementById("endDate").value;
    const endDate = new Date(endDateInput);

    if (isNaN(startDate)) {
      alert("Please enter a valid start date.");
      return;
    }

    if (isNaN(endDate)) {
      alert("Please enter a valid end date.");
      return;
    }

    // Calculate the year difference
    const yearDiff = endDate.getFullYear() - startDate.getFullYear();

    // Calculate the total month difference
    const monthDiff = endDate.getMonth() - startDate.getMonth();
    const totalMonthDiff = yearDiff * 12 + monthDiff;

    // Calculate the time difference in milliseconds
    const timeDiff = endDate.getTime() - startDate.getTime();

    // Calculate the weeks
    const weeksDiff = (timeDiff / (1000 * 3600 * 24 * 7)).toFixed(0);

    // Calculate the days difference
    const daysDiff = (timeDiff / (1000 * 3600 * 24)).toFixed(0);

    intervalDate.innerHTML = "Date interval Between " + "<br>"
                          +startDate.getMonth()+"/" + startDate.getDate()+"/" + startDate.getFullYear() + " and "  +endDate.getMonth()+"/" + endDate.getDate()+"/" + endDate.getFullYear()+ "<br>"+"<hr>"+
                          "In year : "+yearDiff+"<br>"+
                          "In month : "+totalMonthDiff+"<br>"+
                          "In week : "+weeksDiff+ "<br>"+
                          "In days : " + daysDiff ;
  });