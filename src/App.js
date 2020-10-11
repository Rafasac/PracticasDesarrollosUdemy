import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  //Crar listado de productos
  const [productos, guardarProductos]=useState([
    {id: 1, nombre: 'Camisa ReactJS', precio: 40},
    {id: 2, nombre: 'Camisa Java', precio: 50},
    {id: 3, nombre: 'Camisa Angular', precio: 70},
    {id: 4, nombre: 'Camisa Php', precio: 80},
  ]);

  //state para un carrito de compra
  const [carrito, agregarProducto ]=useState([]);

  //obtener la fecha
  const fecha=new Date().getFullYear();

  return (
    <Fragment>
      <Header
      titulo='Tienda virtual'
      />
      <h1>Lista de productos</h1>
      {productos.map(producto =>(
        <Producto 
        key={producto.id}
        producto={producto}
        carrito={carrito}
        productos={productos}
        agregarProducto={agregarProducto}
        />
      ))}


      <Carrito 
      carrito={carrito}
      agregarProducto={agregarProducto}
      />
      <Footer
      fecha={fecha}
      />
      </Fragment>
  );
}

export default App;
