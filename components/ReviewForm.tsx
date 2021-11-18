import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useForm } from "react-hook-form";
import globalStyle from "../globalStyle";
import { useAppstate } from "../hooks/useAppstate";

const ReviewForm = ({ closeModal }: { closeModal: () => void }) => {
  const { setReviews } = useAppstate();
  const {
    register,
    handleSubmit,
    setValue,
    //getValues
  } = useForm();

  React.useEffect(() => {
    register("title");
    register("body");
    register("rating");
  }, [register]);

  // [label, name]
  const inputs = [
    ["Title", "title"],
    ["Body", "body"],
    ["Rating", "rating"],
  ];

  function onSubmit(data: any) {
    // Alert.alert("FormData", JSON.stringify(data));
    setReviews((prev) => [...prev, { ...data, key: Math.random().toString() }]);
    closeModal();
  }

  return (
    <View>
      {inputs.map(([label, name]) => (
        <TextInput
          key={name}
          style={style.input}
          placeholder={label}
          onChangeText={(text) => setValue(name, text)}
          keyboardType={name === "rating" ? "numeric" : undefined}
        />
      ))}
      <View style={style.reviewButton}>
        <Button
          title="Add Review"
          onPress={handleSubmit(onSubmit)}
          color="white"
          // ? [REVISIT] why you no work. BECAUSE IT ONLY DOES I ON FIRST RENDER. there are no renders after that
          // disabled={Object.values(getValues()).some((val) => !val)}
        />
      </View>
    </View>
  );
};

export default ReviewForm;

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  reviewButton: {
    backgroundColor: "rebeccapurple",
    marginTop: 8,
    padding: 4,
    borderRadius: 4,
  },
});
