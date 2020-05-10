import { createContext } from "react";

const defaultState = {
  portfolio: {},
  portfolioType: "",
  toggleDialog: () => {},
};

export const PortfolioContext = createContext(defaultState);
