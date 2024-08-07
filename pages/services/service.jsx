export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
}

export function handleFiltro(colecaoDados, equipe){
    if(colecaoDados.length > 0){
        const filtrados = colecaoDados.filter(
            (gestante) => gestante.equipe.toLowerCase() === equipe.toLowerCase()
        )
        
        return filtrados;
        
    } else {
        return colecaoDados;
        
    }
    
}



