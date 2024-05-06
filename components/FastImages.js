import { Image } from "expo-image";
import React from "react";
import { View, FlatList } from "react-native";

const FastImages = () => {
  const imageUris = [];
  const startingNumber = 400;
  const numberOfImages = 500; 

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";


  for (let i = 0; i < numberOfImages; i++) {
    const imageUrl = `https://picsum.photos/${startingNumber + i}`;
    imageUris.push(imageUrl);
  }
  const renderItem = ({ item }) => {
    return (
      <View style={{ margin: 5 }}>
        <Image
          style={{ width: 80, height: 100 }}
          source={{ uri: item }}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={imageUris}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
      />
    </View>
  );
};

export default FastImages;
