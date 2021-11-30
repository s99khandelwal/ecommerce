import MealItem from './MealItem/MealItem';

import Card from '../UI/Card';

import classes from './AvailableMeals.module.css';
const DUMMY_MEALS=[

    {
        id:'m1',
        name:'Power Bank',
        description:'Mi power bank with super fast speed',
        price:22.99,
    },

    {
        id:'m2',

        name:'Headphone',
        description:'Mi Headphone with wireless connectivity',
        price:16.5,
    },

    {
        id:'m3',
        name:'Laptop',
        description:'Lenovo laptop with fast processor speed',
        price:12.99,
    },
    {
        id:'m4',
        name:'Televisions',
        description:'Samsung Televisions with LED Display',
        price:18.99,
    },
];
const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map((meal)=>(<MealItem key={meal.id} id={meal.id} 
    name={meal.name}
     description={meal.description}
      price={meal.price}/>));
    return(
    <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
            </ul>
            </Card>
            </section>
            );
};
export default AvailableMeals;
