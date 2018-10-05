import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Restaurants extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [
            {
              "_links": {
                "self": "https://dev-api.grupoanga.com/goomer/restaurants/5b8a9303dc07be5b2f94d03b",
                "menu": "https://dev-api.grupoanga.com/goomer/restaurants/5b8a9303dc07be5b2f94d03b/menu"
              },
              "_id": "5b8a9303dc07be5b2f94d03b",
              "id": "bread-bakery",
              "name": "Bread & Bakery",
              "category": "Bakery",
              "deliveryEstimate": "25m",
              "rating": 4.9,
              "imagePath": "assets/img/restaurants/breadbakery.png",
              "about": "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
              "hours": "Funciona de segunda à sexta, de 8h às 23h",
              "__v": 1
            },
            {
              "_links": {
                "self": "https://dev-api.grupoanga.com/goomer/restaurants/5b8a9312dc07be5b2f94d03c",
                "menu": "https://dev-api.grupoanga.com/goomer/restaurants/5b8a9312dc07be5b2f94d03c/menu"
              },
              "_id": "5b8a9312dc07be5b2f94d03c",
              "id": "burger-house",
              "name": "Burger House",
              "category": "Hamburgers",
              "deliveryEstimate": "100m",
              "rating": 3.5,
              "imagePath": "assets/img/restaurants/burgerhouse.png",
              "about": "40 anos se especializando em trash food.",
              "hours": "Funciona todos os dias, de 10h às 22h",
              "__v": 7
            },
            {
              "_links": {
                "self": "https://dev-api.grupoanga.com/goomer/restaurants/5b8a931adc07be5b2f94d03d",
                "menu": "https://dev-api.grupoanga.com/goomer/restaurants/5b8a931adc07be5b2f94d03d/menu"
              },
              "_id": "5b8a931adc07be5b2f94d03d",
              "id": "coffee-corner",
              "name": "Coffee Corner",
              "category": "Coffee Shop",
              "deliveryEstimate": "30-40m",
              "rating": 4.8,
              "imagePath": "assets/img/restaurants/coffeecorner.png",
              "about": "A Coffe Corner foi eleita a melhor cafeteria da cidade.",
              "hours": "Funciona de segunda à sábado, de 6h às 22h",
              "__v": 1
            },
            {
              "_links": {
                "self": "https://dev-api.grupoanga.com/goomer/restaurants/5b8a9324dc07be5b2f94d03e",
                "menu": "https://dev-api.grupoanga.com/goomer/restaurants/5b8a9324dc07be5b2f94d03e/menu"
              },
              "_id": "5b8a9324dc07be5b2f94d03e",
              "id": "green-food",
              "name": "Green Food",
              "category": "Saudável",
              "deliveryEstimate": "75m",
              "rating": 4.1,
              "imagePath": "assets/img/restaurants/greenfood.png",
              "about": "Comida saudável é no Green Food. Compramos barato, vendemos caro. ;)",
              "hours": "Somente em horário de almoço, das 11h às 15h",
              "__v": 0
            }
        ]
        };
    }
/*
    componentDidMount() {
        fetch("https://dev-api.grupoanga.com/goomer/restaurants", { mode: 'no-cors'})
        .then(res => res.json())
        .then(jsondata => console.log(jsondata))
        .then(
            (result) => {
                this.setState({
                isLoaded: true,
                items: result.items
                });
            },
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
        )
    }
*/
    render() {
        return (
            <div className="app">
                <main>
                    <h1>restaurants</h1>
                    <List component="div">
                    {this.state.items.map((restaurant) =>
                        <ListItem button>
                        <ListItemText primary="Nome" secondary={restaurant.name} />
                        <ListItemText primary="Categoria" secondary={restaurant.category} />
                        </ListItem>
                    )}
                    </List>
                </main>
            </div>
        )
    }
}

export default Restaurants;