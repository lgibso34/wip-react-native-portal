import React from "react";
import { StyleSheet, View } from "react-native";
import { useGlobalStyles } from "../globalStyle";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  const globalStyle = useGlobalStyles();
  return (
    <View style={[globalStyle.breakOutOfParent, styles.drawer]}>
      {children}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "rebeccapurple",
    padding: 8,
    paddingTop: 48,
    // because of breakOutOfParent
    marginTop: -40,
    zIndex: 9,
  },
  headerTitle: {},
});
