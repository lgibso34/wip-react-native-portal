import React from "react";

export const AppStateContext = React.createContext<{
  reviews: Review[];
  setReviews: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        rating: number;
        body: string;
        key: string;
      }[]
    >
  >;
}>({
  reviews: [],
  setReviews: () => {},
});

export const useAppstate = () => {
  return React.useContext(AppStateContext);
};

type Review = {
  title: string;
  rating: number;
  body: string;
  key: string;
};
