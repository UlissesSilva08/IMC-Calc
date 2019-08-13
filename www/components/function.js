function calcular(){
  var nome, idade, peso, altura, sexo, imc;

  nome = document.calc.nome.value;
  idade = parseFloat(document.calc.idade.value);
  peso = parseFloat(document.calc.peso.value);
  altura = parseFloat(document.calc.altura.value);
  sexo = document.calc.sexo.value;

  if(idade <= 21)
  {
    document.calc.visor2.value = nome + ", Jovem Ainda!";
  }

   else if(idade <= 60)
  {
    document.calc.visor2.value = nome + ", Ja é Adulto(a)!";
  }

  else
  {
    document.calc.visor2.value = nome + ", Esta na Melhor idade!";
  }
}

