import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import DailyChallengesMap from '@/components/DailyChallengesMap';

const Games = () => {
  return (
    <ImageBackground source={require('@/components/background_image.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <DailyChallengesMap />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Games;
