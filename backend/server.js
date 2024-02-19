const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
app.use(cors());
const products = require("./products")

app.get("/api/v1/products", (req, res) => {
    const specficDetails = products.map((product) => {
        const { title, productImg, price } = product;
        return { title, productImg, price };
    });
    res.status(200).send(specficDetails);
});
app.get("/productsDetail", (req, res) => {
    res.status(200).send(products);
});
app.get("/api/v1/:id", (req, res) => {
    const { id } = req.params;
    const singleProduct = products.find((product) => product.id == id);
    res.status(200).send(singleProduct);
});



app.listen(port, () => {
    console.log(`Server is listen on port ${port}`);
})