var numero = 1
console.log('fora', numero)
{
    var numero = 2
    console.log('dentro', numero)
}

console.log('fora', numero)

// só existe escopo quando se usa função