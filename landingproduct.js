document.getElementsByTagName('p')[10].onclick = () => {
    let x = document.getElementsByTagName('p')[11].innerText
    if (x != 0) {
        document.getElementsByTagName('p')[11].innerText = x - 1
    }
}
document.getElementsByTagName('p')[12].onclick = () => {
    let x = document.getElementsByTagName('p')[11].innerText
    document.getElementsByTagName('p')[11].innerText = parseInt(x) + 1
}
