let ans = document.getElementById("demo");

const person = {
    fnm: "isha",
    lnm: "Patel",
    hobby: "coding",
    language: " ",
    _age: 20, // use private variable
    get fullName() {
        return this.fnm + " " + this.lnm;
    },
    set age(value) {
        if (value > this._age) { // add validation
            this._age = value;
        }
    },
    set laung(value) {
        return this.language = value;
    },
    get Hobby() {
        return this.hobby.toUpperCase();
    }
}
person.language = "english";
person.age = 21;
ans.innerHTML += person.fullName + "<br>";
ans.innerHTML += person.Hobby + "<br>";
ans.innerHTML += person.language + "<br>";
ans.innerHTML += person._age + "<br>";

for (i in person) {
    ans.innerHTML += "person[" + i + "] &#10170; " + person[i] + "<br>";
}
ans.innerHTML += "<br>";

// define object
const obj = {
    counter: 0
};

// define set and get
Object.defineProperty(obj, "reset", {
    get: function () {
        this.counter = 0;
    }
});
Object.defineProperty(obj, "increment", {
    get: function () {
        this.counter++;
    }
});
Object.defineProperty(obj, "decrement", {
    get: function () {
        this.counter--;
    }
});
Object.defineProperty(obj, "add", {
    set: function (value) {
        this.counter += value;
    }
});
Object.defineProperty(obj, "subtract", {
    set: function (value) {
        this.counter -= value;
    }
});

obj.reset;
obj.add = 10;
obj.subtract = 1;
obj.increment;
obj.decrement;

ans.innerHTML += obj.counter;

