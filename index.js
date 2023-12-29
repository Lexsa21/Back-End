const fs = require('fs');

function save(param_path, param_products) {
    fs.promises.writeFile(param_path, JSON.stringify(param_products), 'utf-8')
        .then(res => {
            console.log("Producto guardado correctamente");
        })
        .catch(err => {
            console.log(`Hubo un error: ${err}`);
        })
}

class ProductManager{
    constructor(){
        this.products = [];
        this.id = 0;
        this.path = './files/products.json';
    }

getProducts() {
        fs.promises.readFile(this.path, 'utf-8')
            .then(data => {
            this.products = JSON.parse(data);
            console.log(this.products);
            })
            .catch(err => `Hubo un error: ${err}`);
}


/*-----------------------------------------  Funcion asincrona --------------------------------------------*/

addProduct(title, description, price, thumbnail, code, stock) {

(
    async () => {
        if (!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Todos los campos son obligatorios.");
        }   else {
            let bandera = true;
            try {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                this.products = JSON.parse(data);
            
                do {  
                // Bucle de aumento de ID

                    if (!this.products.some(prod => prod.id === this.id)) {
                        // Condicional de ID para validar que no se repita
                        bandera = false;
                        if (!this.products.some(prod => prod.code === code)){
                            // Condicional para que no se repita el codigo
                            const product = { id: this.id, title: title, description: description, price: price, thumbnail: thumbnail, code: code, stock: stock };
                            this.products.push(product);

                            save(this.path, this.products);

                        } else {
                            console.log(`Ya existe un producto con este codigo ${code}`);
                        }
                    } else {
                    this.id += 1;
                    }
                } while (bandera)
            } catch(err) {
                console.log(`Hubo un error: ${err}`);
            }
        }
    }
    )();
}


getProductById(id) {

    (
    async () => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            this.products = JSON.parse(data);
            const element = this.products.find(prod => prod.id === id);
            if (element){
                console.log(element);
            } else {
                console.log(`No existe ningun producto con el ID ${id}`);
            }
        } catch(err) {
                console.log(`Existe un error: ${err}`);
        }
        }
    )();
}

updateProduct(id, title, description, price, thumbnail, code, stock) {

(
    async () => {
        try {
          const data = await fs.promises.readFile(this.path, 'utf-8');
          this.products = JSON.parse(data);
          const element = this.products.find(prod => prod.id === id);
          if (element){
            this.products.map((item) => {
              if(item.id === element.id){
                if (!title || !description || !price || !thumbnail || !code || !stock){
                    console.log("Todos los campos son obligatorios.");
                } else {
                    item.title = title;
                    item.description = description;
                    item.price = price;
                    item.thumbnail = thumbnail;
                    item.code = code;
                    item.stock = stock;

                    save(this.path, this.products);

                }
              }
            })
            
          } else {
            console.log(`No existe ningun producto con el ID ${id}`);
          }
        } catch(err) {
            console.log(`Existe un error: ${err}`);
        }
    }
    )()
}

deleteProduct(id) {
    
    
(
    async () => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            this.products = JSON.parse(data);
            const element = this.products.find(prod => prod.id === id);
            if (element){
                const eIndex = this.products.indexOf(element);
                this.products.splice(eIndex, 1);

                fs.promises.writeFile(this.path, JSON.stringify(this.products), 'utf-8')
                    .then(res => {
                        console.log("Producto ELIMINADO");
                    })
                    .catch(err => {
                        console.log(`Existe un error: ${err}`);
                    })

            } else {
                console.log(`No existe ningun producto con el ID ${id}`);
            }
            } catch(err) {
                console.log(`Existe un error: ${err}`);
            }
    }
    )()
  }

}

const pm = new ProductManager();

// pm.getProducts();

// pm.addProduct("Mesa", "Mesa de pvc y hierro color negro", 10000, 'imagenProducto', 444, 5);

// pm.addProduct("Silla","Silla de pvc y hierro color blanco", 8000,'imagenProducto',777, 5);

// pm.getProducts();

// pm.getProductById(3);

// pm.updateProduct(2, "Espejo", "Espejo con bordes de madera", 50000, 'imagenProducto', 555, 10);

// pm.getProducts();

pm.deleteProduct(2);

// pm.getProducts();
