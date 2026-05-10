// console.log("hello world");
const form=document.getElementById("pokemonForm")

function pokemonFinder(pokemon){
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
 .then(response=>{
if(!response.ok)
{
    throw new Error("Pokemon not found")
}
return response.json()
})

.then(data=>{
    // console.log(data.id)
    document.getElementById("pokemonName").innerHTML=data.name;
    document.getElementById("pokemonImage").src=data.sprites.front_default;
    document.getElementById("pokemonType").innerHTML=`Type: ${data.types[0].type.name}`;
    document.getElementById("pokemonError").innerHTML="";

})

.catch(error=>{
        document.getElementById("pokemonName").innerHTML="";
    document.getElementById("pokemonImage").src="";
    document.getElementById("pokemonType").innerHTML=""

    document.getElementById("pokemonError").innerHTML="Pokemon not found";
    console.log(error)
})
}

form.addEventListener("submit",function(event) {
    event.preventDefault();

const pokemon=document.getElementById("pokemonInput").value;
pokemonFinder(pokemon)
})
const randomBtn=document.getElementById("randomButton")

randomBtn.addEventListener("click",function(){
   
const randomId=Math.floor(Math.random()*500)+1;
console.log(randomId)
pokemonFinder(randomId);
})
const dark=document.getElementById("darkMode")
dark.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        dark.innerHTML="Light Mode";
    }
    else{
        dark.innerHTML="Dark Mode";
    }
})
