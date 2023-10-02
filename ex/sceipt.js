function validerDateMatch(){
    let day = Date.parse(document.getElementById("dateMatch").value);

    let min = Date.parse("january 01, 2024");
    let max = Date.parse("december 31, 2024");

    if ((day<min) || (day>max)){
        alert ("date du match invalide");
    }  
    console.log("min:"+min);
    console.log("d:"+day);
    console.log("max:"+max);
}
document.addEventListener("click", myFunction);
function myFunction(){
    let nom = document.getElementById("nom").value;

    for (let x in nom){
        if ((!((nom[x]>='a' && nom[x]<='z') || (nom[x]>='A' && nom[x]<='z')))){
            document.getElementById("errnom").innerHTML = "Nom ne doit contenir que des lettres et doit avoir au moins 1 caractère.";
        }
    }
    validerDateMatch();
}
