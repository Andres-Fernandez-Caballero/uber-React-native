import { registerRootComponent } from "expo";
import { Provider as PaperProvider } from "react-native-paper";
import App from "./src/App";

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

registerRootComponent(Main);