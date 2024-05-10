import React, { useState, useRef } from 'react';
import { View, TextInput, Button, ScrollView, Text, StyleSheet } from 'react-native';

const GenerativeChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ text: string; from: 'user' | 'bot' }[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);

  const sendMessageToBackend = async () => {
    try {
      const response = await fetch('http://192.168.43.6:3000/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const botResponse = data["parts"][0]["text"];
      setChatHistory(prevChatHistory => [...prevChatHistory, { text: message, from: 'user' }, { text: botResponse, from: 'bot' }]);
      setMessage(''); // Clear the input field after sending message
      scrollToBottom();
    } catch (error) {
      console.error('Error sending message to backend:', error);
    }
  };

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{ justifyContent: 'flex-end', flexGrow: 1 }}
        style={{ flex: 1 }}
      >
        {chatHistory.map((chat, index) => (
          <View key={index} style={[styles.messageContainer, chat.from === 'user' ? styles.userMessage : styles.botMessage]}>
            <Text>{chat.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={setMessage}
          value={message}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={sendMessageToBackend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    borderRadius: 8,
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
});

export default GenerativeChat;
