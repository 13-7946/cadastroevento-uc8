let  dataAtual = new Date()
let dataEvento = new Date(2022,12,20)
let idadeParticipante = 18
let quantidadeparticipantes =100

// cadastro

if (dataEvento <= dataAtual ) {
    console.log ("cadastro no evento não permitido data invalida")
} else{
    console.log ("evento permitido , cadastrar-se ")
}
 // verificação idade

 if (idadeParticipante <= 18) {
     console.log ("idade permitida cadastro realizado")
 }
else {
    console.log ("idade não permitida cadastro não autorizado")
}

// palestrantes 

  console.log (" A quantidade de participantes permitida nesse evento é de 100 pessoas")

if (quantidadeparticipantes <=100) {
    console.log ("cadastro permitido")
} else { 
    console.log ("cadastro não realizado numero de participantes excedido")
}

