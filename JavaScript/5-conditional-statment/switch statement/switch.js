
function price() {
    let expr = document.getElementById("fruit").value;
    switch (expr) {
        case "Oranges":
            document.writeln("Oranges are $0.59 a pound.");
            break;
        case "Apples":
            document.writeln("Apples are $0.32 a pound.");
            break;
        case "Bananas":
            document.writeln("Bananas are $0.48 a pound.");
            break;
        case "Cherries":
            document.writeln("Cherries are $3.00 a pound.");
            break;
        case "Mangoes":
            document.write("mangos are $3.00 a pound.");
            break;
        case "Papayas":
            document.writeln("Papayas are $2.79 a pound.");
            break;
        default:
            document.writeln(`Sorry, we are out of ${expr}.`);
    }

    document.write("Is there anything else you'd like?");
}