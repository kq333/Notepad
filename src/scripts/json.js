const save_values = document.getElementById('btns_save')
const read_Values = document.getElementById('btns_read')

save_values.addEventListener('click', saveValues)
read_Values.addEventListener('click', readValues)

function saveValues(){

    const selectedText = window.getSelection().toString().trim()
    const jsonFile = JSON.stringify(selectedText)
    localStorage.setItem('key', jsonFile)

};

function readValues(){

    const savedValue = localStorage.getItem('key')
    const obj = JSON.parse(savedValue)

    const textArea = document.getElementById('textArea')
    const createParagraf = document.createElement('P')
    createParagraf.innerHTML = obj;
    textArea.appendChild(createParagraf);

};







