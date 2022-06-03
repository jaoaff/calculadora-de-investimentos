function calcular(){
  const total = Number(document.getElementById("total").value);
  const taxaSelic = Number(document.getElementById("taxa-selic").value);
  const aporteMensal = Number(document.getElementById("valor-aporte").value);
 
 //taxa selic convertida em numero usual
 const taxaTransformada = (taxaSelic / 100) / 12;
 


      var rendido = [0];
      var meses = 0;

  var rendimento = total * taxaTransformada;

  while ( rendimento > 0){
  
      let acumulado = aporteMensal * meses;
    
      let rend = rendido.reduce((num1, num2) => num1 + num2)
   
      var rendimento = ((total - rend) - acumulado) * taxaTransformada;

      rendido.push(rendimento);

      meses++; 
   }
  



  let anos = (meses / 12);

  let mesesTransformado = (anos - parseInt(anos)) * 12;
  const exibirResultado = document.getElementById("resultado");
  exibirResultado.innerHTML = `Você levará ${parseInt(anos)} anos e ${parseInt(mesesTransformado)} meses para chegar a ${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} reais`;
  
}