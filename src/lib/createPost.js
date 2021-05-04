export const createPostTemplate = () => {
  const createPost = `
    <div id="createPostPage" class="inputForm">

    <h2 class="title1">Crea tu post</h2>
    <form id="createPostForm">
      <ul class="createPostUl">
        <li>
          <label  id="createTitle" for="titleCreatePost">Título</label>
          <input type="text" id="titleCreatePost">
        </li>
        <li>
          <label id="createIntersting" for="contents">Contenido</label>
          <textarea id="contents" cols="30" rows="10"></textarea>
        </li>
        <li class="createPostLi" id="chooseRegion">
          <p>Tipo de publicación</p>
          <img src="./images/recomendation.png" class="imgPin">
          <input type="radio" id="recomendation" name="publicationType" value="0"> 
          <label for="recomendation">Recomendación</label><br>
          <img src="./images/memories.png" class="imgPin">
          <input type="radio" id="memories" name="publicationType" value="1">
          <label for="memories">Recuerdos</label><br>
          <img src="./images/caution.png" class="imgPin">
          <input type="radio" id="caution" name="publicationType" value="2">
          <label for="caution">Precaución</label><br>
        </li>
        <li>
          <select class="bttn" id="selectRegion">
              <option value="">Selecciona tu región</option>
              <option value="aricaParinacota">Arica y Parinacota</option>
              <option value="tarapaca">Tarapacá</option>
              <option value="antofagasta">Antofagasta</option>
              <option value="atacama">Atacama</option>
              <option value="coquimbo">Coquimbo</option>
              <option value="valparaiso">Valparaíso</option>
              <option value="metropolitana">Metropolitana</option>
              <option value="bernardoOhiggins">Libertador Bernardo O'higgins</option>
              <option value="maule">Maule</option>
              <option value="nuble">Ñuble</option>
              <option value="biobio">Bio-Bío</option>
              <option value="araucania">Araucanía</option>
              <option value="losRios">Los ríos</option>
              <option value="losLagos">Los lagos</option>
              <option value="aysen">Aysén del Gral Carlos Ibáñez del Campo</option>
              <option value="magallanes">Magallanes y Antártica</option>              
          </select>
        </li>
        <li>
          <label class="uploadFilePost" for="imgPst">Imagen</label>
          <input type="file" id="imgPst" accept="image/x-png,image/gif,image/jpeg">
          <input class="bttn" type="submit" value="Subir post">
        </li>                 
      </ul>
    </form>
    </div
    `;
  return createPost;
};
