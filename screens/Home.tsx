import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Link } from "react-router-native";
import Card from "../components/Card";
import globalStyle from "../globalStyle";
import { useAppstate } from "../hooks/useAppstate";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "../components/ReviewForm";

const Home = () => {
  const { reviews } = useAppstate();
  const [open, setOpen] = useState(false);
  function closeModal() {
    setOpen(false);
  }
  return (
    <View style={globalStyle.container}>
      <Modal visible={open} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ ...globalStyle.appContainer, ...style.modalContent }}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...style.modalToggle, ...style.modalClose }}
              onPress={closeModal}
            />

            <ReviewForm closeModal={closeModal} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setOpen(true)}
        style={style.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <Link to={`/reviews/${item.key}`} component={TouchableOpacity}>
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </Link>
        )}
      />
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  home: {
    padding: 16,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
