let btn = document.querySelector('#copy')

btn.addEventListener('click', function(e){
    let textArea = document.querySelector('.text')
    // textArea.select() para selecionar as coisas do input
    // document.execCommand('copy') deprecated para copiar o texto selecionado
    navigator.clipboard.writeText(textArea.value);
    btn.textContent = 'copied'
})