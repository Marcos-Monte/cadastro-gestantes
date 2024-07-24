// Função que importa Registro de Gestante na Lista
import Registro from "../componentes/Registro";

export default function mostrarGestantes(listaGestantes, erro){

    console.log('Tipo de listaGestantes:', typeof listaGestantes);
    console.log('listaGestantes:', listaGestantes);

    if(!Array.isArray(listaGestantes)){
        return <p>Dados inválidos: Não é uma lista</p>
    }

    return (listaGestantes.length > 0 ?
    
        listaGestantes.map(

            (gestante, index) => (
                
                <Registro 
                    key={index}
                    nome={gestante.nome}
                    dn={gestante.dn}
                    endereco={gestante.endereco}
                    telefone={gestante.telefone}
                    equipe={gestante.equipe}
                />

            )
        ) : <p>{erro}</p>
    )

}


