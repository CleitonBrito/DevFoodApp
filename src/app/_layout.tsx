import '@/styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <Slot />
  );
}
