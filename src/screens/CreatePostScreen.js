import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

export default function CreatePostScreen() {
  const [description, setDescription] = useState("");
  const onSubmit = () => {
    console.warn("On Submit", description);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { marginBottom: 10 }]}
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={150}
    >
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <TextInput
        placeholder="What is on your mind?"
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.buttonContainer}>
        <Button title="Post" onPress={onSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: "auto",
  },
});
