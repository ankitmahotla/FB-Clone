import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import LikeImage from "../../assets/images/like.png";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState } from "react";

export default function FeedPost({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image source={{ uri: post.User.image }} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Entypo
          style={styles.icon}
          name="dots-three-horizontal"
          size={18}
          color="gray"
        />
      </View>
      {post.description && (
        <Text style={styles.description}>{post.description}</Text>
      )}
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.image} />
      )}
      <View style={styles.footer}>
        <View style={styles.statsRow}>
          <Image source={LikeImage} style={styles.likeIcon} />
          <Text style={styles.likedBy}>
            Elon Musk and {post.numberOfLikes} others
          </Text>
          <Text style={styles.numberOfShares}>
            {post.numberOfShares} shares
          </Text>
        </View>
        <View style={styles.buttonsRow}>
          <Pressable
            onPress={() => setIsLiked(!isLiked)}
            style={styles.iconButton}
          >
            <AntDesign
              name="like2"
              size={18}
              color={isLiked ? "royalblue" : "gray"}
            />
            <Text
              style={[
                styles.iconButtonText,
                { color: isLiked ? "royalblue" : "gray" },
              ]}
            >
              Like
            </Text>
          </Pressable>
          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={16} color="gray" />
            <Text style={styles.iconButtonText}>Comment</Text>
          </View>
          <View style={styles.iconButton}>
            <MaterialCommunityIcons
              name="share-outline"
              size={18}
              color="gray"
            />
            <Text style={styles.iconButtonText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  likedBy: {
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  numberOfShares: {
    marginLeft: "auto",
    color: "gray",
  },
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    color: "gray",
    marginLeft: 5,
    fontWeight: "500",
  },
});
