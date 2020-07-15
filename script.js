var username = document.getElementById('username')
var password = document.getElementById('password')
var continue_but = document.getElementsByName('_eventId_proceed')[0]

username.value = 'cred_username'
password.value = 'cred_password'

continue_but.click()

console.log(continue_but)