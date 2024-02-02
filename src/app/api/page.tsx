"use client"
import { useEffect, useState } from 'react';

const MeuComponente = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('user.tsx');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{data.nome}</h1>
      <p>Idade: {data.idade}</p>
      <p>Cidade: {data.cidade}</p>
    </div>
  );
};

export default MeuComponente;