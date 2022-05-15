const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent 
        const previousKeyType = calculator.dataset.previousKeyType
        
        if(!action){
            console.log('numero')
        }

        if(
            action ==='add' ||
            action === 'multiply' ||
            action === 'subtract' ||
            action === 'divide' 
        ){
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action

            console.log('operadores')
        }
        
        if(action === 'decimal'){
            display.textContent = displayedNum + '.'
            console.log('decimal')
        }

        if(action === 'clear'){
            display.textContent = 0
            key.textContent = 'AC'
            calculator.dataset.previousKeyType = 'clear'    
            console.log('clear')
        }

        if(action === 'calculate'){
            console.log('igual')
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            display.textContent = calculate(firstValue, operator, secondValue)
            function calculate(n1, operator, n2) {
                let result = ''

                if (operator === 'add') {
                    result = parseFloat(n1) + parseFloat(n2)
                } else if (operator === 'multiply') {
                    result = parseFloat(n1) * parseFloat(n2)
                } else if (operator === 'subtract') {
                    result = parseFloat(n1) - parseFloat(n2)
                } else if (operator === 'divide') {
                    result = parseFloat(n1) / parseFloat(n2)
                }

                return result
            }
        }
        
        if(!action){
            if(displayedNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent
            }else{
                display.textContent = displayedNum + keyContent
            }
        }

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depresset'))
    }
    
})


