function CreateForm(){
    let name = document.getElementById('name')
    let age = parseInt(document.getElementById('age').value)
    let response = document.getElementById('response')

    let actualDate = new Date().getFullYear()
    let birthyear = actualDate - age

    response.innerHTML = `<p>Hello, ${name.value}.</p>  <p>You were born in ${birthyear}!</p>`
}