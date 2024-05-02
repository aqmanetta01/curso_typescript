interface Pessoas {
  idade: number;
  nome: string;
}

interface Usuarios {
  pessoas: Pessoas[];
  cidade: string;
}

const usuarios: Usuarios = {
  cidade: "Campinas",
  pessoas: [
    {
      idade: 23,
      nome: "Antonio",
    },
    {
      idade: 23,
      nome: "Tonin",
    },
  ],
};

console.log(usuarios.pessoas.length);
console.log(usuarios);
