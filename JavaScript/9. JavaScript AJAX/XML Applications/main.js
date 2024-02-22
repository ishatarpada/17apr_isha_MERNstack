// Display XML Data in an HTML Table

function loadXMLDoc() {
    const xhttp1 = new XMLHttpRequest();
    xhttp1.onload = function () {
        const xmlDoc = xhttp1.responseXML;
        const cd = xmlDoc.getElementsByTagName("CD");
        myFunction(cd);
    }
    xhttp1.open("GET", "cd_catalog.xml");
    xhttp1.send();
}

function myFunction(cd) {
    let table = "<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i < cd.length; i++) {
        table += "<tr><td>" +
            cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}


// Display the First CD in an HTML div Element
const xhttp2 = new XMLHttpRequest();
xhttp2.onload = function () {
    const xmlDoc = xhttp2.responseXML;
    const cd = xmlDoc.getElementsByTagName("CD");
    myFunction2(cd, 0);
}
xhttp2.open("GET", "cd_catalog.xml");
xhttp2.send();

function myFunction2(cd, i) {
    document.getElementsByClassName("showCD")[0].innerHTML =
        "Artist: " +
        cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "<br>Title: " +
        cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "<br>Year: " +
        cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

// Navigate Between the CDs
let i = 0;
let len;
let cd;

const xhttp3 = new XMLHttpRequest();
xhttp3.onload = function () {
    const xmlDoc = xhttp3.responseXML;
    cd = xmlDoc.getElementsByTagName("CD");
    len = cd.length;
    displayCD(i);
}
xhttp3.open("GET", "cd_catalog.xml");
xhttp3.send();

function displayCD(i) {
    document.getElementsByClassName("showCD")[0].innerHTML =
        "Artist: " +
        cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "<br>Title: " +
        cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "<br>Year: " +
        cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

function next() {
    if (i < len - 1) {
        i++;
        displayCD(i);
    }
}

function previous() {
    if (i > 0) {
        i--;
        displayCD(i);
    }
}


// Show Album Information When Clicking On a CD
const xhttp4 = new XMLHttpRequest();
let cd_1;
xhttp4.onload = function () {
    const xmlDoc = xhttp4.responseXML;
    cd_1 = xmlDoc.getElementsByTagName("CD");
    loadCD();
}
xhttp4.open("GET", "cd_catalog.xml");
xhttp4.send();

function loadCD() {
    let table = "<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i < cd_1.length; i++) {
        table += "<tr onclick='displayCD(" + i + ")'><td>";
        table += cd_1[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
        table += "</td><td>";
        table += cd_1[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
        table += "</td></tr>";
    }
    document.getElementById("demo1").innerHTML = table;
}

function displayCD(i) {
    document.getElementById("displayCD").innerHTML =
        "Artist: " +
        cd_1[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "<br>Title: " +
        cd_1[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "<br>Year: " +
        cd_1[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}