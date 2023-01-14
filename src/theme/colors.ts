import { Colors } from "./types";

export const baseColors = {
  failure: "#B07418",
  primary: "#000",
  primaryBright: "#000000",
  primaryDark: "#FDFFFB",
  secondary: "#d95f00",
  success: "#B07418",
  warning: "#d95f00",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#1f1a14",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#fff",
  textDisabled: "#BDC2C4",
  textSubtle: "#d95f00",
  borderColor: "#E9EAEB",
  card: "#d95f00",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fffae6 0%, #fffaef 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#d7caec",
  background: "#000",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  primaryDark: "#fff",
  tertiary: "#353547",
  text: "#fff",
  textDisabled: "#666171",
  textSubtle: "#d7caec",
  borderColor: "#d7caec",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fffae6 0%, #fffaef 100%)",
  },
};
