//operador AND (&&)

let idade = 16
let temcarteira = 'sim'

if(idade >= 18 && temcarteira === 'sim'){
    console.log('Pode dirigir')
}else{
    console.log('Não pode dirigir')  
}

//operador OR (||)
let gestante = 'sim'
let idoso = 'não'

if (gestante === 'sim' || idoso === 'sim'){
    console.log('Fila preferencial')
}else{
    console.log('Fila comum')
}