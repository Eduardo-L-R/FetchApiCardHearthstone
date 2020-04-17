import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      info:{}
    }
    this.imprimirValoresJson = this.imprimirValoresJson.bind(this);
    this.recorrerCategoria = this.recorrerCategoria.bind(this);
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


  imprimirValoresJson(){
    let ValoresJson = this.state.info;
    let array = [];
    let contador = 0;
    let arrayContenido = Object.values(this.state.info);
    for (var key in ValoresJson){
          array.push(key);
    }
    console.log("este es array: ",array);
    console.log("este es arrayContenido: ",arrayContenido);
    array.map(categoria =>{
      console.log("Categoria : ",categoria)
      let CategoriasArray = [];
      CategoriasArray.push(categoria);
      this.recorrerCategoria(arrayContenido,contador);
      contador = contador +1;
    });

  }
  recorrerCategoria(arrayContenido,contador){
    if(contador !== 0){Object.values(arrayContenido[contador]).map(categoriaobjeto => console.log(categoriaobjeto))}
    else{console.log(arrayContenido[contador])}
  }
  render(){
    return(
      <div>
        {this.imprimirValoresJson()} 
      </div>
    )
  };
}

export default App;
