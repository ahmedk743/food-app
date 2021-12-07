import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";

import ResultDetail from "../components/ResultDetail";

const ResultList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>
        "Codespace Edit" {title} - {results.length}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultShow", { id: item.id })}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(ResultList);

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 700,
    fontSize: 24,
    marginLeft: 10,
    marginBottom: 5,
  },
  container: {
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#dedcdc",
  },
});
