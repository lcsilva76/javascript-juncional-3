let listaTarefa = []
let descricao = document.querySelector('#idDescricao')
let autor = document.querySelector('#idAutor')
let departamento = document.querySelector('#idDepartamento')
let importancia = document.querySelector('#idImportancia')
let valor = document.querySelector('#idValor')
let duracao = document.querySelector('#idDuracao')
let inserir = document.querySelector('#inserir')

let tabela = document.querySelector('tbody')

inserir.addEventListener('click', function(){
    
    listaTarefa.push({
        descricao : descricao.value,
        autor : autor.value,
        departamento : departamento.value,
        importancia : importancia.value,
        valor : valor.value,
        duracao : duracao.value
    })
    console.log(listaTarefa);
    tabela.innerHTML = ''
    listaTarefa.forEach( (item, i) => 
    tabela.innerHTML +=  `
    <tr>
        <td>${item.descricao}</td>
        <td>${item.autor}</td>
        <td>${item.departamento}</td>
        <td>${item.importancia}</td>
        <td>${item.valor}</td>
        <td>${item.duracao}</td>
        <td><button onclick="apagar('${i}')">X</button></td>
    </tr>
    `) 
     descricao.value = ""         
     autor.value = ""         
     departamento.value = ""         
     importancia.value = ""         
     valor.value = ""         
     duracao.value = ""         
 })

 function apagar(i){
    listaTarefa.splice(i,1)
    tabela.innerHTML = ''
    listaTarefa.forEach( (item, i) => 
    tabela.innerHTML +=  `
    <tr>
        <td>${item.descricao}</td>
        <td>${item.autor}</td>
        <td>${item.departamento}</td>
        <td>${item.importancia}</td>
        <td>${item.valor}</td>
        <td>${item.duracao}</td>
        <td><button onclick="apagar('${i}')">X</button></td>
    </tr>
    ` )
   }
 

let listaImportancia = document.querySelector('#listaImportancia')   
document.querySelector('#listarImpor').addEventListener('click',function(){
    listaImportancia.innerHTML = ''
    let listaOrdenada = listaTarefa.sort(function(a,b){
        if(a.importancia > b.importancia){
            return -1
        }else{
            return true
        }
    })

    listaOrdenada.forEach( (item, i) => 
    listaImportancia.innerHTML +=  `
    <li>${i+1} - ${item.descricao} - Import.: ${item.importancia}</li>`)

})


