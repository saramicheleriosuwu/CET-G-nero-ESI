function validarInput(input) {
    return valoresPermitidos.includes(input);
  }

  if (validarInput(inputUsuario)) {
    console.log('Input válido');
  } else {
    console.log('Input inválido');
  }  