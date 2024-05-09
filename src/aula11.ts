class Escola {
  public readonly nome: string;
  private readonly alunos: Aluno[];

  constructor(nome: string) {
    this.nome = nome;
    this.alunos = [];
  }

  public adiconarAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }
}

class Aluno {
  constructor(public readonly nome: string) {}
}

const escola = new Escola("Nova Escola");
const aluno1 = new Aluno("José");
const aluno2 = new Aluno("Maria");
const aluno3 = new Aluno("João");

escola.adiconarAluno(aluno1);
escola.adiconarAluno(aluno2);
escola.adiconarAluno(aluno3);
escola.adiconarAluno(new Aluno("Novo Aluno"));

console.log("Escola:", escola);
