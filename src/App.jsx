import React, { Component } from "react";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import CardUser from "./components/CardUser/CardUser";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Class => tener state y ciclos de vida
// Funcionales => Solo retornaban JSX (dummy, staless, funcionales)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="VENTA DE FRUTAS ORGÁNICAS 100% NATURALES Y SALUDABLES"
          subtitle="Frutas orgánicas: sabores auténticos, beneficios naturales para tu bienestar"
        />
        <NavBar />
        <div>
          <ItemListContainer greeting=" ¡Deseándoles a todos un excelente fin de semana!" />
        </div>
        <div className="UserSection">
          <CardUser
            name="MANZANA"
            precio="S/.10.00"
            description="(1kg/6-7 Unidades)"
            img="https://elcomercio.pe/resizer/F8QBx3wujHIt2RE_wfBEKlp97KE=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/2ZJVNZBF3BDJVNE6KUQMUZ5ZOE.jpg"
          />
          <CardUser
            name="ARANDANOS"
            precio="S/.13.00"
            description="(500g en bandeja)"
            img="https://frutachile.com/wp-content/uploads/2020/10/d57c59e3-arandano-shutterstock_60906745.jpg"
          />
          <CardUser
            name="FRESAS"
            precio="S/.15.00"
            description="(1kg por Bandeja)"
            img="https://larazon.pe/wp-content/uploads/2019/01/fresas.jpeg"
          />
        </div>
      </div>
    );
  }
}

export default App;
