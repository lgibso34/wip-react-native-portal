import React, { useState } from "react";
import { Text, Button } from "react-native";
import Modal from "./reusable/Modal";

const Test = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button title="toggle" onPress={() => setOpen(!open)} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
      </Modal>
    </>
  );
};

export default Test;
