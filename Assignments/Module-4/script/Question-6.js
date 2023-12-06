function addNewElement() {

    var newParagraph = document.createElement('p');
    newParagraph.textContent = 'Newly Added Content';
    var container = document.getElementById('container');
    container.appendChild(newParagraph);
}