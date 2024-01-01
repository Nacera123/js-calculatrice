let inputes= document.getElementById("ope")
let btnaddition=document.getElementById("plus")
let afR = document.getElementById("afR")
let btnnmultiplication= document.getElementById("fois")
let btnDivision= document.getElementById("sur")
let btnsoustraction= document.getElementById("moins")
// ici recupération du lieu ou s'effectuera la création de nos éléments
let nwdiv = document.getElementById('Jf')

const memoire = {
    Addition :{
        "operation":[],
        "resultat":[]
    },
    multiplication:{
        "operation":[],
        "resultat":[]
    },
    Division:{
        "operation":[],
         "resultat":[]
    },Soustraction:{
        "operation":[],
       "resultat":[]
    }
        
    
}
// a l'interieur de consolelog on met notre chemin pour arriver a l'objet qu'on veut afficher
console.log(memoire);
console.log(memoire.Addition.operation);
console.log(memoire.Addition.resultat);

// la fonction vide qui sert à vider l'input ou se trouvent les nombres
vide =()=>{
    let a = document.getElementById("ope")
    
   //var input2 = document.getElementById("prc");
   //input2.reset();
   
   
   
   // --- Recharge la page --------------
     a.value=''                             
        if(document.getElementById("afR")!=null){
            console.log("afR existe")
            let t =document.getElementById("afR")
            t.remove()
            console.log(document.getElementById("afR"));
            }
        else{
            console.log("il n'existe pas")
        }
}
   
// --------------------- Fin du Clear ------------------------------------------------

let emplacement= document.getElementById("emplacement")
let emplacement1= document.getElementById("emplacement1")
memo=()=>{

    //création de td resultat
    let tr1= document.createElement("tr")
        let th= document.createElement("th")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td")

    // td1.innerHTML=memoire.Addition.operation;

    td1.innerHTML=memoire.Addition.resultat;

    //création de td operation

    tr1.appendChild(td1)
    // tr1.appendChild(td2)
    emplacement.appendChild(tr1)

    let tr2= document.createElement("tr1")
        let th1= document.createElement("th")
        let td11 = document.createElement("td")
        let td21 = document.createElement("td")


    // td11.innerHTML=memoire.Addition.operation;
    // td21.innerHTML=memoire.Addition.resultat;
    td11.innerHTML=memoire.Addition.operation;


    tr1.appendChild(td11)
    tr1.appendChild(td21)
    emplacement1.appendChild(tr2)

    emplacement1.innerHTML=memoire.Addition.operation
    emplacement.innerHTML=memoire.Addition.resultat
}


recuperation=(a)=>{
    d=document.getElementById("ope");
    c=document.getElementById("nbr"+a).value;

    // on a fait (.value) car on affiche sur un Input et pas dans 
    //un paragraphe sinon on aurait fait Inerhtml

    if(d.value != ""){
       console.log(d.value);

        let h=d.value+c;            
        //attention!!!! h=d.value   ne permet de concatener que deux chiffres :: pour ecrire une suite de chiffre il faut d.value=h
        // pour les avoir de type chiffre on parseInt le h

        d.value=h;

        console.log(h);
          //type of est fait pour voir afficher le type de notre var(number ou string)
        console.log(typeof(h));

        if (inputes.value.split("+").length-1){

            console.log("j'ai un +")
            btnaddition.disabled=false
        }else if (inputes.value.split("-").length-1){

            console.log("j'ai un -")
            btnsoustraction.disabled=false
        }else if (inputes.value.split("x").length-1){

            console.log("j'ai un x")
            btnnmultiplication.disabled=false
        }else if (inputes.value.split("/").length-1){
            
            console.log("j'ai un /")
            btnDivision.disabled=false
        }

      
    }else{
        d.value=c
            
    }console.log(c)
    


}
  




