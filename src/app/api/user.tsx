const handler = (req, res) => {
  const data = {
    nome: 'John Doe',
    idade: 30,
    cidade: 'Exemplo City'
  };

  return JSON.stringify(data)
};

export default handler;