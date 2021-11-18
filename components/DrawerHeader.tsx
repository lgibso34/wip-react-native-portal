import React from "react";
import {
  ButtonProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Drawer from "./Drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, LinkProps, useHistory } from "react-router-native";

const DrawerHeader = () => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/test", "Test"],
  ];

  function onClose() {
    setOpen(false);
  }

  return (
    <View>
      <Drawer
        open={open}
        onClose={onClose}
        icon={
          <MaterialIcons
            name="menu"
            size={24}
            color="white"
            onPress={() => setOpen((prevOpen) => !prevOpen)}
            style={{ marginLeft: 8 }}
          />
        }
      >
        <View style={[style.linksContainer]}>
          {links.map(([to, text]) => (
            <TouchableOpacity
              key={to}
              onPress={() => {
                // must use history.push instead of <Link> since Drawer uses Portal which is outside the <NativeRouter> tree
                history.push(to);
                onClose();
              }}
            >
              <Text style={style.link}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Drawer>
    </View>
  );
};

export default DrawerHeader;

const style = StyleSheet.create({
  link: {
    margin: 4,
    // padding: 25,
    paddingBottom: 8,
    paddingLeft: 8,
    // backgroundColor: "rebeccapurple",
    color: "white",
    fontWeight: "bold",
    borderRadius: 8,
    overflow: "hidden",
  },
  linksContainer: {
    paddingTop: "15%",
    width: "80%",
    flexWrap: "wrap",
  },
});
