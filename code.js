//Laço for
function para(n1){
    for(let i=0;i<n1;i++){
        if (i <= 10){
            console.log('Criança')
        }else if(i > 10 && i <= 15){
            console.log('Adolescente')
            process.exit(0);
       }else {
            console.log('Adulto')
       }  
    } 
}

//Laço while
function enquanto(n1){
    let i = 0;

    while(i < n1){
        i++;
        if(i <= 10){
        console.log('Criança')
        }else if(i > 10 && i <= 15){
        console.log('Adolescente')
        process.exit(0);
        }else {
        console.log('Adulto')
        }   
    }
}

//Laço do...while
function facaenquanto(n1){
    let i = 0;

    do{
        i++;
        if(i <= 10){
        console.log('Criança')
        }else if(i > 10 && i <= 15){
            console.log('Adolescente')
            process.exit(0);
        }else {
            console.log('Adulto')
       }  
    } while(i < n1)
}

//Laço switch case
function repetidor(n1){
    switch(n1){
        case 1: console.log('Nintendo é o melhor')
        break
        case 2: console.log('Atari é o rei dos games')
        break
        case 3: console.log('Xbox é o segundo melhor')
        break
        default:
        console.log('Não atende nenhuma condição')
    }
}
repetidor(2)