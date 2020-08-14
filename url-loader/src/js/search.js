async function search(id) {
    const respose = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const pokemon = await respose.json()
    return pokemon
}

export default search