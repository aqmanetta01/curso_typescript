interface Tenis {
  marcaTenis: MarcaTenis2;
}

enum MarcaTenis2 {
  NIKE = 4,
  DEF = "def",
  GHI = "ghi",
}

const tenis: Tenis = {
  marcaTenis: MarcaTenis2.NIKE,
};

if (tenis.marcaTenis === MarcaTenis2.NIKE) {
  console.log("É NIKE");
}
