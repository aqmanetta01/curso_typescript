interface Andar {
  passos: number | null;
}

const andar: Andar = {
  passos: null,
};

const funcaoTeste2 = (): undefined | number => {
  if (andar.passos && andar.passos > 5) {
    return 543;
  }
  return undefined;
};

const x2 = funcaoTeste2();

if (!andar.passos) {
  console.log("É nulo!");
}

if (x2) {
  x2.toFixed();
}

console.log("Andar:", andar);
