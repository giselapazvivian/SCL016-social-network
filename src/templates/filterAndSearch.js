import { signOut } from '../lib/firebase.js';
import { changeHash } from '../lib/index.js';

export const filterAndSeachTemplate = () => {
  const div5 = document.createElement('div');
  const filterAndSearch = `
  <header class="headerSecondary">
  <a href="#/Muro"><img src="./images/Logo.png" class="logo"></a>
  </header>
  <div id="page4">
    <input type="search" id="searchInput" placeholder="Busca en esta web"> <button class="bttn2"><img src="images/magnifyingGlassBlack.png"></button>
   
    <h2 id='titleFilter'>Filtra por región</h2>
    <div id="filterByRegion">
      <img src="./images/chileanMap.png" id="imgChile">
      
        <p id="r1">Arica y Parinacota</p>
        <p id="r2">Tarapacá</p>
        <p id="r3">Antofagasta</p>
        <p id="r4">Atacama</p>
        <p id="r5">Coquimbo</p>
        <p id="r6">Valparaíso</p>
        <p id="r7">Metropolitana</p>
        <p id="r8">Lib. Bdo O'higgins</p>
        <p id="r9">Maule</p>
        <p id="r10">Ñuble</p>
        <p id="r11">Biobío</p>
        <p id="r12">Araucanía</p>
        <p id="r13">Los ríos</p>
        <p id="r14">Los lagos</p>
        <p id="r15">Aysén del Gral C. I. del Campo</p>
        <p id="r16">Magallanes y Antártica Chilena</p>
      
    </div>
  </div>
  <footer class="footer2">
      <a class="anclaFooter" href="#/Muro"><img class="imgFooter" src="../images/home.png"></a>
      <a class="anclaFooter" href="javascript:location.reload()"><img class="imgFooter" src="../images/magnifyingGlass.png"></a>
      <ul id= "singOutProfile"><img id="userInpt" src="../images/user.png"></ul>
  </footer>`;
  div5.innerHTML = filterAndSearch;
  const userInpt = div5.querySelector('#userInpt');
  const singOutProfile = div5.querySelector('#singOutProfile');
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
  return div5;
};
