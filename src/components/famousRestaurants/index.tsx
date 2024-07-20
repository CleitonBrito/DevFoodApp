import { FlatList } from 'react-native';
import { useState, useEffect } from 'react'
import { CardItemsRestaurants } from './cardItem'

export interface restaurantsProps {
    id: string
    name: string
    image: string
}

export function FamousRestaurants() {
    const [restaurants, setRestaurantes] = useState<restaurantsProps[]>([])

    useEffect(() => {
        async function getRestaurants(){
            const response = await fetch("https://my-json-server.typicode.com/CleitonBrito/RotaDosSaboresFakerApi/restaurants")
            const data = await response.json()
            setRestaurantes(data)
        }

        getRestaurants();
    }, [])
    return (
        <FlatList
            data={restaurants}
            renderItem={ ({item}) => <CardItemsRestaurants item={item}/> }
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingHorizontal: 16}}
            showsHorizontalScrollIndicator={false}
        />
    );
}