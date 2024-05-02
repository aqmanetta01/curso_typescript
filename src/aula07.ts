const funcaoCallback = (valor: number): void => {
  console.log("Deu certo: " + valor + "\n");
};

const funcaTeste2 = (valor1: number, valor2: number, callback: (valor: number) => void): string => {
  if (valor1 > valor2) {
    callback(valor1);
  }
  return "\n";
};

funcaTeste2(54, 32, funcaoCallback);

funcaTeste2(23, 32, funcaoCallback);

funcaTeste2(54, 32, (x: number) => {
  console.log("Outra função" + x);
});

funcaTeste2(24, 32, (x: number) => {
  console.log("Outra função" + x);
});
