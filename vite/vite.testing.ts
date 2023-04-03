// https://vitejs.dev/config/
import { defineConfig, type UserConfig } from "vite";
import { baseUserConfig } from "./vite.config";

export default defineConfig((): UserConfig => {
  return {
    ...baseUserConfig,
    mode: "TESTING",
    define: {
      "process.env.VITE_MODE": JSON.stringify("TESTING"),
    },
    base: "./",
  };
});
