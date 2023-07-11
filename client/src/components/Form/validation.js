export default function validate(userData, error) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!userData.email) {
    error.email = "el email no puede estar vacio";
  } else {
    if (!regexEmail.test(userData.email)) {
      error.email = "el ususario tiene que ser un email";
    } else if (userData.email.length > 35) {
      error.email = "el email debe ser menor a 35 caracteres ";
    } else {error.email=''}
  }
  if (!userData.password) {
    error.password = "el password no puede estar vacio";
  } else {
    if (userData.password.length > 10 || userData.password.length < 6) {
      error.password =
        "la contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
    }else{error.password =''}
  }
  return error
}
