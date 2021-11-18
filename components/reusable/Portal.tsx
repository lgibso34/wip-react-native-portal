import React, { useState, useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { omit } from "lodash-es";
const PortalContext = React.createContext<{
  teleport: (id: string, visible: boolean, element: React.ReactNode) => void;
}>({
  teleport: () => {},
});

const Portal = ({
  children,
  visible,
  id,
}: {
  children: React.ReactNode;
  visible: boolean;
  id: string;
}) => {
  const { teleport } = usePortalContext();

  useEffect(() => {
    teleport(id, visible, children);

    return () => {
      teleport(id, false, null);
    };
  }, [visible]);

  return null;
};
export default Portal;

export const usePortalContext = () => {
  return useContext(PortalContext);
};

export const PortalProvider: React.FC = ({ children }) => {
  const [gates, setGates] = useState<{
    [index: string]: [boolean, React.ReactNode][];
  }>({});

  const teleport = (id: string, visible: boolean, element: React.ReactNode) =>
    setGates((prevGates) => {
      const currentGate = gates[id];

      const _default = {
        ...prevGates,
        id: [visible, element],
      };

      if (currentGate && !element) return omit(gates, id);
      else return _default;
    });

  const visible = Object.values(gates).some((gate) => gate[0]);

  return (
    <PortalContext.Provider value={{ teleport }}>
      <View
        style={{
          display: visible ? "flex" : "none",
          position: "absolute",
          zIndex: 99999,
          height: "100%",
          width: "100%",
          // backgroundColor: "black",
          // opacity: 0.7,
        }}
      >
        {Object.keys(gates).map((key) => {
          const visible = gates[key][0];
          const node = gates[key][1];
          return <React.Fragment key={key}>{visible && node}</React.Fragment>;
        })}
      </View>
      {children}
    </PortalContext.Provider>
  );
};
