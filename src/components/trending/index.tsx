import { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native';
import { CardHorizontalFood } from './food';

export interface FoodPropos {
    id: string
    name: string
    price: number
    time: string
    delivery: number
    rating: number
    image: string
    restaurantId: string
}

export function TrendingFoods() {
const [foods, setFoods] = useState<FoodPropos[]>([])

useEffect(() => {
    async function getFoods(){
        const response = await fetch("http://localhost:3000/foods")
        const data = await response.json()
        setFoods(data)
    }

    getFoods();
}, [])
 return (
    <FlatList
        data={foods}
        renderItem={ ({item}) => <CardHorizontalFood food={item}/> }
        horizontal={true}
        contentContainerStyle={{ gap: 14, paddingHorizontal: 16}}
        showsHorizontalScrollIndicator={false}
    />
  );
}