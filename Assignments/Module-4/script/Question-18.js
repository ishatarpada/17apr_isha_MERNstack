function result() {
    let mark1 = parseInt(document.getElementById("sub1").value);
    let mark2 = parseInt(document.getElementById("sub2").value);
    let mark3 = parseInt(document.getElementById("sub3").value);
    let mark4 = parseInt(document.getElementById("sub4").value);
    let mark5 = parseInt(document.getElementById("sub5").value);
    let mark6 = parseInt(document.getElementById("sub6").value);
    let mark7 = parseInt(document.getElementById("sub7").value);

    let ans = document.getElementById("total");
    let ans1 = document.getElementById("percentage");
    let colorTotal = document.getElementById("totalColor");
    colorTotal.style.color = "#5b0e3c";


    let total = mark1 + mark2 + mark3 + mark4 + mark5 + mark6 + mark7;
    let percentage = (total / 350) * 100;

    ans.innerHTML = `Total is :<span style="color: #a9166e">${total}</span>/ 350`;
    ans1.innerHTML = `percentage is : <span style="color: #a9166e">${percentage}</span> %`;
}