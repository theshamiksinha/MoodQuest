import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Page1Modal from './Page1Modal';
import Page2Modal from './Page2Modal';
import Page3Modal from './Page3Modal';
import Page4Modal from './Page4Modal';

interface Props {
  visible: boolean;
  selectedIsland: number | null;
  closeModal: () => void;
}

const IslandModal: React.FC<Props> = ({ visible, selectedIsland, closeModal }) => {
  const [page1Visible, setPage1Visible] = useState(false);
  const [page2Visible, setPage2Visible] = useState(false);
  const [page3Visible, setPage3Visible] = useState(false);
  const [page4Visible, setPage4Visible] = useState(false);

  const openPage1Modal = () => setPage1Visible(true);
  const openPage2Modal = () => setPage2Visible(true);
  const openPage3Modal = () => setPage3Visible(true);
  const openPage4Modal = () => setPage4Visible(true);

  return (
    <Modal visible={visible} transparent={true} onRequestClose={closeModal}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContainer}>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Choose skill to work upon</Text>
              <View style={styles.subMenuContainer}>
                <TouchableOpacity onPress={openPage1Modal} style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Page 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openPage2Modal} style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Page 2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openPage3Modal} style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Page 3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openPage4Modal} style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Page 4</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
      {page1Visible && <Page1Modal visible={true} closeModal={() => setPage1Visible(false)} />}
      {page2Visible && <Page2Modal visible={true} closeModal={() => setPage2Visible(false)} />}
      {page3Visible && <Page3Modal visible={true} closeModal={() => setPage3Visible(false)} />}
      {page4Visible && <Page4Modal visible={true} closeModal={() => setPage4Visible(false)} />}
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
