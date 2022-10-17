//Laço swtich case


function repetidor(n1){
      switch(n1){

case 1: console.log('Nintendo é o melhor')
window.location.replace("nintendo.html")
break
case 2: console.log('Atari é o rei dos games')
window.location.replace("atari.html")
break
case 3: console.log('Xbox é o segundo melhor')
window.location.replace("xbox.html")
break
default:
console.log('Não atende nenhuma condição')
//window.location.replace("cadastro.html")
//window.location.href("cadastro.html")
window.location.assain("cadastro.html")


}


}

function retorna(){
    let b = document.getElementById("nivel").value
    repetidor(parseInt(b))

}

