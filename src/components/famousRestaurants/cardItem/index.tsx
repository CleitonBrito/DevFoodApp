import { Pressable, Text, Image } from 'react-native';
import { restaurantsProps } from '..';

export function CardItemsRestaurants({ item} : { item :  restaurantsProps}) {
 return (
    <Pressable
        className='flex flex-col items-center justify-center'
        onPress={ ()=> console.log("Clicou no restaurante " + item.name)}
    >
        <Image
            source={{ uri : item.image }}
            className='w-20 h-20 rounded-full'
        />
        <Text
            className='text-sm mt-2 w-20 text-center first-letter leading-4 text-black'
            numberOfLines={2}
        >
            { item.name }
        </Text>
    </Pressable>
  );
}