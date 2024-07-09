import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image,Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

import { icons } from "../../constants";
// import useAppwrite from "../../lib/useAppwrite";
import {  signOut } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
// import image1 from '@/components/badge1.png';
// import image2 from '@/components/badge2.png';
// import image3 from '@/components/badge3.png';
// import { EmptyState,  } from "../../components";
const InfoBox = ({ title, subtitle, containerStyles, titleStyles }) => {
    return (
      <View className={containerStyles}>
        <Text className={`text-white text-center font-psemibold ${titleStyles}`}>
          {title}
        </Text>
        <Text className="text-sm text-gray-100 text-center font-pregular">
          {subtitle}
        </Text>
      </View>
    );
  };

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
//   const { data: posts } = useAppwrite(() => getUserPosts(user.$id));
const DATA = [
    { id: '1', image: require('@/components/badge1.png') },
    { id: '2', image: require('@/components/badge2.png') },
    { id: '3', image: require('@/components/badge4.png') },
    { id: '4', image: require('@/components/badge5.png') }
    // Add more images as needed
  ];
  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);

    router.replace("/sign-in");
  };
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
    </View>
  );
  console.log(user?.username);
//   user?.level +=1
  console.log(user?.level);
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // numColumns={1} // Adjust the number of columns as needed
        // ListEmptyComponent={() => (
        //   <EmptyState
        //     title="No Videos Found"
        //     subtitle="No videos found for this profile"
        //   />
        // )}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={logout}
              className="flex w-full items-end mb-10"
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-5 flex flex-row">
              <InfoBox
                title={user?.level || 0}
                subtitle="Level"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <InfoBox
                title="1.2k"
                subtitle="Badges"
                titleStyles="text-xl"
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      backgroundColor: 'black',
      padding: 30,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 20,
    },
    image: {
      width: 200,
      height: 200,
    },
  });
export default Profile;