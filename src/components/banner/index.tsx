import { View, Pressable, Text, Image } from 'react-native'

export function Banner() {
 return (
    <View className="w-full h-4 rounded-xl mt-5 mb-4 flex flex-1 flex-row gap-2">
        <Pressable 
            className="h-4 rounded-2xl" 
            key="1"
            onPress={() => console.log("Cliquei no banner 1")}
        >
            <Image 
                source={require("@/assets/banner1.png")}
                className="w-full rounded-2xl"
            />
        </Pressable>
        <Pressable 
            className="h-4 rounded-2xl" 
            key="1"
            onPress={() => console.log("Cliquei no banner 1")}
        >
            <Image 
                source={require("@/assets/banner2.png")}
                className=" rounded-2xl h-full"
            />
        </Pressable>
    </View>
  );
}