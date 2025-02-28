import { errorAD, changeHash } from '../src/lib/index.js';

describe('errorAD', () => {
  it('Debería retornar el mensaje "Correo inválido."', () => {
    const test1 = errorAD('The email address is badly formatted.');
    expect(test1.innerHTML).toBe('Correo inválido.');
  });
  it('Debería retornar el mensaje "Contraseña inválida."', () => {
    const test1 = errorAD('The password is invalid or the user does not have a password.');
    expect(test1.innerHTML).toBe('Contraseña inválida.');
  });
  it('Debería retornar el mensaje "Usuario no registrado."', () => {
    const test1 = errorAD('There is no user record corresponding to this identifier. The user may have been deleted.');
    expect(test1.innerHTML).toBe('Usuario no registrado.');
  });
  it('Debería retornar el mensaje "La contraseña debe tener más de 6 caracteres."', () => {
    const test1 = errorAD('The password must be 6 characters long or more.');
    expect(test1.innerHTML).toBe('La contraseña debe tener más de 6 caracteres.');
  });
  it('Debería retornar el mensaje "El correo ya está siendo usado en otra cuenta."', () => {
    const test1 = errorAD('The email address is already in use by another account.');
    expect(test1.innerHTML).toBe('El correo ya está siendo usado en otra cuenta.');
  });
  it('No debería mostrar ningun mensaje de error', () => {
    const test1 = errorAD('123123123');
    expect(test1.innerHTML).toBe('');
  });
});

describe('changeHash', () => {
  it('Debería poder cambiar el hash de la página', () => {
    changeHash('#/Muro');
    expect(window.location.hash).toBe('#/Muro');
  });
});
