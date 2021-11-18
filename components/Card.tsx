import React from "react";
import { StyleSheet, View } from "react-native";

const Card: React.FC = ({ children }) => {
  return (
    <View style={style.card}>
      <View style={style.cardContent}>{children}</View>
    </View>
  );
};
const style = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});

export default Card;
