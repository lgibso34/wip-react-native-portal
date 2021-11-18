import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { useGlobalStyles } from "../globalStyle";
import Portal from "./reusable/Portal";
// import ReactDOM from "react-dom";

type DrawerProps = {
  icon: React.ReactNode;
  open: boolean;
  onClose: () => any;
  children: React.ReactNode;
  id?: string;
};

// ReactDOM.createPortal();

const Drawer = ({
  icon,
  children,
  open,
  onClose,
  id = "Drawer",
}: DrawerProps) => {
  const globalStyle = useGlobalStyles();
  const dimensions = useWindowDimensions();

  const xValue = useRef(new Animated.Value(-400)).current;

  // const _open = open ?? drawerOpen;

  if (open) {
    animate(xValue, 0);
  }

  function _onClose() {
    animate(xValue, open ? -dimensions.width : 0, () => {
      // setDrawerOpen(!_open);
      onClose && onClose();
    });
  }

  return (
    <View style={[globalStyle.breakOutOfParent]}>
      {icon}
      <Portal visible={open} id={id}>
        {open && (
          <TouchableOpacity
            onPress={_onClose}
            style={[
              style.backdrop,
              { height: dimensions.height, width: dimensions.width },
            ]}
          />
        )}

        <Animated.View
          style={[
            style.modalContainer,
            {
              transform: [{ translateX: xValue }],
              height: dimensions.height,
            },
          ]}
        >
          {children}
        </Animated.View>
      </Portal>
    </View>
  );
};

export default Drawer;

const style = StyleSheet.create({
  backdrop: {
    opacity: 0.3,
    backgroundColor: "black",
    flex: 1,
    position: "absolute",
    top: 0,
    zIndex: 9998,
  },
  modalContainer: {
    width: "70%",
    backgroundColor: "gray",
    position: "absolute",
    zIndex: 9999,
  },
});

function animate(
  animation: Animated.Value,
  value: any,
  onAnimationEnd?: () => any
) {
  Animated.timing(animation, {
    useNativeDriver: true,
    toValue: value,
    duration: 350,
  }).start(onAnimationEnd);
}
