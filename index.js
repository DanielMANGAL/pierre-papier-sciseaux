const tonChoix = document.getElementById("tonChoix")
const computerChoix= document.getElementById("computerChoix")
const sciseaux= document.getElementById("sciseaux")
const image= document.querySelectorAll(".image")
const conclusion= document.getElementById("conclusion")
const imageArray= ['<img src="pierre.jpg" width="60" height="60">','<img src="sciseaux.jpg" width="60" height="60">','<img src="papier.jpg" width="60" height="60">']
const test= document.getElementById("test")
const score= document.getElementById("score")
const score2= document.getElementById("score2")
const name= document.getElementById("name")
let imageTaille = 20
let a;
let L=""
let n=0
let nbQuestions=1
let i=0
let userChoice;
let computerChoice;
let timeout;
let timeout2;
let allowplay= true


image.forEach(image=>{
    image.addEventListener('click',()=>{
        console.log("au début "+ allowplay )
        if (allowplay==true){
        if(nbQuestions < 5){
         
        userChoice=image.getAttribute("id")
        tonChoixImage()
        computerChoose()
        resultat()
        compteur()
        scoreAttente()
        timeout=setTimeout(newround,3000)
        allowplay= false
      }
         
    
        else if(nbQuestions ==5){
            userChoice=image.getAttribute("id")
            allowplay=false
        tonChoixImage()
        computerChoose()
        resultat()
        compteur()
        timeout2= setTimeout(displayScore,4000)
        document.getElementById("pierre").innerHTML='<img src="end.jpg"  width="30" height="30">'
        document.getElementById("papier").innerHTML='<img src="end.jpg"  width="30" height="30">'
        document.getElementById("sciseaux").innerHTML='<img src="end.jpg" width="30" height="30">'




        }
      
    }
    })})

    function scoreAttente(){
        
        document.getElementById("pierre").innerHTML='<img src="results.webp"  width="30" height="30">'
        document.getElementById("papier").innerHTML='<img src="results.webp"  width="30" height="30">'
        document.getElementById("sciseaux").innerHTML='<img src="results.webp"  width="30" height="30">'
        
    }
    function stop(){
       
        clear(setTimeout(newround,2000))}

function newround(){
    nbQuestions++
    score2.innerHTML="Questions numéro: "+ nbQuestions
    tonChoix.innerHTML='<img src="question.jpg" width="30" height="30">'
    computerChoix.innerHTML='<img src="computer2.webp" width="30" height="30">'
    conclusion.textContent=" "
    allowplay=true
   
    document.getElementById("pierre").innerHTML='<img src="pierre.jpg"  width="30" height="30">'
        document.getElementById("papier").innerHTML='<img src="papier.jpg"  width="30" height="30">'
        document.getElementById("sciseaux").innerHTML='<img src="sciseaux.jpg"  width="30" height="30">'


}

function compteur(){    

    L+= "MANCHE"+nbQuestions+"  YOU:"+userChoice+" "+"  COMPUTER:"+computerChoice +"  Resultat: "+ a+ "</br>" 
    if(conclusion.textContent==="GAGNE !!"){
        i++
    }
    
    score.innerHTML="Votre score:"+i+"/"+ 5
    
    if(nbQuestions> 2){
        image.forEach(image=>{
            image.removeEventListener("mouseover",()=>{
                userChoice=image.getAttribute("id")
                tonChoixImage()
                computerChoose()
                resultat()
                compteur()
                
            })
            
        })

}
}


function tonChoixImage(){
    if(userChoice=="sciseaux"){
        tonChoix.innerHTML=imageArray[1]
    }
    else if(userChoice=="pierre"){
        tonChoix.innerHTML=imageArray[0]
    }
    else if(userChoice=="papier"){
        tonChoix.innerHTML=imageArray[2]
    }
}

function resultat2(){

}

function randomNumber(){
    return Math.floor(Math.random()*3)
}


function computerChoose(){
    
    n=randomNumber()
    computerChoix.innerHTML=imageArray[n]
    if (n==0){
        computerChoice="pierre"
    }
    if (n==1){
        computerChoice="sciseaux"
    }
    if (n==2){
        computerChoice="papier"
    }
    
    
    
}





function resultat(){
 
  if( userChoice== computerChoice){
    conclusion.textContent="EGALITE !!!"
    a="EGALITE !!!"
  }
  else if (userChoice==="pierre" && computerChoice==="sciseaux"){
    conclusion.textContent="GAGNE !!"
    a="GAGNE !!"

  }
  else if (userChoice=="pierre" && computerChoice=="papier"){
    conclusion.textContent="Perdu, désolé"
    a="Perdu, désolé"
  }
  else if (userChoice=="sciseaux" && computerChoice=="pierre"){
    conclusion.textContent=" Perdu! Désolé! "
    a=" Perdu! Désolé! "
  }
  else if (userChoice=="sciseaux" && computerChoice=="papier"){
    conclusion.textContent="GAGNE !!"
    a="GAGNE !!"
  }
  else if (userChoice=="papier" && computerChoice=="pierre"){
    conclusion.textContent="GAGNE !!"
    a="GAGNE !!"
  }
  else if (userChoice=="papier" && computerChoice=="sciseaux"){
    conclusion.textContent="perdu, désolé! "
    a="perdu, désolé! "
  }
}
function commencer(){
    document.getElementById("jeu").style.display="block"
    document.getElementById("entree").style.display="none"
reinitialize()

}
function quitter(){
    document.getElementById("jeu").style.display="none"
    document.getElementById("entree").style.display="block"
    document.getElementById("quittee").style.display="none"
    document.getElementById("endScore").style.display="none"
    document.getElementById("historique").innerHTML=" "
    document.getElementById("identity").style.display="block"
    reinitialize()
}

function reinitialize(){
    allowplay=true 
    i=0
    nbQuestions= 1
    computerChoix.innerHTML='<img src="computer2.webp" width="60" height="60"' 
    conclusion.textContent=" "
    tonChoix.innerHTML='<img src="question.jpg" width="60" height="60">'
   
    score2.innerHTML="Questions numéro: "+ nbQuestions
    L=" "
    document.getElementById("pierre").innerHTML='<img src="pierre.jpg" width="30" height="30">'
    document.getElementById("papier").innerHTML='<img src="papier.jpg"  width="30" height="30">'
    document.getElementById("sciseaux").innerHTML='<img src="sciseaux.jpg"  width="30" height="30">'
    document.getElementById("historique").textContent=" "
    score.innerHTML=" "
    document.getElementById("endScore")=" "

}

function displayScore(){
    document.getElementById("jeu").style.display="none"
    document.getElementById("entree").style.display="block"
    document.getElementById("endScore").innerHTML="Bravo  "+ name.value+"!!!! </br> votre score est: "+i+"/"+ 5
    nbQuestions=0
    i=0
    document.getElementById("endScore").style.display="block"
    document.getElementById("identity").style.display="none"
    document.getElementById("historique").innerHTML=L
}
