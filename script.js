const contener = document.querySelector('.contener')
const teclado = document.querySelector('.teclado')

teclado.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action 
        
        if(!action){
            console.log('numero')
        }

        if(
            action ==='add' ||
            action === 'multiply' ||
            action === 'subtract' ||
            action === 'divide' 
        ){
            console.log('operadores')
        }

        if(action === 'decimal'){
            console.log('decimal')
        }

        if(action === 'clear'){
            console.log('clear')
        }

        if(action === 'calculate'){
            console.log('igual')
        }
    }

})


