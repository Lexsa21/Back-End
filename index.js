class ProductManager{
    constructor(){
        this.products = [];
        this.id = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock ){
            console.log('Todos los campos son obligatorios');
        }

        if(!this.products.some((p)=>p.code === code)){

            let newProduct = {id: this.id++, title, description, price, thumbnail, code, stock}

            this.products.push(newProduct);
            console.log(`El pruducto ${title} se agrego exitosamente`);
        }else{
            console.log(`Ya existe un producto con este codigo ${code}`);
        }
    }

    getProducts(){
        return this.products;
    }


    getProductById(id){
        let product = this.products.find((prod)=> prod.id === id)

        if (product == undefined){
            return "Not found!";
        }else{
            return product;
        }
    }
}

const product = new ProductManager()

/*-------------- Traer Productos --------------------*/ 

product.addProduct("Mesa","Mesa de pvc y hierro color negro", 10000,'imagenProducto', 444, 10)
product.addProduct("Silla","Silla de pvc y hierro color blanco", 8000,'imagenProducto', 777, 20)

/*-------------- Muestra de los productos traidos --------------------*/ 

console.log(product.getProducts());

/*-------------- Verificacion de code --------------------*/ 

product.addProduct("Lampara","Lampara de acero", 10000,'imagenProducto', 444, 15)

/*-------------- Busqueda por Id --------------------*/ 
console.log(product.getProductById(1));
console.log(product.getProductById(3));