
function displayFullName(fullname){
    lastname = fullname.split(' ').slice(-1).join(' ');
   // console.log(lastname)
    console.log('My name is name ', lastname, ', ', fullname)
}

displayFullName("James Bond")
displayFullName("Ada Lovelace")
displayFullName("Salvador Felipe Jacinto Dalí")