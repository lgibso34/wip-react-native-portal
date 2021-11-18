import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useParams } from "react-router-native";
import globalStyle from "../globalStyle";
import Card from "../components/Card";
import { useAppstate } from "../hooks/useAppstate";
import { images } from "../global";

const ReviewDetails = () => {
  const { reviews } = useAppstate();
  const { id } = useParams<{ id?: string }>();
  const review = reviews.find((r) => r.key === id);
  return (
    <View style={globalStyle.container}>
      {review && (
        <Card>
          <Text>{review.title}</Text>
          <Text>{review.body}</Text>
          <View style={style.rating}>
            <Text>Gamezone rating: </Text>
            {/* @ts-ignore */}
            <Image source={images.ratings[review.rating]} />
          </View>
        </Card>
      )}
    </View>
  );
};

export default ReviewDetails;

const style = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
