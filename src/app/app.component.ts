import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit() {      
    //teste momento aleatório    
    this.captarMomentoAleatorio(150);
  }

  //Função que gera momentos aleatórios dentro de uma aula, com base na duração que é repassada como parâmetro. Possui 3 faixas de tempo (50, 100 ou 150 minutos) 
  sorteado(max:number,quant:number) {
    let numeroS = []
    while (numeroS.length < quant) {
      let e = Math.ceil(Math.random() * max);
      if (numeroS.indexOf(e) == -1) {
        numeroS.push(e)
      }
    }    
   return numeroS;
}
   
captarMomentoAleatorio(duracao:any){
  
    const contador = ((Math.random() * 1) + 5);
    
    let horario_aleatorio_aula_1: any = [];
    let horario_aleatorio_aula_2: any = [];
    let horario_aleatorio_aula_3: any = [];

    let rMinuto: any = this.sorteado(50, contador);   
    console.log("minutos " + rMinuto);

    let rSegundo: any = this.sorteado(500, contador);       
    console.log ("segundos " + rSegundo);    
    
    switch (duracao){ 

    case 50:

        let cont1 = 0;

        console.log("horário inicio aula 1 -> " + moment().format("YYYY-MM-DD HH:mm:ss"));

        for(let i = 0; i < rMinuto.length; i++){
          horario_aleatorio_aula_1[i] = moment().add(Math.floor(rMinuto[i]), 'minutes').add(Math.floor(rSegundo[i]),'seconds').format("YYYY-MM-DD HH:mm:ss");    
          console.log("Horário aula 1 sem ordenar posicao " + i + " > " + horario_aleatorio_aula_1[i]);     
        }

        var val = horario_aleatorio_aula_1.sort();

          for (let x of val){
           if(cont1 > 0){
             x = moment(val[cont1]).diff(moment(val[(cont1-1)]));
             console.log("diferença dos números > " + cont1 + " > " + x);
              if(x < 70000){
                console.log("Horario aleatório próximo ao anterior: " + val[cont1]);
                val[cont1] = moment(horario_aleatorio_aula_1[cont1]).add(2,'minutes').format("YYYY-MM-DD HH:mm:ss");
                horario_aleatorio_aula_1[cont1] = val[cont1];
                console.log("Alterado para: " + val[cont1]);                
              }           
           }

          cont1 += 1;
        } 

        for(let item of val){          
          setTimeout(()=> {
            console.log("Horário aula 1 ordenando > " + val[cont1], item);         
          })
        }
      break;      

    case 100:         

      console.log("horário inicio aula 1 -> " + moment().format("YYYY-MM-DD HH:mm:ss"));  

      let cont_2_1 = 0;      

      for(let i = 0; i < rMinuto.length; i++){
        horario_aleatorio_aula_1[i] = moment().add(Math.floor(rMinuto[i]), 'minutes').add(Math.floor(rSegundo[i]),'seconds').format("YYYY-MM-DD HH:mm:ss");    
        console.log("Horário aula 1 sem ordenar posicao " + i + " > " + horario_aleatorio_aula_1[i]);       
      }

      var val = horario_aleatorio_aula_1.sort();         

      for (let x of val){
         if(cont_2_1 > 0){
           x = moment(val[cont_2_1]).diff(moment(val[(cont_2_1-1)]));           
           console.log("diferença dos números > " + cont_2_1 + " > " + x);

            if(x < 70000){
              console.log("Horario aleatório próximo ao anterior: " + val[cont_2_1]);
              val[cont_2_1] = moment(horario_aleatorio_aula_1[cont_2_1]).add(2,'minutes').format("YYYY-MM-DD HH:mm:ss");
              horario_aleatorio_aula_1[cont_2_1] = val[cont_2_1];
              console.log("Alterado para: " + val[cont_2_1]);
            }           
         }
         cont_2_1 += 1;
      } 

      for(let item of val){   
          setTimeout(()=> {
          console.log("Horário aula 1 ordenando > " + val[cont_2_1], item);         
        })
      }
      console.log("horário inicio aula 2 -> " + moment().add(50,'minutes').format("YYYY-MM-DD HH:mm:ss"));      
      let cont_2_2 = 0;      
      for(let i = 0; i < rMinuto.length; i++){
        horario_aleatorio_aula_2[i] = moment().add(50,'minutes').add(Math.floor(rMinuto[i]), 'minutes').add(Math.floor(rSegundo[i]),'seconds').format("YYYY-MM-DD HH:mm:ss");    
        console.log("Horário aula 2 sem ordenar posicao " + i + " > " + horario_aleatorio_aula_2[i]);   
      }

      var val_2 = horario_aleatorio_aula_2.sort();         

        for (let y of val_2){
         if(cont_2_2 > 0){
           y = moment(val_2[cont_2_2]).diff(moment(val_2[(cont_2_2-1)]));
           console.log("diferença dos números > " + cont_2_2 + " > " + y);
            if(y < 70000){
              console.log("Horario aleatório próximo ao anterior: " + val_2[cont_2_2]);
              val_2[cont_2_2] = moment(horario_aleatorio_aula_2[cont_2_2]).add(2,'minutes').format("YYYY-MM-DD HH:mm:ss");
              horario_aleatorio_aula_2[cont_2_2] = val_2[cont_2_2];
              console.log("Alterado para: " + val_2[cont_2_2]);
            }
         }
         cont_2_2 += 1;
      }
      for(let item of val_2){  
        setTimeout(()=> {
          console.log("Horário aula 2 ordenando > " + val_2[cont_2_2], item);  
        })
      }
      break;

      case 150:         

      console.log("horário inicio aula 1 -> " + moment().format("YYYY-MM-DD HH:mm:ss"));
      
      let cont_3_1 = 0;
      
      for(let i = 0; i < rMinuto.length; i++){
        horario_aleatorio_aula_3[i] = moment().add(Math.floor(rMinuto[i]), 'minutes').add(Math.floor(rSegundo[i]),'seconds').format("YYYY-MM-DD HH:mm:ss");    
        console.log("Horário aula 1 sem ordenar posicao " + i + " > " + horario_aleatorio_aula_3[i]);
      }

      var val = horario_aleatorio_aula_3.sort();         

      for (let x of val){

         if(cont_3_1 > 0){

           x = moment(val[cont_3_1]).diff(moment(val[(cont_3_1-1)]));

           console.log("diferença dos números > " + cont_3_1 + " > " + x);

            if(x < 70000){
              console.log("Horario aleatório próximo ao anterior: " + val[cont_3_1]);
              val[cont_3_1] = moment(horario_aleatorio_aula_3[cont_3_1]).add(2,'minutes').format("YYYY-MM-DD HH:mm:ss");
              horario_aleatorio_aula_3[cont_3_1] = val[cont_3_1];
              console.log("Alterado para: " + val[cont_3_1]);
            }           
         }
         cont_3_1 += 1;
      } 

      for(let item of val){      
        setTimeout(()=> {
          console.log("Horário aula 1 ordenando > " + val[cont_3_1], item);         
        })

      }

      console.log("horário inicio aula 2 -> " + moment().add(50,'minutes').format("YYYY-MM-DD HH:mm:ss"));
      
      let cont_3_2 = 0;
      
      for(let i = 0; i < rMinuto.length; i++){

        horario_aleatorio_aula_3[i] = moment().add(50,'minutes').add(Math.floor(rMinuto[i]), 'minutes').add(Math.floor(rSegundo[i]),'seconds').format("YYYY-MM-DD HH:mm:ss");    
        console.log("Horário aula 2 sem ordenar posicao " + i + " > " + horario_aleatorio_aula_3[i]);          

      }

      var val_2 = horario_aleatorio_aula_3.sort();         

        for (let y of val_2){

         if(cont_3_2 > 0){

           y = moment(val_2[cont_3_2]).diff(moment(val_2[(cont_3_2-1)]));

           console.log("diferença dos números > " + cont_3_2 + " > " + y);

            if(y < 70000){
              console.log("Horario aleatório próximo ao anterior: " + val_2[cont_3_2]);
              val_2[cont_3_2] = moment(horario_aleatorio_aula_3[cont_3_2]).add(2,'minutes').format("YYYY-MM-DD HH:mm:ss");
              horario_aleatorio_aula_3[cont_3_2] = val_2[cont_3_2];
              console.log("Alterado para: " + val_2[cont_3_2]);
            }
         }
         cont_3_2 += 1;
      }
      for(let item of val_2){  
        setTimeout(()=> {
          console.log("Horário aula 2 ordenando > " + val_2[cont_3_2], item);  
        })
      }
      console.log("horário inicio aula 3 -> " + moment().add(100,'minutes').format("YYYY-MM-DD HH:mm:ss"));
      
      let cont_3_3 = 0;
      
      for(let i = 0; i < rMinuto.length; i++){

        horario_aleatorio_aula_3[i] = moment().add(100,'minutes').add(Math.floor(rMinuto[i]), 'minutes').add(Math.floor(rSegundo[i]),'seconds').format("YYYY-MM-DD HH:mm:ss");    
        console.log("Horário aula 2 sem ordenar posicao " + i + " > " + horario_aleatorio_aula_3[i]);          

      }

      var val_3 = horario_aleatorio_aula_3.sort();         

        for (let z of val_3){
         if(cont_3_2 > 0){
           z = moment(val_3[cont_3_3]).diff(moment(val_3[(cont_3_3-1)]));
           console.log("diferença dos números > " + cont_3_3 + " > " + z);
            if(z < 70000){
              console.log("Horario aleatório próximo ao anterior: " + val_3[cont_3_3]);
              val_3[cont_3_3] = moment(horario_aleatorio_aula_3[cont_3_3]).add(2,'minutes').format("YYYY-MM-DD HH:mm:ss");
              horario_aleatorio_aula_3[cont_3_3] = val_3[cont_3_3];
              console.log("Alterado para: " + val_3[cont_3_3]);
            }
         }
         cont_3_3 += 1;
      }
      for(let item of val_3){  
        setTimeout(()=> {
          console.log("Horário aula 3 ordenando > " + val_3[cont_3_3], item);  
        })
      }
      break;
    }    
  }
}