// let users = {
//   name: 'name',
//   email: 'email',
// };

function submitData(name, email){
  let users = {
    name: name,
    email: email,
  }
  return fetch("http://localhost:3000/users",{
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  "Accept": "application/json",
  },
  body:JSON.stringify(users)
})
.then(res => res.json())
.then(users => document.querySelector("body").append(users.id))
.catch(error => document.querySelector("body").append(error.message))
}
