import { View, Text } from 'react-native';
import { useState, useEffect } from 'react'
import { ItemRestaurant } from './cardItem'

export interface restaurantsProps {
    id: string
    name: string
    image: string
}

export function Restaurants() {
    const [restaurants, setRestaurants] = useState<restaurantsProps[]>([])

    useEffect(()=>{
        async function getRestaurants(){
            const response = await fetch("http://localhost:3000/restaurants")
            const data = await response.json()
            setRestaurants(data)
        }

        getRestaurants()
    }, [])

    return (
        <View className="px-4 flex flex-col w-full mb-20 gap-4">
            {restaurants.map( item => (
              <ItemRestaurant item={item} key={item.id}/>  
            ))}
        </View>
    );
}