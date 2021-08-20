document.getElementById('myButton').onclick = () => {
    
    var hisSize = document.getElementById('hisSize').value/100;
    var hisWeight = document.getElementById('hisWeight').value;
    var Imc = document.getElementById('result');

    if(hisSize && hisWeight != NaN){
        
        var Imc = document.getElementById('result').innerText = ("Votre IMC est : "+ Math.round(hisWeight/(hisSize*hisSize)));
        result.style.color = 'white';
        console.log(Imc);
    }
    else{
        var Imc = document.getElementById('result').innerText = ("Veuillez entrer toutes vos donnéess");
        result.style.color = 'red';
    }
};
