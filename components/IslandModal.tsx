// IslandModal.tsx
import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

interface Props {
  visible: boolean;
  selectedIsland: number | null;
  closeModal: () => void;
  navigateToPage: (page: string) => void;
}

const IslandModal: React.FC<Props> = ({ visible, selectedIsland, closeModal, navigateToPage }) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={closeModal}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Choose skill to work upon</Text>
              <View style={styles.subMenuContainer}>
                <TouchableOpacity onPress={() => navigateToPage('Page1')} style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Page 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToPage('Page2')} style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Page 2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToPage('Page3')} style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Page 3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToPage('Page4')} style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Page 4</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
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
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
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
    color: 'black',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  subMenuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  subMenuItem: {
    width: 80,
    height: 80,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  subMenuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default IslandModal;
