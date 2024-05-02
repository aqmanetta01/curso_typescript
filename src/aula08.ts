interface Outro {
  endereco: string;
}

interface Carro {
  idade: number | string;
  nome: string;
}

interface Bicicleta {
  rodas: number;
}

const funcao = (validacao: boolean): Carro | Bicicleta | Outro => {
  if (validacao) {
    return {
      idade: 32,
      nome: "gol",
    };
  }
  return {
    endereco: "Endereço do outro",
  };
};

const resultado = funcao(false);

if ("endereco" in resultado) {
  console.log("Passou aqui");
}

if ("idade" in resultado) {
  if (typeof resultado.idade === "string") {
    console.log(resultado.idade.length);
  } else {
    console.log(resultado.nome);
  }
}

if ("rodas" in resultado) {
  console.log(resultado.rodas);
}
