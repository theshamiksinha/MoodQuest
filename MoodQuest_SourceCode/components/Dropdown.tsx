// Dropdown.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dropdown: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Daily Challenges</Text>
      {/* Add your daily challenges here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Dropdown;
