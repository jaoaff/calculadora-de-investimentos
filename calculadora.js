function calcular(){
 const aporteMensal = Number(document.getElementById("valor-aporte").value);
 const taxaSelic = Number(document.getElementById("taxa-selic").value);
 const tempo = Number(document.getElementById("tempo-em-anos").value);
 
  // esse trecho transforma taxa e anos em formas usuais para a conta
 const taxaTransformada = (taxaSelic / 100) / 12;
 let anosTransformado = tempo * 12;
    // esse trecho prepara uma var de rendimento (rendido) para ser usada e alterada no bloco 
 // var rendimento = aporteMensal * taxaTransformada;
  var rendido = [0];
 // esse bloco repete o calculo de rendimento de acordo com a quantidade de meses, resultanto num rendimento cumulativo
  for (let i = 0; i <= anosTransformado; i++){
  
   var acumulado = aporteMensal * i
    
   var rend = rendido.reduce((num1, num2) => num1 + num2)
   
    rendido.push((acumulado + aporteMensal + rend) * taxaTransformada);
   
   }
  
  let total = rendido.reduce((num1, num2) => num1 + num2);
  console.log(acumulado)
  console.log(rendido)
  console.log(total)
  let dinheiro = ( acumulado + total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  const exibirResultado = document.getElementById("resultado");
  exibirResultado.innerHTML = `Ao final de ${tempo} anos você terá um total de : ${dinheiro}`;
  
}
