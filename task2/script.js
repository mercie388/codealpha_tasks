let historyE1 = document.getElementById('history');
let resultE1 = document.getElementById('result');
let current = '';

function append(value){
    if(resultE1.innerText === '0' && value != '.'){
        if(!['+', '-', '*', '/', '%'].includes(value)) current = '';
    }
    current += value;
    historyE1.innerText = current;
    resultE1.innerText = current;
}
function clearAll(){
    current = '';
    historyE1.innerText = '';
    resultE1.innerText = '0';
}
function deleteOne(){
    current = current.slice(0, -1);
    historyE1.innerText = current;
    resultE1.innerText = current || '0';
}
function calculate(){
    try{
        let expression = current.replace(/%/g,'/100');
        let res = eval(expression);
        resultE1.innerText = res;
        historyE1.innerText = current;
        current = res.toString();
    }catch{
        resultE1.innerText = 'Error';
    }
}

document.addEventListener('keydown', (e) => {
    if((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '%'].includes(e.key))append(e.key);
    if(e.key === 'Enter' || e.key === '=') calculate();
    if(e.key === 'Backspace') deleteOne();
    if(e.key === 'Escape') clearAll();
});