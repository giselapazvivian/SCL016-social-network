import { signOut } from '../lib/firebase.js';
import { changeHash } from '../lib/index.js';

export const profileTemplate = () => {
  const div6 = document.createElement('div');
  const profile = `
    <header class="headerSecondary">
    <a href="#/Muro"><img src="./images/Logo.png" class="logo"></a>
    </header>
    <div id="pageProfile">
      <h2 class="title1" >Editar perfil</h2>
      <p></p>
      <form>
        <ul>
          <li>
            <label for="interesting">Intereses</label>
            <textarea id="interestingTextarea" cols="30" rows="10"></textarea>
          </li>
          <li>
            <input type="file" id="uploadFile" accept ="image/x-png,image/gif,image/jpeg">
            <input type="submit" value="Guardar cambios">
          </li>
          </ul>
      </form>
      <footer class="footer2">
      <a class="anclaFooter" href="#/Muro"><img class="imgFooter" src="../images/home.png"></a>
      <a class="anclaFooter" href="#/Filtrar&Buscar"><img class="imgFooter" src="../images/magnifyingGlass.png"></a>
      <ul id= "singOutProfile"><img id="userInpt" src="../images/user.png"></ul>
  </footer>
    </div>`;
  div6.innerHTML = profile;
  const userInpt = div6.querySelector('#userInpt');
  const singOutProfile = div6.querySelector('#singOutProfile');
  userInpt.addEventListener('click', () => {
    const singOutBttn = document.createElement('LI');
    singOutBttn.className = 'profileFeed';
    singOutBttn.textContent = 'Desconectarse';
    singOutBttn.addEventListener('click', () => {
      signOut();
      changeHash('#/IniciarSesion');
    });
    const viewProfile = document.createElement('LI');
    viewProfile.className = 'profileFeed';
    viewProfile.textContent = 'Ver mi perfil';
    viewProfile.addEventListener('click', () => {
      changeHash('#/Perfil');
    });

    singOutProfile.insertBefore(singOutBttn, userInpt);
    singOutProfile.insertBefore(viewProfile, userInpt);
  });
  return div6;
};
