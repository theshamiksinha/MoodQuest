import { Image, ScrollView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {Slot} from 'expo-router'
import {Link, Redirect, router} from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context";
import {images } from "../constants";
import { TouchableOpacity, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from "react-native";
import { useGlobalContext } from '../context/GlobalProvider'
// import { CustomButton } from "../components";


type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles?: ViewStyle;
  textStyles?: TextStyle;
  isLoading?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default function App(){
  const {isLoading,isLoggedIn } = useGlobalContext();
  if(!isLoading && isLoggedIn){
    return <Redirect href = "/home" />
  }
  return(
    <SafeAreaView className="bg-primary h-full">
      {/* <Loader isLoading={loading} /> */}

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
          <Link href = "/home"> Go to home</Link>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

