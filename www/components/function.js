function calcular(){
  var nome, idade, peso, altura, a, sexo, imc;

  nome = document.calc.nome.value;
  idade = parseFloat(document.calc.idade.value);
  peso = parseFloat(document.calc.peso.value);
  altura = parseFloat(document.calc.altura.value);
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

  imc = peso / Math.pow(a, 2);

  if(sexo == "mulher")
  {
    if(imc <= 18.4)
    {
      document.calc.visor1.value = "Seu IMC é: " + imc + ", Abaixo do peso!";
    }
    else if(imc <= 24)
    {
      document.calc.visor1.value = "Seu IMC é: " + imc + ", Peso Normal!";
    }
    else if(imc <= 29)
    {
      document.calc.visor1.value = "Seu IMC é: " + imc + ", Acima do Peso!";
    }
    else
    {
      document.calc.visor1.value = "Seu IMC é: " + imc + ", Obesidade!";
    }
  }

  else
  {
    if(imc <= 19.4)
    {
      document.calc.visor1.value = "Seu IMC é: " + imc + ", Abaixo do peso!";
    }
    else if(imc <= 25)
    {
      document.calc.visor1.value = "Seu IMC é: " + imc + ", Peso Normal!";
    }
    else if(imc <= 30)
    {
      document.calc.visor1.value = "Seu IMC é: " + imc + ", Acima do peso!";
    }
    else
    {
      document.calc.visor1.value = "Seu IMC é: " + imc + ", Obesidade!";
    }
  }
}

