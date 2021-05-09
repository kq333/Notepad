
const bnt1 = document.getElementById('btns_bold')
const bnt2 = document.getElementById('btns_italic')
const bnt3 = document.getElementById('btns_bulletPoints')

bnt1.addEventListener('mousedown', boldStyle)
bnt2.addEventListener('mousedown', italicStyle)
bnt3.addEventListener('mousedown', bulletStyle)


function boldStyle(event){

  event.preventDefault();
  document.execCommand("bold")

}

function italicStyle(event){

  event.preventDefault();
  document.execCommand("italic")

}

function bulletStyle(event){

  event.preventDefault();
  document.execCommand("insertUnorderedList")

}
