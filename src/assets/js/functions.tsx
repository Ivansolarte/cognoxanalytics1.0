const suma =(a:number,b:number):number =>{
  return a + b ;
}

const ValidateEmail = (email) => {
  console.log(email,'funciiiionnnnn')
  if (email) { 
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(email)) {
      return true
    } else {
      return false
    }  
  } else {
    return false
  }
}

export {
  suma,
  ValidateEmail
}