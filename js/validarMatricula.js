function validarMatricula(e){
  e.preventDefault();

  let [nome,email,cpf,endereco,estado,cep,cidade,credito,boleto,nomeCartao,validadeMes,validadeAno,numeroCartao,codigoSeguranca,botao,infantil,adulto,profissional] = e.target

  let valido = false

  if(!nome.value.includes(" ") || nome.value.length < 10){
    console.log('Erro');
    valido = true
  }
  if(!email.value.includes("@") || email.value.length < 10){
    console.log('Erro2');
    valido = true
  }
  if(cpf.value.length != 11){
    console.log('erro3');
    valido = true
  }
  if(!endereco.value.includes(" ") || endereco.value.length < 10){
    console.log('erro4');
    valido = true
  }
  if(estado.value == 0){
    console.log('erro5');
    valido = true
  }
  if(cep.value.length != 8){
    console.log('erro6');
    valido = true
  }
 if(cidade.value == 0){
  console.log('erro7');
  valido = true
 }



console.log(infantil);
console.log(adulto);
console.log(profissional);

}