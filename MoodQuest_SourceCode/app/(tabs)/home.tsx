import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from '../../constants'
import { useGlobalContext } from "../../context/GlobalProvider"; 
const HOME = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  return (
    
    <SafeAreaView className="bg-primary">
      <FlatList
        data = {[{id:1}]}
        keyExtractor={(item)=> (item.id).toString()}
        renderItem={({item}) => (
          <Text>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome back,
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {user?.username}
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
              
            </View>
            <View style={styles.textBlockContainer}>
                <Text style={styles.textBlock}>Welcome! You're all set to embark on a quest to improve your mental wellbeing</Text>
              </View>
            {/* <SearchInput /> */}

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Explore
              </Text>

              {/* <Trending posts={latestPosts ?? []} /> */}
            </View>
          </View>
        )}
      />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
  textBlockContainer: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  textBlock: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
});

export default HOME