import { useRouter } from "expo-router";
import { View, Text, Pressable, StyleSheet } from "react-native";

/*
Header Widget is shared between different components
Header contains Action and Headline



*/

interface HeaderWidgetProps {
  headline: string;
  action: any;
}

export default function HeaderWidget({
  headline,
  action,
}: HeaderWidgetProps): JSX.Element {
  const styles: any = {
    headerWidgetRoot: {
      flexDirection: "row",
      width: "100%",
      height: 32,
      marginTop: 20,
      marginBottom: 20,
    },
    headerActionContainer: {
      position: "absolute",
      zIndex: 2,
      height: "100%",
      justifyContent: "center",
      marginLeft: 18,
      textAligh: "center",
    },
    headerHeadlineContainer: {
      flex: 1,
      alignItems: "center",
      justifyItems: "center",
      justifyContent: "center",
      textAligh: "center",
    },
    headerHeadlineText: {
      fontWeight: "bold",
    },
  };

  const router = useRouter();

  return (
    <View style={styles.headerWidgetRoot}>
      <Pressable
        style={styles.headerActionContainer}
        onPress={() => {
          router.back();
        }}
      >
        <Text style={styles.headerHeadlineText}>Back</Text>
      </Pressable>
      <View style={styles.headerHeadlineContainer}>
        <Text>{headline}</Text>
      </View>
      {action ? (
        <Pressable>
          <Text>Action</Text>
        </Pressable>
      ) : (
        <></>
      )}
    </View>
  );
}
