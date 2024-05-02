interface Estado {
  nome: string;
  sigla: string;
}

interface Cidade {
  nome: string;
  estado: Estado;
}

interface Endereco {
  rua: string;
  bairro: string;
  cidade: Cidade;
  complemento?: string;
}

const enderecos: Endereco[] = [
  {
    bairro: "Cidade Universitária",
    rua: "rua da universidade",
    cidade: {
      nome: "Campinas",
      estado: {
        nome: "São Paulo",
        sigla: "SP",
      },
    },
  },
  {
    bairro: "Cidade Universitária",
    rua: "rua da universidade",
    complemento: "apt401",
    cidade: {
      nome: "Campinas",
      estado: {
        nome: "São Paulo",
        sigla: "SP",
      },
    },
  },
];

console.log(enderecos);

console.log(enderecos[0].complemento?.substring(3) || "N/A");

console.log(enderecos[1].complemento?.substring(3) || "N/A");

console.log(enderecos[0]);
