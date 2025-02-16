"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Copiar del ejercicio anterior todos los objetos de tipo de pokemon
que ha generado.
Utilice ese objetos para crear una tarjeta de descripción de cada uno,
agregue esa información al HTML utilizando "innerHTML" como se vio
en los últimos ejemplos de clase.

*/


// Tipo agua
const titulo_agua = "Tipo Agua"
const descripcion_agua = "Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición."
const icono_agua = "./images/water_type.png";
const estiloClase_agua = "agua"

// Alumno: Genere un objeto llamado "tipoAgua" con todos los datos del pokemon tipo agua


const tipoAgua = {
    Titulo:`${titulo_agua}`,
    descripcion: `${descripcion_agua}`,
    Icono: `${icono_agua}`,
    estiloClase: `${estiloClase_agua}`
    };



// Tipo planta
const titulo_planta = "Tipo Planta"
const descripcion_planta = "Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate"
const icono_planta = "./images/grass_type.png";
const estiloClase_planta = "planta"

// Alumno: Genere un objeto llamado "tipoPlanta" con todos los datos del pokemon tipo planta


const tipoPlanta = {
    Titulo: `${titulo_planta}`,
    descripcion: `${descripcion_planta}`,
    Icono: `${icono_planta}`,
    estiloClase: `${estiloClase_planta}`
    };


// Tipo Electricidad
const titulo_electrico = "Tipo Electricidad"
const descripcion_electrico = "Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad."
const icono_electrico = "./images/electric_type.png";
const estiloClase_electrico = "electricidad"

// Alumno: Genere un objeto llamado "tipoElectricidad" con todos los datos del pokemon tipo electricidad


const tipoElectricidad = {
    Titulo: `${titulo_electrico}`,
    descripcion: `${descripcion_electrico}`,
    Icono: `${icono_electrico}`,
    estiloClase: `${estiloClase_electrico}`
    };



// Tipo normal
const titulo_normal = "Tipo Normal"
const descripcion_normal = "Los Pokémon de tipo normal abarcan la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características variadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc."
const icono_normal = "./images/normal_type.png";
const estiloClase_normal = "normal"

// Alumno: Genere un objeto llamado "tipoNormal" con todos los datos del pokemon tipo normal


const tipoNormal = {
    Titulo: `${titulo_normal}`,
    descripcion: `${descripcion_normal}`,
    Icono: `${icono_normal}`,
    estiloClase: `${estiloClase_normal}`
    };




// Tipo fuego
const titulo_fuego = "Tipo Fuego"
const descripcion_fuego = "Los Pokémon de tipo tipo fuego basan sus ataques, principalmente, en el control de este elemento; y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras. Son apasionados y, algunos, de mal carácter (como el Charizard de Ash); viven en cuevas o zonas rocosas y muy áridas; y, más probable, aun cerca de volcanes activos. Sin embargo, los únicos Pokémon que aparentemente suelen andar por lugares verdes como las praderas, son Ponyta y Rapidash, pudiendo ser que estos lugares les permiten galopar sin obstáculos. También, algunos son más dóciles, como Growlithe, Vulpix y sus respectivas evoluciones."
const icono_fuego = "./images/fire_type.png";
const estiloClase_fuego = "fuego"

// Alumno: Genere un objeto llamado "tipoFuego" con todos los datos del pokemon tipo fuego

const tipoFuego = {
    Titulo: `${titulo_fuego}`,
    descripcion: `${descripcion_fuego}`,
    Icono: `${icono_fuego}`,
    estiloClase: `${estiloClase_fuego}`
    };





// Template para que utilice:

const pokemnoWater= document.querySelector(".sector")
pokemnoWater.innerHTML= `
<article class="${tipoAgua.estiloClase}">
<div class="header">
    ${tipoAgua.Titulo}
</div>            
<div>
    <p id="descripcion">
        ${tipoAgua.descripcion}
    </p>
</div>
<img
  src=${tipoAgua.Icono}
  class="icon-type"
  alt="icon type"
/>
</article>
`;

const pokemonGrass= document.querySelector(".sector2")
pokemonGrass.innerHTML= `
<article class="${tipoPlanta.estiloClase}">
<div class="header">
    ${tipoPlanta.Titulo}
</div>            
<div>
    <p id="descripcion">
        ${tipoPlanta.descripcion}
    </p>
</div>
<img
  src=${tipoPlanta.Icono}
  class="icon-type"
  alt="icon type"
/>
</article>
`;

const pokemonElectric= document.querySelector(".sector5")
pokemonElectric.innerHTML= `
<article class="${tipoElectricidad.estiloClase}">
<div class="header">
    ${tipoElectricidad.Titulo}
</div>            
<div>
    <p id="descripcion">
        ${tipoElectricidad.descripcion}
    </p>
</div>
<img
  src=${tipoElectricidad.Icono}
  class="icon-type"
  alt="icon type"
/>
</article>
`;

const pokemonNormal= document.querySelector(".sector3")
pokemonNormal.innerHTML= `
<article class="${tipoNormal.estiloClase}">
<div class="header">
    ${tipoNormal.Titulo}
</div>            
<div>
    <p id="descripcion">
        ${tipoNormal.descripcion}
    </p>
</div>
<img
  src=${tipoNormal.Icono}
  class="icon-type"
  alt="icon type"
/>
</article>
`;

const pokemonFire= document.querySelector(".sector4")
pokemonFire.innerHTML= `
<article class="${tipoFuego.estiloClase}">
<div class="header">
    ${tipoFuego.Titulo}
</div>            
<div>
    <p id="descripcion">
        ${tipoFuego.descripcion}
    </p>
</div>
<img
  src=${tipoFuego.Icono}
  class="icon-type"
  alt="icon type"
/>
</article>
`;