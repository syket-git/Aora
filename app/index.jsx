import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import { images } from "../constants";

import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/globalProvider";

export default function App() {
  const { loading, isLoggedIn } = useGlobalContext();

  if (!loading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-2xl text-white font-psemibold text-center">
              Discover Endless Possibilities with
              <Text className="text-secondary-200"> Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8 "
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 text-sm font-pregular mt-7 text-center">
            Where creativity meets innovation: embark on a journey with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
