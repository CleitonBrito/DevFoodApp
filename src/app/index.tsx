import { Text, View, ScrollView } from "react-native";
import Constants from "expo-constants";

import { Header } from "@/components/header";
import { Search } from "@/components/Search";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
        style={{ flex: 1 }} 
        className="bg-slate-200"
        showsVerticalScrollIndicator={false}
    >
        <View className="w-full px-4" style={{marginTop: statusBarHeight + 8}}>
            <Header />

            <Search />
        </View>
    </ScrollView>
  );
}
