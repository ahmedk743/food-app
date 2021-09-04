import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  // console.log(results);
  return (
    <>
      <SearchBar
        term={term}
        onTermSubmit={() => searchApi(term)}
        onTermChange={setTerm}
      />

      {errorMessage ? (
        <Text style={{ marginLeft: 15, color: "red" }}>
          Error: {errorMessage}
        </Text>
      ) : (
        <ScrollView>
          <ResultList
            title="Halka Budget"
            results={filterResultsByPrice("$")}
          />
          <ResultList
            title="Thora Mehnga"
            results={filterResultsByPrice("$$")}
          />
          <ResultList
            title="Itna Mehnga (KuchDenaPryga)"
            results={filterResultsByPrice("$$$")}
          />
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
