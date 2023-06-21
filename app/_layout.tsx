import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function HomeLayout() {
  const styles: any = {
    paddingTop: "10%",
    paddingBottom: "10%",
  };
  return (
    <View style={styles}>
      <Slot />
    </View>
  );
}
