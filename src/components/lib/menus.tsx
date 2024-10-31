import image1 from '../../assets/images/menu/image1.webp'
import image2 from '../../assets/images/menu/image2.webp'
import image3 from '../../assets/images/menu/image3.webp'
import image4 from '../../assets/images/menu/image4.webp'
import image5 from '../../assets/images/menu/image5.webp'
import image6 from '../../assets/images/menu/image6.webp'
import image7 from '../../assets/images/menu/image7.webp'
import image8 from '../../assets/images/menu/image8.webp'


const allItems = [
    {
        image: image1,
        price: '$9.9',
        header: 'Fried Eggs',
        text: 'Crispy fried eggs with a hint of salt, served with fresh lettuce and herbs.',
        category: 'Breakfast'
    }, 
    {
        image: image2,
        price: '$15.99',
        header: 'Hawaiian Pizza',
        text: 'Classic pizza topped with fresh pineapple, ham, and melting cheese.',
        category: 'Main Dish'
    }, 
    {
        image: image3,
        price: '$7.25',
        header: 'Martinez Cocktail',
        text: 'A blend of gin, sweet vermouth, and maraschino with an orange twist.',
        category: 'Drink'
    },
    {
        image: image4,
        price: '$20.99',
        header: 'Butterscotch Cake',
        text: 'Rich butterscotch layered cake topped with creamy caramel frosting.',
        category: 'Dessert'
    }, 
    {
        image: image5,
        price: '$5.89',
        header: 'Mint Lemonade',
        text: 'Refreshing lemonade with fresh mint, tangy lemon, and a touch of lime.',
        category: 'Drink'
    },
    {
        image: image6,
        price: '$18.05',
        header: 'Chocolate Ice Cream',
        text: 'Smooth, creamy chocolate ice cream made with rich cocoa.',
        category: 'Dessert'
    },
    {
        image: image7,
        price: '$12.55',
        header: 'Cheese Burger',
        text: 'Juicy beef patty topped with cheddar, lettuce, and our signature sauce.',
        category: 'Main Dish'
    }, 
    {
        image: image8,
        price: '$12.99',
        header: 'Classic Waffles',
        text: 'Golden waffles served with syrup and a dusting of powdered sugar.',
        category: 'Breakfast'
    }
];

 const breakfastItems = [
    {
        image: image1,
        price: '$9.9',
        header: 'Fried Eggs',
        text: 'Crispy fried eggs with a hint of salt, served with fresh lettuce and herbs.',
        category: 'Breakfast'
    }, 
    {
        image: image8,
        price: '$12.99',
        header: 'Classic Waffles',
        text: 'Golden waffles served with syrup and a dusting of powdered sugar.',
        category: 'Breakfast'
    },
 ]

 const mainDishItems = [
    {
        image: image2,
        price: '$15.99',
        header: 'Hawaiian Pizza',
        text: 'Classic pizza topped with fresh pineapple, ham, and melting cheese.',
        category: 'Main Dish'
    }, 
    {
        image: image7,
        price: '$12.55',
        header: 'Cheese Burger',
        text: 'Juicy beef patty topped with cheddar, lettuce, and our signature sauce.',
        category: 'Main Dish'
    }, 
 ]

 const drinksItems = [
    {
        image: image3,
        price: '$7.25',
        header: 'Martinez Cocktail',
        text: 'A blend of gin, sweet vermouth, and maraschino with an orange twist.',
        category: 'Drink'
    },
    {
        image: image5,
        price: '$5.89',
        header: 'Mint Lemonade',
        text: 'Refreshing lemonade with fresh mint, tangy lemon, and a touch of lime.',
        category: 'Drink'
    },
 ]

 const dessertItems = [
    {
        image: image4,
        price: '$20.99',
        header: 'Butterscotch Cake',
        text: 'Rich butterscotch layered cake topped with creamy caramel frosting.',
        category: 'Dessert'
    },
    {
        image: image6,
        price: '$18.05',
        header: 'Chocolate Ice Cream',
        text: 'Smooth, creamy chocolate ice cream made with rich cocoa.',
        category: 'Dessert'
    },
 ]


 export {
    allItems, breakfastItems, mainDishItems, dessertItems, drinksItems
 }