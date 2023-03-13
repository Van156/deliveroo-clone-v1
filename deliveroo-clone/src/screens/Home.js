import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import { Icon } from "react-native-elements";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
import sanityClient from "../../sanity";

const Home = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type== "featured"]{
        ...,
        restaurante[]->{
          ...,
          dishes[]->
        }
      }
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className=" pt-5 ">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-1">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs ">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-1">
        <View className="flex-row items-center flex-1  space-x-2 bg-gray-200 p-1">
          <Icon name="search1" type="antdesign" color={"gray"} size={20} />

          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} />
      </View>

      <ScrollView>
        <Categories />
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
