function calcular(){
 const guardado = Number(document.getElementById("din-inicial").value);
 const aporteMensal = Number(document.getElementById("valor-aporte").value);
 const taxaSelic = Number(document.getElementById("taxa-selic").value);
 const tempo = Number(document.getElementById("tempo-em-anos").value);
 
 
 const taxaTransformada = (taxaSelic / 100) / 12;
 let anosTransformado = tempo * 12;


      var rendido = [0];
 
  for (i = 0; i <= anosTransformado; i++){
  
      var acumulado = aporteMensal * i
    
      var rend = rendido.reduce((num1, num2) => num1 + num2)
   
      rendido.push((guardado + acumulado + aporteMensal + rend) * taxaTransformada);
   
   }
  
  let total = rendido.reduce((num1, num2) => num1 + num2);

  let dinheiro = ( guardado + acumulado + total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  const exibirResultado = document.getElementById("resultado");
  exibirResultado.innerHTML = `Ao final de ${tempo} anos você terá um total de : ${dinheiro}`;
  
}