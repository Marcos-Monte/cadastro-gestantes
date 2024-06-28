// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { toast } from 'react-toastify';

const submitFormulario = 'https://sheetdb.io/api/v1/pexqrnjxmcmxj';

const notifySuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const notifyError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

// export default async function handleSubmit(req, res) {
//   if (req.method === 'POST') {
//     const formData = req.body;

//     try {
//       const response = await fetch(req.url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         await response.json();
//         notifySuccess('Dados enviados com sucesso!');
//         res.status(200).json({ message: 'Dados enviados com sucesso!' });
//       } else {
//         throw new Error('Erro ao enviar dados');
//       }
//     } catch (error) {
//       notifyError(`Erro: ${error.message}`);
//       res.status(500).json({ message: `Erro: ${error.message}` });
//     }
//   } else {
//     res.status(405).json({ message: 'Método não permitido' });
//   }
// }





export default async function  handleSubmit  (event) {
  // Evita o comportamento padrão do formulário, que é recarregar a página
  event.preventDefault();

  // Obtém a referência do formulário a partir do evento
  const form = event.target;

  // Cria um objeto FormData com os dados do formulário
  const formData = new FormData(form);

  try {
    // Faz uma requisição HTTP POST para o URL especificado no atributo action do formulário
      const response = await fetch(form.action, {

      method: 'POST', // Define o método HTTP como POST
      body: formData, // Define o corpo da requisição com os dados do formulário

  });

    // Verifica se a resposta da requisição é bem-sucedida (status code 200-299)
  if (response.ok) {
      // Se a resposta for bem-sucedida, converte o resultado para JSON
      await response.json();
      // Exibe um alerta informando que os dados foram enviados com sucesso
      notifySuccess('Dados enviados com sucesso!');
      form.reset(); // Limpa o formulário após o envio bem-sucedido
  } else {
      // Se a resposta não for bem-sucedida, lança um erro
      throw new Error('Erro ao enviar dados');
  }
  } catch (error) {
    // Captura qualquer erro ocorrido durante a requisição e exibe um alerta com a mensagem de erro
      notifyError(`Erro: ${error.message}`);
  }
  form.reset(); // Limpa o formulário após o envio bem-sucedido
};
