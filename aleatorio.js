const nomes = ["Estefany", "Pablo", "Daniela", "Ademir", "Maria Helena", "Ratatui", "Bebe da mamãe"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
