let inp1 = parseFloat(document.getElementById('fvalue'));
let inp2 = parseFloat(document.getElementById('svalue'));
let answer = document.getElementById('ans');


function lessThan()
{
    if(inp1.value < inp2.value){
        answer.value = "True";
    }
    else{
        answer.value = "False"
    }
}

function lessThanOrEqualTo()
{
    if(inp1.value <= inp2.value){
        answer.value = "True";
    }
    else{
        answer.value = "False"
    }
}

function greaterThan()
{
    if(inp1.value > inp2.value){
        answer.value = "True";
    }
    else{
        answer.value = "False"
    }
}

function greaterThanOrEqualTo()
{
    if(inp1.value >= inp2.value){
        answer.value = "True";
    }
    else{
        answer.value = "False"
    }
}

function equalTo()
{
    if(inp1.value == inp2.value){
        answer.value = "True";
    }
    else{
        answer.value = "False"
    }
}

function strongEqualTo()
{
    if(inp1.value === inp2.value){
        answer.value = "True";
    }
    else{
        answer.value = "False"
    }
}

function notEqualTo()
{
    if(inp1.value != inp2.value){
        answer.value = "True";
    }
    else{
        answer.value = "False"
    }
}

function strickNotEqualTo()
{
    if(inp1.value !== inp2.value){
        answer.value = "True";
    }
    else{
        answer.value = "False"
    }
}