egal=()=>{

    let resultat= inputes.value;
    console.log(" le resultat est "+ resultat);


    let reponses ; 
    let min

    //création d'une div  commune avec javascript
    var div = document.createElement("div");

    var attribut_class  = document.createAttribute("class"); 

    attribut_class.value = "alert alert-success"; 

    var attribut_id = document.createAttribute("id"); 

    attribut_id.value="afR"

    div.setAttributeNode(attribut_id);
    div.setAttributeNode(attribut_class);

    //definir la valeur sortante et lui attribuer l'Id de la nouvelle div html ligne 17 

    document.getElementById('Jf').appendChild(div);
    

    if(resultat.split("+").length-1){
   
    
        let sauveur = resultat.split("+");
        let reponses = 0 ; 
        let min= 0;
        for (i=0; i<sauveur.length ; i++){

            sauveur[i] = parseInt(sauveur[i] );

            reponses = reponses + sauveur[i]
            console.log(reponses)
            min=reponses
        }
                 
        // y afficher le resultat

        document.getElementById("afR").innerHTML=min
        document.getElementById("afR").innerHTML=reponses

        $("#afR").click(function(){
        $("#afR").hide()
        })
   
        memoire.Addition.operation.push(resultat);
        memoire.Addition.resultat.push(min)

   
        console.log(memoire.Addition.operation)
        console.log(memoire.Addition.resultat)

    }else  if(resultat.split("x").length-1){

        
        let sauveur = resultat.split("x");
        let reponses = 1; 
        let min= 1;
        for (i=0; i<sauveur.length ; i++){

            sauveur[i] = parseInt(sauveur[i] );

            reponses = reponses * sauveur[i]
            console.log(reponses)
            min=reponses
        }
  
           
        // y afficher le resultat

        document.getElementById("afR").innerHTML=reponses
        document.getElementById("afR").innerHTML=min
        $("#afR").click(function(){
        $("#afR").hide()
         })


    
    } else if(resultat.split("/").length-1){

        let sauveur = resultat.split("/");
        let reponses = 1; 
        let min= 1;
        for (i=0; i<sauveur.length ; i++){

            sauveur[i] = parseInt(sauveur[i] );
            if(i<2){
                reponses = (1/reponses) / sauveur[i]
                // reponses = 1/(reponses * sauveur[i])
            
                console.log(reponses)
                min=reponses
            }else{
                reponses = reponses / sauveur[i]
                console.log(reponses);
                min=reponses
            }
        }

           
        // y afficher le resultat

        // document.getElementById("afR").innerHTML=reponses
        document.getElementById("afR").innerHTML=min
        //$ correspond a l'objet de JQUERY : "librairie JS" : $=document, entre ("# ou .") a pour but de cibler un element 
        $("#afR").click(function(){
        $("#afR").hide()
         })



    }else if(resultat.split("-").length-1){

        let sauveur = resultat.split("-");
        let reponses =0 ; 
        let min = 0;
        let i;
        for (i=0 ; i<sauveur.length ; i++){
            sauveur[i] = parseInt(sauveur[i] );
            
            if (i<2){
               
                // reponses = sauveur[i-1]- sauveur[i]

                reponses = -reponses - sauveur[i]
            
                console.log(reponses)
                min=reponses}          
            else {
                             
                reponses=reponses -sauveur[i]
                
                console.log(reponses)
                min=reponses
            }
        }
        
        // y afficher le resultat

        document.getElementById("afR").innerHTML=min
        $("#afR").click(function(){
        $("#afR").hide()
         })

    }


}
         
Addition=()=>{

    

    if (inputes.value != ""){
        console.log("je ne suis pas vide");
        j=inputes.value + "+";
        inputes.value=j;

        console.log(parseInt(inputes.value));

        if(inputes.value.split("+").length-1){
           
            console.log(btnaddition);
            btnaddition.disabled=true;
            // let transformation = parseInt(inputes.value)
        }
    }else{"je suis vide"}

  
}


multiplication=()=>{

    

    if (inputes.value != ""){
        console.log("je ne suis pas vide");
        j=inputes.value + "x";
        inputes.value=j;

        console.log(parseInt(inputes.value));

        if(inputes.value.split("x").length-1){
           
            console.log(btnnmultiplication);
            btnnmultiplication.disabled=true;
            // let transformation = parseInt(inputes.value)
        }
    }else{"je suis vide"}

  
}

Division=()=>{

    

    if (inputes.value != ""){
        console.log("je ne suis pas vide");
        j=inputes.value + "/";
        inputes.value=j;

        console.log(parseInt(inputes.value));

        if(inputes.value.split("/").length-1){
           
            console.log(btnDivision);
            btnDivision.disabled=true;
            // let transformation = parseInt(inputes.value)
        }
    }else{"je suis vide"}

  
}

Soustraction=()=>{
    if (inputes.value != ""){
        console.log("je ne suis pas vide");
        j=inputes.value + "-";
        inputes.value=j;

        console.log(parseInt(inputes.value));

        if(inputes.value.split("-").length-1){
           
            console.log(btnsoustraction);
            btnsoustraction.disabled=true;
            // let transformation = parseInt(inputes.value)  
        }
    }else{"je suis vide"}
}








































// jir solution pour une soustraction multiple 

// // ---- Soustraction ----------
// else if (resultat.split("-").length-1){
//         let Ssauveur = resultat.split("-");
//         let Sreponses = 0
//         console.log(Sreponses);
//         console.log ("Ssauveur  : " + Ssauveur);
//         let min = 0
//         Sreponse1 = 0

  
//       //------------------------------------------------
//       var i = 0;
//       var a = Ssauveur[i];
//       var b = Ssauveur[i+1];
//       Sreponses = a - b;

//       console.log(Sreponses);

//       // --- si plus de 2 arguments ----------------------------------------------------

//       if (Ssauveur.length > 2){

//       for (i=2; i<Ssauveur.length ; i++)  {    // répéter a chaque fois qu'il y aura un -
 
//         Sreponses = Sreponses - Ssauveur[i];; //test

//         console.log(typeof(Ssauveur))
//         console.log(Sreponses)
//         min = Sreponses
//         } }

//       //----  Fin plus de 2 arguments --------------------------------------------
//             document.getElementById("afR").innerHTML= Sreponses
//         }
//       //--- Fin Soustraction -------
