import { Text, Pressable, StyleSheet } from "react-native";

/*
ComponentButton is a custom button for Leveroi Project.
It is the only Button that should be used across Leveroi App. 

@param {string} type - type of the button. default | disable | accent | reject | green | red
@param {string} content - text content of the button
@param {number} padding - widget level top-bottom padding
@param {function} action - callback function for button press

@return Leveroi Button Component
*/

interface ComponentButtonProps {
  type: string;
  content: string;
  padding: number;
  action: any;
}

export default function ComponentButton({
  type,
  content,
  padding,
  action,
}: ComponentButtonProps): JSX.Element {
  const styles = StyleSheet.create({
    button: {
      marginTop: padding,
      marginBottom: padding,
      backgroundColor: "#1785E6",
      borderRadius: 17,
      width: "80%",
      height: "10%",
      maxHeight: 50,

      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      textAlign: "center",
    },
  });

  return (
    <Pressable onPress={action} style={styles.button}>
      <Text>{content}</Text>
    </Pressable>
  );
}
