const ususario = { nome: 'jhonny', idade: 36, class: 'adulto'}
const mensagem = 'bem vindo criança';
const mensagem1 = 'bem vindo jovem';
const mensagem2 = 'bem vindo adulto';
const mensagem3 = 'bem vindo idoso';

if (ususario.class === 'criança'){
  console.log(mensagem);
  
}else if (ususario.class === 'jovem') {
  
console.log(mensagem1);
}else if (ususario.class === 'adulto'){
  console.log(mensagem2);
} else{
  console.log(mensagem3);
  
}
  
const mensagemE = 'clique naquele que é de sua classificação';
const mensagemfinal = 'aproveite sua sessão';

console.log(mensagemE);
console.log(mensagemfinal);


//Exercício 1: Cálculo de Média de Notas

let aluno = [ 'luis', 10, 7, 5];

if ((aluno[1]+aluno[2]+aluno[3])/3 >= 6) {
  console.log('parabens vc passou');
  
  
} else {
  console.log('vc está de recuperação');
  
}

//Exercício 2: Cadastro de Aluno no Sistema

let idadealuno = 16;

if (idadealuno => 16) {
  console.log('vc pode se inscrever no dev da mooca');
  
  
} else {
  console.log('vc não consegue inscrever no dev da mooca');
  
}

//Exercício 3: Desconto para Alunos em Material Didático

let valor = 50;

if (valor > 50) {
let soma = valor * 0.9;
console.log(`o seu lavor com o desconto é R$${soma}`);
  
} else {
  console.log(`vc não tem desconto então o valor será de R$${valor} `);
  
}

//Exercício 4: Verificação de Presença

let Presença = 75;

if (Presença => 75) {
  console.log('vc não está com problema de reprovar por falta');
  
} else {
  console.log('vc está com problema de reprovar por falta');
  
}

//Exercício 5: Identificação de Turno de Aula

let turno = 'matutino';
if (turno === 'matutino') {
  console.log('tenha um bom dia de aula');
  
} else if(turno === 'Vespertino') {
  console.log('tenha uma boa tarde de aula');
  
}else{
  console.log('tenha uma boa noite de aula');

}

//Exercícios Médios

//Exercício 6: Controle de Nota Mínima para Aprovação

let notami = [10, 6, 4]
if (notami[0]<6 &&notami[1]<6&&notami[2]<6||notami[0]>6 &&notami[1]<6&&notami[2]<6||notami[0]<6 &&notami[1]>6&&notami[2]<6||notami[0]<6 &&notami[1]<6&&notami[2]>6 ) {
  console.log('vc foi reprovado ');
  
} else if(notami[0]>6 &&notami[1]>6&&notami[2]<6 || notami[0]>6 &&notami[1]<6&&notami[2]>6 ||notami[0]<6 &&notami[1]>6&&notami[2]>6) {
  console.log('vc ainda tem chance de recuperar nota não disperdice a oportunidade');
  
}else{
  console.log('parabens vc foi aprovado');
  
}


//Exercício 7: Gerenciamento de Estoque de Laboratório

const Estoque = [
  {nome: 'teclado', qnt: 5},
  {nome: 'mouse', qnt: 15},
  {nome: 'camera', qnt: 12},
  {nome: 'cabeamento', qnt: 16},

]
const faltadeestoque = Estoque.filter(function (itens) {
  return itens.qnt < 10;
  
})
console.log('estes elemento tem pouco no estoque');
console.log(faltadeestoque);


//Exercício 8: Classificação de Alunos por Rendimento

function desempenho(n1,n2,n3) {
  let media = ((n1+n2+n3)/3);
  if (media >=8 ) {
    console.log(`sua nota foi ${media}`);
    console.log("Excelente");
    
    
  } else if (media >=6 && media < 7.9) {
    console.log(`sua nota foi ${media}`);
    console.log("Bom");
    
  }else {
    console.log(`sua nota foi ${media}`);
    console.log("Precisa Melhorar");
    
  }
  
}desempenho(10,5,7)

//Exercício 9: Cálculo de Desconto para Curso de Extensão

function pagamentocurso(vcurso, temmatricula) {
  if (temmatricula === 'sim') {
    return 'seu valor do curso com o desconto por causa da matricula é R$' && vcurso * 0.8
    
  } else {
    return 'seu valor do curso é R$' && vcurso
  }
}
pagamentocurso(50, 'sim')
console.log(pagamentocurso(50, 'não'));

//Exercício 10: Sistema de Avaliação de Projetos


function desempenhodecada(funcionalidade, design, documentação) {
  let media1 = ((funcionalidade+design+documentação)/3);
  if (media1 >=8 ) {
    console.log(`sua nota foi ${media1}`);
    console.log("Excelente");
  } else if (media1 >=6 && media1 < 7.9) {
    console.log(`sua nota foi ${media1}`);
    console.log("Bom");
  }else {
    console.log(`sua nota foi ${media1}`);
    console.log("Precisa Melhorar"); 
  }
  
}
console.log(desempenhodecada(10,9,8));

//### Exercícios Difíceis

//**Exercício 11: Verificação de Frequência e Notas para Aprovação**

function feq_e_nota(feq,no1,no2,no3) {
  let notafinal= (no1+no2+no3)/3;
  if (feq >= 75 && notafinal>6) {
    return 'vc passou'
    
  } else if (feq >= 75 && notafinal >=4 && notafinal<=5.9) {
    return 'vc esta de recuperação'
    
  }else {
    return 'vc foi reprovado'
  
}}
console.log(feq_e_nota(75,10,5,6));

//Exercício 12: Controle de Acessos ao Laboratório de Informática

function acesso_permitido(ativo,permissão) {
  if (ativo === 'valido' && permissão === 'sim') {
    return 'acesso consedido'
  } else {
    return 'acesso negado'
  }
  
}
console.log(acesso_permitido('valido', 'sim'));
