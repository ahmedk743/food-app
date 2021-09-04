import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.subtitle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  imageStyle: {
    height: 120,
    width: 250,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontWeight: 700,
  },
});
