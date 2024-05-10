import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import IslandModal from './IslandModal';

// Island interface and styles remain the same

const DailyChallengesMap: React.FC = () => {
  // Dummy data for islands with their positions
  const islands: Island[] = [
    { id: 1, name: 'Island 1', x: 50, y: 100 },
    { id: 2, name: 'Island 2', x: 200, y: 200 },
    { id: 3, name: 'Island 3', x: 70, y: 300 },
    { id: 4, name: 'Island 4', x: 150, y: 500 },
    { id: 5, name: 'Island 5', x: 10, y: 600 },
    { id: 6, name: 'Island 6', x: 100, y: 800 },
    { id: 7, name: 'Island 7', x: 200, y: 1000 },
    // Add more islands as needed
  ];

  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    // Calculate the maximum height needed for island container
    let maxY = 0;
    islands.forEach(island => {
      if (island.y > maxY) {
        maxY = island.y;
      }
    });
    // Set container height based on maximum Y position
    setContainerHeight(maxY + 200); // Adding extra space for padding and margins
  }, [islands]);

  const [selectedIsland, setSelectedIsland] = useState<number | null>(null);

  const selectIsland = (id: number) => {
    setSelectedIsland(id);
  };

  const closeModal = () => {
    setSelectedIsland(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <ScrollView style={styles.mapContainer} contentContainerStyle={{ ...styles.map, height: containerHeight }}>
        {islands.map(island => (
          <View key={island.id} style={[styles.islandContainer, { left: island.x, top: island.y }]}>
            <TouchableOpacity onPress={() => selectIsland(island.id)} style={styles.island}>
              <Image source={require('./image123.png')} style={styles.islandImage} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <IslandModal visible={selectedIsland !== null} selectedIsland={selectedIsland} closeModal={closeModal} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  mapContainer: {
    width: 300, // Set the width of the map container
  },
  map: {
    position: 'relative',
  },
  islandContainer: {
    position: 'absolute',
  },
  island: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  islandImage: {
    width: 100,
    height: 100,
  },
  islandText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default DailyChallengesMap;
