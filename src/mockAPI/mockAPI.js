const data = [
  {
    id: 1,
    producto: "Campera",
    img: "https://suicidaltrendlp.com/wp-content/uploads/2022/08/campera-cry-baby-1.jpg",
    nombre: "Cry Baby",
    precio: "40000",
    stock: true,
    color: "negro",
    detail: "Campera hecha de cuero negro con estilo rock 80'",
  },
  {
    id: "2",
    producto: "Pantalon",
    img: "https://i0.wp.com/suicidaltrendlp.com/wp-content/uploads/2022/08/pantalon-jimi-5.jpg?fit=1024%2C1520&ssl=1",
    nombre: "Jimy",
    precio: "15000",
    stock: false,
    color: "azul",
    detail: "Pantalon Jean color azul recto",
  },
  {
    id: "3",
    producto: "Campera",
    img: "https://i0.wp.com/suicidaltrendlp.com/wp-content/uploads/2022/08/CAMPERA-chelsea.jpg?fit=1024%2C1520&ssl=1",
    nombre: "Chelsea",
    precio: "18000",
    stock: true,
    color: "animal print",
    detail: "Campera animal print al cuerpo",
  },
  {
    id: "4",
    producto: "Pantalon",
    img: "https://i0.wp.com/suicidaltrendlp.com/wp-content/uploads/2022/08/pantalon-baggy-Suicidal-Trend.jpg?fit=1024%2C1520&ssl=1",
    nombre: "Baggy Azul",
    precio: "16000",
    stock: true,
    color: "azul",
    detail: "Pantalon Jean color azul recto con botamanga ancha ",
  },
  {
    id: "5",
    producto: "Pantalon",
    img: "https://i0.wp.com/suicidaltrendlp.com/wp-content/uploads/2022/09/pantalon-DEE-DEE-1.jpg?fit=1024%2C1520&ssl=1",
    nombre: "Dee Dee",
    precio: "16000",
    stock: true,
    color: "negro",
    detail: "Pantalon Jean color negro recto",
  },
  {
    id: "6",
    producto: "Remera",
    img: "https://i0.wp.com/suicidaltrendlp.com/wp-content/uploads/2022/08/st-remera.jpg?fit=1024%2C1520&ssl=1",
    nombre: "Way of Life",
    precio: "3920",
    stock: true,
    color: "negro",
    detail: "Remera blanca y negra con estampado",
  },
  {
    id: "7",
    producto: "Pantalon",
    img: "https://i0.wp.com/suicidaltrendlp.com/wp-content/uploads/2022/08/pantalon_skinny.jpg?fit=1024%2C1520&ssl=1",
    nombre: "Suicidal",
    precio: "15000",
    stock: true,
    color: "negro",
    detail: "Pantalon skinny de color negro",
  },
  {
    id: "8",
    producto: "Remera",
    img: "https://i0.wp.com/suicidaltrendlp.com/wp-content/uploads/2022/08/reme-coca-and-sex-8.jpg?fit=1024%2C1520&ssl=1",
    nombre: "Coca Cola",
    precio: "4160",
    stock: false,
    color: "rojo",
    detail: "Remera roja con estampado",
  },
];

export function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });
}

export function getUnProducto(idParams) {
  return new Promise((resolve, reject) => {
    const prodReq = data.find((item) => {
      return item.id == idParams;
    });

    setTimeout(() => {
      if (prodReq === undefined)
        reject(new Error("No se pudo encontrar el producto."));
      else {
        resolve(prodReq);
      }
    }, 2000);
  });
}

export function getUnProductoByCategory(idCategoryParams) {
  return new Promise((resolve) => {
    let filterProduct = data.filter(
      (item) => item.producto === idCategoryParams
    );
    setTimeout(() => resolve(filterProduct), 2000);
  });
}
