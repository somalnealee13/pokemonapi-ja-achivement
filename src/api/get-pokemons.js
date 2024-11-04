
const obtenerTodosLosPokemones = async () => {

    try {
        const respuestaDelServidor = await fetch("https://pokeapi.co/api/v2/pokemon")

        let InformacionDeLosPokemones = await respuestaDelServidor.json()
        console.log(InformacionDeLosPokemones);

        let { results } = InformacionDeLosPokemones
        console.log(results);

        let app = document.getElementById("app")

        for (let item of results) {

            let nombre = await item.name
            let url = item.url
            console.log(nombre)
            
            const respuestaDelServidor = await fetch(url)
            let informacionCompleta = await respuestaDelServidor.json()
            console.log(informacionCompleta)

            let { sprites } = informacionCompleta
            let { front_default } = sprites

let{other} = await sprites
console.log(other);
let {showdown} = await other
console.log(showdown);

let {front_default: front} = await showdown
console.log(front);

            let imagen = front_default
let contenedorDePokemones = document.createElement("section")
            app.innerHTML = app.innerHTML +  `
                <p> ${nombre} </p>
                <img src="${front}" />
            `
        }
    } catch (error) {
        console.error(error);
    }
}

export default obtenerTodosLosPokemones