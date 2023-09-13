import {promises as fs} from 'fs';

class ProductManager {
    constructor() {
        this.path = "./src/models/products.json";
    }

    writeProducts = async (product) =>{
        let products = await fs.readFile(this.path, "utf-8");
        let productParse = JSON.parse(products);
        let productAll = [...productParse, product];
        await fs.writeFile(this.path, JSON.stringify(product));
        return "Producto Agregado";

    }
}

const product = new ProductManager

product.writeProducts()
