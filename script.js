const res = document.querySelector('#res');
const buttons = document.querySelectorAll('button');


buttons.forEach(button => button.addEventListener('click', () => {

    switch(button.innerHTML){

        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
            res.value += button.innerHTML;
            break;

        case 'C':
            res.value = '';
            break;


        case '=':

            let expr = res.value;
            let nums = /(\d+)/g;

            expr = expr.replace(nums, match => parseInt(match,2));

            res.value = eval(expr).toString(2);

    }

}))