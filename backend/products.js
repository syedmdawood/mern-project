const products = [
    {
        id: 1, title: "Shirts", productImg: "https://media.istockphoto.com/id/1149035726/photo/white-t-shirt-on-a-young-man-isolated-on-white-background-front-and-back-view.jpg?s=1024x1024&w=is&k=20&c=G8PzS2t8TPvUORXyQdStPchCKxELtV28yRgoGHrNdII=", price: "20$", rating: "5", review: "Best Shirt in the market"
    },
    {
        id: 2, title: "Pants", productImg: "https://cdn.pixabay.com/photo/2015/02/09/14/07/funny-629675_1280.jpg", price: "25$", rating: "4.5", review: "Best Pants in the market"
    },
    {
        id: 3, title: "Tie", productImg: "https://cdn.pixabay.com/photo/2013/11/14/12/31/neckties-210346_1280.jpg", price: "10$", rating: "5", review: "Best Tie in the market"
    }
]

module.exports = products;



// app.get("/api/v1/1", (req, res) => {
//     const specficProduct = products.find((product) => product.id === 1);
//     res.status(200).send(specficProduct);
// })

// app.get("/api/v1/:prodictID", (req, res) => {
//     console.log(req.params);
// })