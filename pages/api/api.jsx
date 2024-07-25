const dados =[
    {
        nome: 'Michelle Regina de Souza',
        dn: '1984-04-15',
        endereco: 'Rua Um',
        telefone: '13997069071',
        equipe: 'verde'

    }
];

export default function api(req, res){
    if(req.method === 'GET'){
        res.status(200).json(dados)
    } else if (req.method === 'POST'){
        const novoRegistro = req.body;
        dados.push(novoRegistro);
        res.status(201).json(novoRegistro)
    } else {
        res.status(405).end(`Método ${req.method} Não Permitido`);
    }
}