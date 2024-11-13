const app = require('express')();


app.listen(3000, () => console.log("test"))

app.get('/plants', (req, res) => {
    res.send(
        [
            {
                "id": 1,
                "name": "Ajuga reptans",
                "preco": "20,00",
                "img": "../../assets/ajuga.png",
                "estoque": 0
            },
            {
                "id": 2,
                "name": "Cordyline fruticosa",
                "preco": "35,00",
                "img": "../../assets/cordyline.png",
                "estoque": 3
            },
            {
                "id": 3,
                "name": "Crassula ovata",
                "preco": "23,20",
                "img": "../../assets/crassula.png",
                "estoque": 2
            },
            {
                "id": 4,
                "name": "Cyperus rotundus",
                "preco": "20,00",
                "img": "../../assets/cyperus.png",
                "estoque": 6
            },
            {
                "id": 5,
                "name": "Delairea odorata",
                "preco": "18,5",
                "img": "../../assets/delairea.png",
                "estoque": 14
            },
            {
                "id": 6,
                "name": "Datura metel",
                "preco": "26,00",
                "img": "../../assets/datura.png",
                "estoque": 1
            }
        ]
    )
})