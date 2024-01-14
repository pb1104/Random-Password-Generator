
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const spcl = [...'!@$%^&*~'];
function getit(){
    let pass = document.getElementById("i1").value;
    pass = '';
    let l = 0;
    while(l != 5 ){
        let num1 = Math.floor(Math.random()*25);
    let num2 = Math.floor(Math.random()*7);
        pass += spcl[num2];
        if(num1 % 2 == 0){
            pass += alphabet[num1].toUpperCase();
            num1++;
        }
        pass += alphabet[num1];
        l++;
        num1++;
        num2++;
    }
    document.getElementById("i1").value = pass;
}
function cpy(){
    navigator.clipboard.writeText(document.getElementById("i1").value);
}