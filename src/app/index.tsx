import { Text, View, ScrollView } from "react-native";
import Constants from "expo-constants";

import { Header } from "@/components/header";
import { Search } from "@/components/search";
import { Section } from "@/components/section";
import { TrendingFoods } from "@/components/trending";
import { FamousRestaurants } from "@/components/famousRestaurants";
import { Restaurants } from "@/components/restaurants";
import { Banner } from "@/components/banner"

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
        style={{ flex: 1 }} 
        className="bg-slate-200 pt-4"
        showsVerticalScrollIndicator={false}
    >
        <View className="w-full px-4" style={{marginTop: statusBarHeight + 8}}>
            <Header
            />
            <Banner 
            />
            <Search
            />
            <Section 
                name="Comidas em alta"
                label="Veja mais"
                size="text-2xl"
                action={ () => console.log("Clicou no veja mais")}
            />
            <TrendingFoods
            />
            <Section 
                name="Famosos no devFood"
                label="Veja todos"
                size="text-xl"
                action={ () => console.log("Clicou no famosos")}
            />
            <FamousRestaurants
            />
            <Section 
                name="Restaurantes"
                label="Veja todos"
                size="text-xl"
                action={ () => console.log("Clicou no restaurantes")}
            />
            <Restaurants
            />
        </View>
    </ScrollView>
  );
}
