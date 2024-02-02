export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: number; nome: string; email: string; }): void; new(): any; }; }; }) {
  // Simulando dados de um usuário
  const user = {
    id: 1,
    nome: "John Doe",
    email: "john.doe@example.com",
  };

  // Enviando a resposta JSON
  res.status(200).json(user);
}