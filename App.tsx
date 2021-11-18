import React, { useState } from "react";
import { NativeRouter, Route, Switch } from "react-router-native";
import { View, StatusBar } from "react-native";
import Home from "./screens/Home";
import About from "./screens/About";
import globalStyle from "./globalStyle";
import ReviewDetails from "./screens/ReveiwDetails";
import { AppStateContext } from "./hooks/useAppstate";
import Test from "./components/Test";
import { PortalProvider } from "./components/reusable/Portal";
import DrawerHeader from "./components/DrawerHeader";
import Header from "./components/Header";

const Router: React.FC = ({ children }) => {
  return (
    <NativeRouter>
      {children}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/test" component={Test} />
        <Route path="/reviews/:id" component={ReviewDetails} />
      </Switch>
    </NativeRouter>
  );
};

export default function App() {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  return (
    <PortalProvider>
      <View style={globalStyle.appContainer}>
        <StatusBar barStyle="light-content" />
        <AppStateContext.Provider
          value={{
            reviews,
            setReviews,
          }}
        >
          <Router>
            <Header>
              <DrawerHeader />
            </Header>
          </Router>
        </AppStateContext.Provider>
      </View>
    </PortalProvider>
  );
}
