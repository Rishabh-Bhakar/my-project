// console.log("hello world");
const form=document.getElementById("pokemonForm")
form.addEventListener("submit",function(event) {
    event.preventDefault();

const pokemon=document.getElementById("pokemonInput").value
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
 .then(response=>{
if(!response.ok)
{
    throw new Error("Pokemon not found")
}
return response.json()
})

.then(data=>{
    document.getElementById("pokemonName").innerHTML=data.name;
    document.getElementById("pokemonImage").src=data.sprites.front_default;
    document.getElementById("pokemonError").innerHTML="";

})

.catch(error=>{
        document.getElementById("pokemonName").innerHTML="";
    document.getElementById("pokemonImage").src="";

    document.getElementById("pokemonError").innerHTML="Pokemon not found";
    console.log(error)
})

})
