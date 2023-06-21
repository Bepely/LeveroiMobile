import { View, Text } from "react-native";
import { Link, useRouter } from "expo-router";

import ComponentButton from "../components/global/buttonComponent";

export default function Index() {
  const router = useRouter();

  const navigateToDetails = (route: string) => {
    router.push(`/${route}`);
  };

  const styles: any = {
    container: {
      width: "100%",
      height: "100%",
    },
  };

  return (
    <View style={styles.container}>
      <ComponentButton
        type="default"
        content="New Lever"
        padding={17}
        action={() => navigateToDetails("lever")} // Pass the function reference
      />
      <ComponentButton
        type="default"
        content="Gallery"
        padding={17}
        action={() => navigateToDetails("gallery")} // Pass the function reference
      />
      <ComponentButton
        type="default"
        content="Setting"
        padding={17}
        action={() => navigateToDetails("settings")} // Pass the function reference
      />
    </View>
  );
}
