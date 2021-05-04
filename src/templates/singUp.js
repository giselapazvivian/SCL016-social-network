import { singUpBttn } from '../lib/firebase.js'
import { loginGoogle } from '../lib/firebase.js'

export const singUpTemplate = () => {
  const div2 = document.createElement ("div")
  const singUp = `
  <div id="page2">
   <formclass="inputForm">
      <ul class="principalUl">
       <h1 class="title1">Regístrate</h1>
       <input class="googleInpt" id="googleBttn2" type="button" value="Regístrate con Google">
       <p>O ingresa tu:</p>
        <li class="liInput1">
          <label for="name">Nombre:</label>
          <input class="inputSingUp" type="text" id="name2" name="user_name">
        </li>
        <li class="liInput1">
          <label for="mail">Correo:</label>
          <input class="inputSingUp" type="email" id="mail2" name="user_mail">
        </li>
       <li class="liInput1">
        <label for="msg">Contraseña:</label>
        <input class="inputSingUp" type="password" id="password2" name="user_password"></input>
       </li>
      <a href="#/IniciarSesion"><input class="bttn" type="button" value="Registrarme" id="singUpBttn" ></a>
    </ul>
   </form>
  </div>
    `;
    div2.innerHTML = singUp;

  //Dandole funcionalidad al boton de registrarse.
  div2.querySelector("#singUpBttn").addEventListener('click',()=>{
    const mail2 = div2.querySelector('#mail2').value;
    const password2 = div2.querySelector('#password2').value;
    singUpBttn(mail2,password2)
  })
  //Dandole funcionalidad al boton de registrate con Google.
  div2.querySelector('#googleBttn2').addEventListener('click', loginGoogle)
  
  return div2;

};
