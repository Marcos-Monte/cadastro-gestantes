// Função que importa Registro de Gestante na Lista
import Registro from "../componentes/Registro";

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export default function mostrarGestantes(listaGestantes, erro = 'Nenhuma Gestante Cadastrada'){

    // console.log('Tipo de listaGestantes:', typeof listaGestantes);
    // console.log('listaGestantes:', listaGestantes);

    if(!Array.isArray(listaGestantes)){
        return <p>Dados inválidos: Não é uma lista</p>
    }

    return (listaGestantes.length > 0 ?
    
        listaGestantes.map(

            (gestante, index) => (

                
                <Registro 
                    key={index}
                    nome={gestante.nome}
                    dn={formatDate(gestante.data)}
                    endereco={gestante.endereco}
                    telefone={gestante.telefone}
                    equipe={gestante.equipe}
                />

            )
        ) : <p>{erro}</p>
    )

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

export function handleSemFiltro(colecaoDados){
    return colecaoDados;
}


