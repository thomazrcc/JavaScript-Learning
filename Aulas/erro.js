function tratarErroELancar(erro){
   // throw new Error('...')
   //throw 10
   throw {
    nome: erro.name,
    msg: erro.message,
   }




}
function imprimirNomeGritado(obj) {
    try{
         console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
       tratarErroELancar(e)
    }
   
}

const obj = { nome: 'roberto'}
imprimirNomeGritado(obj)