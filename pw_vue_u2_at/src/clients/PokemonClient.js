import axios from "axios";

const consumirApi = async () => {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.data);
    console.log(response);
    return response;
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerVectorNumerico = () => {
    const vector = [];
    for (let i = 0; i < 4; i++) {
        vector.push(obtenerAleatorio(1, 600));
    }
    return vector;
}

const obtenerVectorPokemon = (obtenerVectorNumerico) => {
    const data1 = consumirApi(obtenerVectorNumerico[0]);
    const data2 = consumirApi(obtenerVectorNumerico[1]);
    const data3 = consumirApi(obtenerVectorNumerico[2]);
    const data4 = consumirApi(obtenerVectorNumerico[3]);

    const obj1 = {
        nombre: data1.name,
        id: data1.id,
    }

    const obj2 = {
        nombre: data2.name,
        id: data2.id,
    }
    const obj3 = {
        nombre: data3.name,
        id: data3.id,
    }
    const obj4 = {
        nombre: data4.name,
        id: data4.id,
    }


}


export async function consumirApiFacade(id) {
    return await consumirApi(id);
}