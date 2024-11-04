import obtenerTodosLosPokemones from "./src/api/get-pokemons"


let app = document.querySelector("#app")

document.addEventListener("DOMContentLoaded",obtenerTodosLosPokemones())