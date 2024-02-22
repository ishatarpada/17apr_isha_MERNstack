let ans = document.getElementById("demo");

// create a object
const person = {
    firstName: "John",
    lastName : "Doe",
    language : "English"
  };

// change the property value
Object.defineProperty(person , "language" , {value : "Hindi"});

ans.innerHTML += "person.language &#10170; " + person.language + "<br>";

// add the property
Object.defineProperty(person , "year" , {values : 2005});

// changing the meta data 
Object.defineProperty(person , "lastName" , {writable : false});
Object.defineProperty(person , "lastName" , {value : "poe"});
ans.innerHTML += "person.lastName &#10170; " + person.lastName + "<br>";

// accessing property
ans.innerHTML += Object.getOwnPropertyDescriptor(person , "firstName") + "<br>";
ans.innerHTML += Object.getOwnPropertyNames(person) + "<br>";

// accessing the prototype
ans.innerHTML += Object.getPrototypeOf(person) + "<br>";

// Returns enumerable properties as an array
ans.innerHTML += Object.keys(person) + "<br>";
ans.innerHTML += Object.values(person) + "<br>";

Object.defineProperty(person , "fullName" , {
    get : function(){
        return this.firstName + " " + this.lastName ;
    }
})
ans.innerHTML += "full name is &#10170; " + person.fullName + "<br><br>";

const obj = {
    counter : 0
};

Object.defineProperty(obj , "reset" , {
    get : function(){
        this.counter = 0;
    }
 });

 Object.defineProperty(obj , "increment" , {
    get : function(){
        this.counter++;
    }
 });

Object.defineProperty(obj , "decrement" , {
    get : function(){
        this.counter--;
    }
});

Object.defineProperty(obj , "add" , {
    set : function(value){
        this.counter += value;
    }
});

Object.defineProperty(obj , "subtract" , {
    set : function(value){
        this.counter -= value;
    }
});

obj.add = 5 ; //5
obj.subtract = 3; //2
obj.reset; //0
obj.increment; //1
obj.decrement; //0

ans.innerHTML += obj.counter;

ans.innerHTML += "<br>" + Object.preventExtensions(person)
ans.innerHTML += "<br>" + Object.isExtensible(person)
ans.innerHTML += "<br>" + Object.seal(person)
ans.innerHTML += "<br>" + Object.isSealed(person)
ans.innerHTML += "<br>" + Object.freeze(person)
ans.innerHTML += "<br>" + Object.isFrozen(person)