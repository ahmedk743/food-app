import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="words"
        autoCorrect={false}
        placeholder="Search"
        style={styles.textInputStyle}
        value={term}
        onChangeText={onTermChange}
        // onEndEditing={onTermSubmit}
      />
      <TouchableOpacity style={styles.iconStyle} onPress={onTermSubmit}>
        <Feather name="search" size={26} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dedcdc",
    height: 50,
    flexDirection: "row",
    margin: 10,
    borderRadius: 5,
  },
  iconStyle: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: "center",
    backgroundColor: "#bdb7b7",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  textInputStyle: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 6,
  },
});
