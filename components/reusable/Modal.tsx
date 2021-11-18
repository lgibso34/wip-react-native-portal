import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import Portal from "./Portal";

interface Props {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
  onClose?: () => {} | void;
}

const Modal = ({ children, trigger, onClose, open }: Props) => {
  const [_open, set_open] = useState(false);

  function _onClose() {
    set_open(false);
    onClose && onClose();
  }

  return (
    // <View>
    //   {/* {trigger && (
    //     <TouchableOpacity onPress={toggleOpen}>{trigger}</TouchableOpacity>
    //   )} */}
    // ? [REVISIT]
    <Portal visible={open ?? _open} id="Modal">
      {open && (
        <View
          style={[
            {
              justifyContent: "center",
              flex: 1,
              margin: 2,
            },
          ]}
        >
          <TouchableOpacity onPress={_onClose} style={[style.backdrop]} />
          <View style={style.content}>
            <TextInput
              style={style.header}
              editable={false}
              value={`This is the header`}
            />

            <View style={style.actualContent}>{children}</View>

            <View style={style.actions}>
              <Button title="Cancel" onPress={_onClose} />
              <Button title="Ok" onPress={_onClose} />
            </View>
          </View>
        </View>
      )}
    </Portal>
    // </View>
  );
};

export default Modal;

const style = StyleSheet.create({
  backdrop: {
    opacity: 0.7,
    backgroundColor: "black",
    flex: 1,
    position: "absolute",
    top: 0,
    zIndex: 9998,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  content: {
    height: "50%",
    backgroundColor: "white",
    borderRadius: 4,
    zIndex: 9999,
    padding: 16,
  },
  header: {
    borderColor: "lightgray",
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  actualContent: {
    paddingVertical: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: "auto",
    paddingTop: 8,
  },
});
