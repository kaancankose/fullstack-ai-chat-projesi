import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000/api/messages"; // .NET backend
const AI_URL = "http://localhost:7860/run/predict"; // Hugging Face AI service

export default function App() {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(BACKEND_URL).then((res) => setMessages(res.data)).catch(() => {});
  }, []);

  const handleSend = async () => {
    if (!message.trim() || !nickname.trim()) return;
    try {
      const aiRes = await axios.post(AI_URL, { data: [message] });
      const sentiment = aiRes.data.data[0];
      const msgObj = { nickname, text: message, sentiment };

      await axios.post(BACKEND_URL, msgObj);
      setMessages((prev) => [...prev, msgObj]);
      setMessage("");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (!nickname) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.title}>Enter your nickname</Text>
        <TextInput
          style={styles.input}
          placeholder="Nickname"
          value={nickname}
          onChangeText={setNickname}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AI Chat (Mobile)</Text>

      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text>
              <Text style={styles.bold}>{item.nickname}:</Text> {item.text}{" "}
              <Text style={styles.sentiment(item.sentiment)}>
                ({item.sentiment})
              </Text>
            </Text>
          </View>
        )}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fafafa" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 10, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "80%",
    borderRadius: 8,
  },
  inputRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  message: { marginVertical: 4 },
  bold: { fontWeight: "bold" },
  sentiment: (s) => ({
    color: s === "positive" ? "green" : s === "negative" ? "red" : "gray",
  }),
});
