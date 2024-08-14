import { Text, View, SafeAreaView, Button, StyleSheet } from "react-native";
/*{flex: 1,
justifyContent: "center",
alignItems: "center", }*/
export default function index() {
  return (
    <SafeAreaView style = {backgroundStyle.container}>
      <Text color = 'white'> 
        Edit app/Queue Matching.tsx to edit this screen. I want to see if this will go over the border of the app.
      </Text>
      <Button
        color = "green"
        title = "Team Name" 
        onPress={() => console.log("Team Name pressed")}
      />
      <Button
        color = "blue"
        title = "Button 2" 
        onPress={() => console.log("Team Name pressed")} />
    </SafeAreaView>
    );
}

  const backgroundStyle = StyleSheet.create ({
    container: {
      flex: 1, 
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#960C22",
      textShadowColor: "#FFFFFF"
    },

  });
  const teamStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center", 
    },
  });
  const restStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "right", 
    },
  });
  