/* 
Crie uma estrutura decisão switch/case que 
peça para o usuário 
o seu signo e retorne 
o período do signo no calendário

dica: var signo = prompt('Digite seu signo: ')
Aries - de 21 março a 20 abril

Touro -  de 21 abril a 20 maio

Gemeos - de 21 maio a 20 junho

Cancer - de 21 junho a 22 julho

Leao - de 23 julho a 22 agosto

Virgem - de 23 agosto a 22 setembro
Caso não tenha o signo - Signo não registrado
*/

// ============================================================================

var signo = prompt('Digite seu signo: ')

switch (signo) {
    case signo = 'Aries':
        console.log('Aries - de 21 março a 20 abril');
        break;
    case signo = 'Touro' :
        console.log('Touro -  de 21 abril a 20 maio');
        break;
     case signo = 'Gemeos':
        console.log('Gemeos - de 21 maio a 20 junho');
        break;
     case signo = 'Cancer':
         console.log('Cancer - de 21 junho a 22 julho');
        break;
      case signo = 'Leao':
        console.log('Leao - de 23 julho a 22 agosto');
         break;
     case signo = 'Virgem':
         console.log('Virgem - de 23 agosto a 22 setembro');
         break;
    default:
        console.log('Signo indisponível');
        break;
 }