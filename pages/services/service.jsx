// Formata data de nascimento (usando o fuso horário local)
export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
}

// Filtra uma coleção de dados baseado em uma informação
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

// Filtra a entrada e permite apenas letras e espaços. Atualiza o estado 'nome'
export const handleNomeChange = (e) => {
    const value = e.target.value;
    // console.log("Input Value: ", value); // Verificar o valor do input
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, ""); // Remove caracteres não permitidos
    // setNome(filteredValue);
    return filteredValue
    // console.log("Nome State: ", name); // Verificar o estado
};

  // Remove catacteres não numéricos e formata o valor de entrada
export const handleWhatsChange = (e) => {
    const value = e.target.value;
    // Remover todos os caracteres não numéricos
    const onlyNums = value.replace(/[^\d]/g, "");

    // Aplicar a máscara se tiver até 11 dígitos
    if (onlyNums.length <= 11) {
      const formattedValue = onlyNums.replace(
        /^(\d{2})(\d{5})(\d{4})$/,
        "($1) $2-$3"
      );
    //   setTelefone(formattedValue);
    return formattedValue
    }
    // Se tiver mais de 11 dígitos, não atualiza o estado (ignora entrada adicional)
};





