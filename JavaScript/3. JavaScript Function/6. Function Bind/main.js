let ans = document.getElementById("demo");

const area = {
    length: 10,
    width: 20,
    base: 15,
    height: 30,
    radius: 21,
    square: function () {
        return this.length * 4;
    }
    ,
    rectangle: function () {
        ans.innerHTML += this.length * this.width + "<br>";
    }
    ,
    triangle: function () {
        return 1 / 2 * (this.base * this.height);
    }
    ,
    circle: function () {
        return Math.PI * this.radius * this.radius;
    }
}

const details = {
    length: 20,
    width: 30,
    base: 25,
    height: 40,
    radius: 28
}


let Circle = area.circle.bind(details);

ans.innerHTML += Circle() + "<br>";
area.rectangle();
setTimeout(area.rectangle , 5000);
ans.innerHTML += "<br>";
let Rectangle = area.rectangle.bind(area);
setTimeout(Rectangle , 5000);