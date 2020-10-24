function buttonclick(val){

    
    document.getElementById("displayser").value=document.getElementById("displayser").value+val;
    
}

function clearDisplay()
{
    document.getElementById("displayser").value=""
}

function equalClick(){
    var text=document.getElementById("displayser").value
    var result=eval(text)
    document.getElementById('displayser').value=result
}