let ans = document.getElementById("demo");

class info {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    fullName(){
        return this.fName + " " +this.lName;
    }
}

const member1 = new info("isha", "patel");
const member2 = new info("Viraj", "patel");

ans.innerHTML += "member1.fName &#10170; " + member1.fName + "<br>";
ans.innerHTML += "member1.lName &#10170; " + member1.lName + "<br>";
ans.innerHTML += " member1.fullName() &#10170; " + member1.fullName() + "<br>";
ans.innerHTML += "member2.fName &#10170; " + member2.fName + "<br>";
ans.innerHTML += "member2.lName &#10170; " + member2.lName + "<br>";
ans.innerHTML += "member2.fullName() &#10170; " + member2.fullName() + "<br>";