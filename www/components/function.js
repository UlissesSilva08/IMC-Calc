function calcular(){
  var nome, idade, peso, altura, a, sexo, nivel, tmbh, tmbm;

  nome = document.calc.nome.value;
  idade = parseFloat(document.calc.idade.value);
  peso = parseFloat(document.calc.peso.value);
  altura = parseFloat(document.calc.altura.value);
  nivel = document.calc.nivel.value; 
  a = parseFloat(altura.toFixed(2));
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

  tmbh = nivel * (66 + (13.7 * peso) + ( 5.00 * a) - (6.8 * idade));

  tmbm = nivel * (655 + (9.6 * peso) + ( 1.8 * a) - (4.7 * idade));


  if(sexo == "mulher")
  {
      document.calc.visor1.value = "Seu TMB é: " + tmbm + ", !";
  }

  else
  {
      document.calc.visor1.value = "Seu TMB é: " + tmbh + ", !";
  }
}

