interface Pessoa {
  idade: number;
  nome: string;
  isMaiorIdade: boolean;
}

const pessoa: Pessoa = {
  idade: 23,
  nome: "Antônio",
  isMaiorIdade: true,
};

console.log(pessoa);
