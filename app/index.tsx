import { Text, View } from "react-native";
import { ReaderProvider } from "@epubjs-react-native/core";
import Book from "../components/Book.jsx"
export default function Index() {

  return (
    <ReaderProvider>
      <View>
        {Book /}
      </View>
    </ReaderProvider>
  );
}
