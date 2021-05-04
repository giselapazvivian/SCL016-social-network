import { singInBttn, loginGoogle } from '../lib/firebase.js'

export const singInTemplate = () => {
  const div1 = document.createElement ("div")
  const singIn = `
  <div id="page1">
    <p id="pageDescription" >Esta es tu red social de viajes por Chile. Comparte tus experiencias, recuerdos,
      recomendaciones y problemas,
      para que así otros viajeros puedan planificar de mejor manera su travesía.</p>
    <h1 class="title1" >Iniciar sesión</h1>
    <form class="inputForm">
      <ul class="principalUl">
        <li id="errorMesssage"></li>
        <li class="liInput1">
          <label class="emailAndPassword" for="mail">Correo:</label>
          <input class="inputSingIn" type="email" id="mail" name="user_mail">
        </li>
        <li class="liInput1">
          <label class="emailAndPassword" for="msg">Contraseña:</label>
          <input class="inputSingIn" type="password" id="password" name="user_password"></input>
        </li>
        <input class="googleInpt" id="googleBttn" type="button" value="Iniciar sesión con Google">
        <a href="#/Muro"><input class="bttn" id="singInBttn" type="button" value="Iniciar sesión"></a>
        <p id="or">O</p>
        <a href="#/Registrate"><input class="bttn" type="button" value="Regístrate"></a>
      </ul>
    </form>
  </div>
  `;
  div1.innerHTML = singIn;

  //Dandole funcionalidad al boton de iniciar sesion.
  div1.querySelector('#singInBttn').addEventListener('click', singInBttn);
  //Dandole funcionalidad al boton de iniciar sesion con Google.
  div1.querySelector('#googleBttn').addEventListener('click', loginGoogle)
    
  return div1;
};


