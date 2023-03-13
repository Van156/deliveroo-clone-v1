import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animtable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { images } from "../constants";
const PreparingOrderScreen = ({ navigation }) => {
  //   const navigation = useNavigation();

  useEffect(() => {
    console.log("Hey here ");

    setTimeout(() => {
      navigation.navigate("Delivery");
      console.log("in bucle ");
    }, 4000);
    console.log("Hey I am here bro");
  }, []);
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animtable.Image
        source={images.orderLoading}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animtable.Text
        animation={"slideInUp"}
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animtable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
