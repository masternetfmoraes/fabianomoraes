export default function handler(req, res) {
  // Simulando dados de um usuário
  const user = {
    id: 1,
    nome: "John Doe",
    email: "john.doe@example.com",
  };

  // Enviando a resposta JSON
  res.status(200).json(user);
}