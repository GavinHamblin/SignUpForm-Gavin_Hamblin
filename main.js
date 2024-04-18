const passwordOne = document.querySelector('#pwd1')
const passwordTwo = document.querySelector('#pwd2')
const passwordParent = document.querySelector('.password-1')

if (!passwordOne == passwordTwo) {
    const errorMessage = document.createElement('p')
    passwordParent.appendChild('p')
    errorMessage.textContent = 'Passwords do not match'
    console.log('hey')
}