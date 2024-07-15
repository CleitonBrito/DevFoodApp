import '@/app/styles/main.css'
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <Slot />
  );
}
