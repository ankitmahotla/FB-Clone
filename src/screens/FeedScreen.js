import { FlatList } from "react-native";
import posts from "../../assets/data/posts";
import FeedPost from "../components/FeedPost";

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
