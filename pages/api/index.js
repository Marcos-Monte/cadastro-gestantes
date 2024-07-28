import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res){
    if(req.method === 'GET'){

        try {

            const gestantes = await prisma.cadastro.findMany();
            
            res.status(200).json(gestantes);

        } catch(error) {
            // console.error('Erro ao recuperar dados:', error); // Adicionei log para depuração
            res.status(500).json({error: 'Erro ao recuperar dados'})
            
        }

    } else if (req.method === 'POST'){

        const novoRegistro = req.body;

        try {
            const novaGestante = await prisma.cadastro.create({
                data: {
                    nome: novoRegistro.nome,
                    data: new Date(novoRegistro.data),
                    endereco: novoRegistro.endereco,
                    telefone: novoRegistro.telefone, 
                    equipe: novoRegistro.equipe
                },
            });
            
            res.status(201).json(novaGestante)

        } catch(error){
            // console.error('Erro ao criar registro:', error); // Adicionei log para depuração
            res.status(500).json({error: 'Erro ao criar registro'})

        }
        
    } else {
        res.status(405).end(`Método ${req.method} Não Permitido`);
    }
}