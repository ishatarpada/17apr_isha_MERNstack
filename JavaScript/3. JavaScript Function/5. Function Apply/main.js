let ans = document.getElementById("demo");

const area = {
    square : function(){
        return this.length * 4;
    }
    ,
    rectangle : function(){
        return this.length * this.width;
    }
    ,
    triangle : function(){
        return 1/2 * (this.base * this.height );
    }
    ,
    circle : function(){
        return Math.PI * this.radius * this.radius ;
    }
}

const details = {
    length : 10 ,
    width : 20 ,
    base : 15 ,
    height : 30 ,
    radius : 21
}

ans.innerHTML += "area of square &#10170; " + area.square.apply(details) + "<br>";
ans.innerHTML += "area of rectangle &#10170; " + area.rectangle.apply(details) + "<br>";
ans.innerHTML += "area of triangle &#10170; " + area.triangle.apply(details) + "<br>";
ans.innerHTML += "area of circle &#10170; " + area.circle.apply(details) + "<br>";

ans.innerHTML += "Math.max(1, 54 , 6) &#10170;" + Math.max(1, 54 , 6) + "<br>";
ans.innerHTML += "Math.max.apply(null , [1, 54 , 6]) &#10170;" + Math.max.apply(null , [1, 54 , 6]) + "<br>";
ans.innerHTML += "Math.max.apply( ' ' , [1, 54 , 6]) &#10170;" + Math.max.apply( "" , [1, 54 , 6]) + "<br>";
ans.innerHTML += "Math.max.apply(Math , [1, 54 , 6]) &#10170;" + Math.max.apply(Math , [1, 54 , 6]) + "<br>";
ans.innerHTML += "Math.min(1, 54 , 6) &#10170;" + Math.min(1, 54 , 6) + "<br>";