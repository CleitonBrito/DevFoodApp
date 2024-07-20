import { Pressable, Text, View } from 'react-native';

interface Props {
    name: string;
    size: "text-lg" | "text-xl" | "text-2xl";
    label: string;
    action: () => void;

}

export function Section({name, size, label, action} : Props) {
 return (
    <View className="w-full flex flex-row items-center justify-between px-4">
        <Text className={`${size} font-semibold my-4 self-start`}>{ name }</Text>

        <Pressable onPress={action}>
            <Text className='text-slate-200 bg-green-600 px-2 py-1 rounded-full'>{ label }</Text>
        </Pressable>
    </View>
  );
}