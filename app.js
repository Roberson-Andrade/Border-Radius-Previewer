let box = document.getElementById('box')
let copiedText = document.getElementById('copiedText')

function changeBorder() {
    let borderR_tl = document.getElementById('borderR-tl').value
    let borderR_tr = document.getElementById('borderR-tr').value
    let borderR_bl = document.getElementById('borderR-bl').value
    let borderR_br = document.getElementById('borderR-br').value
   
    box.style.transition = '0.5s'
    
    let boxtext = box.style.borderRadius = borderR_tl + "px " + borderR_tr + "px " + borderR_bl + "px " + borderR_br + "px"

    copiedText.value = 'border-radius: ' + boxtext + ';'

    copiedText.disabled = false

}

function copyToClipboard() {
    
    copiedText.select()
    document.execCommand("copy")
   
}


