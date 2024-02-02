const user = {
  nome: 'John Doe',
  idade: 30,
  cidade: 'Exemplo City'
};

export default function User() {
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}