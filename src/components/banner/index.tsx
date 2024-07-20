import { FlatList, Pressable, Image } from 'react-native'
import { useState } from 'react'

export function Banner() {
    const [images, setimages] = useState([
        require('@/assets/banner1.png'),
        require('@/assets/banner2.png')
    ]);

    return (
        <FlatList
            className='w-full h-36 md:h-50 mt-5'
            data={images}
            renderItem={ ({ item, index }) => (
                <Pressable 
                    className="h-full rounded-2xl" 
                    key="1"
                    onPress={() => console.log("Cliquei no banner " + (index+1))}
                >
                    <Image 
                        source={ item }
                        className="w-full h-10 rounded-2xl"
                        key={index}
                        style={{
                            height: "100%"
                        }}
                    />
                </Pressable>
            )}
            horizontal={true}
            contentContainerStyle={{ gap: 10, paddingHorizontal: 10}}
            showsHorizontalScrollIndicator={false}
        />
    );
}