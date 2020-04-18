import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      info:{}
    }
  }
  componentDidMount(){

    this.asignarValores((data)=>{
      let setInfo = this.state;
      setInfo.info = data;
      this.setState(setInfo);
    });

  }

  asignarValores = (callback)=>{
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
    {
      method: 'GET',
      headers: {
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": "952bef1824mshbfe707ca173d53fp101874jsnb414afe463f0"
      }})
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        callback(data);
    })
    .catch(function(err) {
        console.error(err);
    });
  }

  imprimirValoresJsonSegundaVersion=()=>{
    //Arreglos para RECIBIR INFORMACION FETCH
    let ValoresJson = this.state.info;
    let contador = 0;
    
    var etiquetasInformacionCategorias = [];
    var formaFinaletiquetasInformacionCategorias = [];
    
    var formaFinalEstructura = [];

    //Arreglos para OBTENER CATEGORIAS
    let arregloPrincipalCategorias = [];
    for (var key in ValoresJson){
      arregloPrincipalCategorias.push(key);
    }
    //Arreglos para OBTENER INFORMACION CATEGORIAS
    let arregloPrincipalInformacionCategorias = Object.values(this.state.info);

    arregloPrincipalCategorias.forEach(ForEachCategoria =>{

              if(contador !== 0){
                  arregloPrincipalInformacionCategorias[contador].forEach((ForEachInformacionCategorias) =>{ 
                    etiquetasInformacionCategorias.push(<p style={{width:"100px", margin:"4px"}}>{ForEachInformacionCategorias}</p>);
                  });}//Caso especial para atrap ip como STRING completo
              else if(contador === 0){etiquetasInformacionCategorias.push(<p style={{width:"100px", margin:"4px"}}>{arregloPrincipalInformacionCategorias[0]}</p>)}
            etiquetasInformacionCategorias = [];
            contador = contador +1;
          formaFinaletiquetasInformacionCategorias = [<h3 style={{display:"flex", justifyContent:"center"}}>{ForEachCategoria}</h3>,<div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", width:"100%"}}>{etiquetasInformacionCategorias}</div>];
      formaFinalEstructura.push(formaFinaletiquetasInformacionCategorias); 
    });

    return formaFinalEstructura;

  }
  render(){
    return(
      <div>
        {this.imprimirValoresJsonSegundaVersion()}
      </div>
    )
  };
}

export default App;
