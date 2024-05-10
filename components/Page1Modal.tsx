// Page1Modal.tsx
import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface Props {
  visible: boolean;
  closeModal: () => void;
  handleClick: () => void; // Define handleClick function in your parent component and pass it as a prop
}

const Page1Modal: React.FC<Props> = ({ visible, closeModal, handleClick }) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={closeModal}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.modalBackground}
        onPress={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Activity</Text>
          <Image
            source={require('./img1.png')}
            style={styles.modalImage}
            resizeMode="contain"
          />
          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={handleClick}>
            <Text style={styles.buttonText}>Okay</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    height: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  modalTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  modalImage: {
    height: '76%', // Adjust the width as needed
    aspectRatio: 1, // Maintain aspect ratio
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Page1Modal;
