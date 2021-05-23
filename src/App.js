import React from 'react'
import './App.css';

// MODELO #1 DA LISTAGEM MAP
// const estilosMusicais = ['Jazz','Rock','Blues','Samba','Bossa','Fusion']

// const listaEstilos = estilosMusicais.map(
//   (estilos)=><p>{estilos}</p>
// )

// ------------------------------------
// MODELO #2 DA LISTAGEM MAP
// const estilosMusicais = ['Jazz','Rock','Blues','Samba','Bossa','Fusion']

// const listaEstilos = estilosMusicais.map(
//   (estilos)=><li>{estilos}</li>
// )

// ----------------------------------------------
// MODELO #3 DA LISTAGEM MAP
// const estilosMusicais = ['Jazz','Rock','Blues','Samba','Bossa','Fusion']

// const listaEstilos = estilosMusicais.map(
//   (estilos, i)=>
//   <li key={i}>{i} - {estilos}</li>
// )

// ----------------------------------------------

// MODELO #4 DA LISTAGEM MAP
const musicas = [
  {estilo:"Jazz", artista: "Chet Baker", ano: "1979"},
  {estilo:"Blues", artista: "Buddy Guy", ano: "1989"},
  {estilo:"Rock", artista: "Led Zeppelin", ano: "1971"}
]

const listaMusicos = musicas.map(
  (musicos)=>
  <li>{musicos.estilo} | {musicos.artista} | {musicos.ano}</li>
)


function App() {
  return (
    // MODELO #4 DA LISTAGEM MAP
      <div className="container">
      <ul>{listaMusicos}</ul>
      </div>

    // MODELO #3 DA LISTAGEM MAP
    //  <div className="container">
    //  <ul>{listaEstilos}</ul>
    //  </div>

  
    // MODELO #2 DA LISTAGEM MAP
    //  <div className="container">
    //  <ul>{listaEstilos}</ul>
    //  </div>


    // MODELO #1 DA LISTAGEM MAP
    // <div className="container">
    //  {listaEstilos}
    //  </div>
  )
}

export default App;
