exports.prestamoInteresCompuesto = (capital, tasaInteres, plazo) => {
    let capitalFinal = 0;
    let tiempoMeses = 0;
    let interes = 0;
    let tasaInteresDecimal = tasaInteres / 100;
    const capitalFinal = [];
  
    // Transformar los años en meses
    plazo = Math.round(plazo * 12);
    
    
        // Calcular el capitalFinal
        capitalFinal =
            (capital * ((1 + tasaInteresDecimal) * tiempoMeses));
  
        capitalFinal = capitalFinal.toFixed(2);

        //capital a pagar
    console.log('periodo'+' /'+'depositos'+' /'+'interes'+' /'+'capitalFinal ');
  // for
  for (let i = 1; i <= plazo; i++) {
      interes = capital * tasaInteresDecimal;
      capital = capital - deuda;
      interes = interes.toFixed(2);
      capital = capital.toFixed(2);
      
      console.log(deuda+' /'+interes+' /'+capitalFinal+' /'+capital );
    
    }
};