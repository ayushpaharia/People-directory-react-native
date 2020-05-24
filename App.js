import React, { useEffect, useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SectionList,
  // FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import PeopleListRow from "./components/PeopleListRow";
import { SearchBar } from "react-native-elements";

const s = StyleSheet.create({
  pageTitle: {
    color: "white",
    backgroundColor: "#2b2f33",
    fontSize: 22,
    letterSpacing: -1,
    textAlign: "center",
    fontWeight: "700",
    paddingTop: 40,
    paddingBottom: 15,
  },
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      results: [],
    };
  }

  loadPeople = () => {
    const url = "https://randomuser.me/api/?results=100";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          results: responseJson.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.loadPeople();
  }
  renderUser = () => {
    return this.state.results.map((item, index) => {
      return <PeopleListRow {...item} />;
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.isLoading ? (
          <View
            style={{
              ...StyleSheet.absoluteFill,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color="bad555" />
          </View>
        ) : null}
        <SafeAreaView />
        <Text style={s.pageTitle}>PEOPLE DIRECTORY</Text>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={(text) => console.log(text)}
          value={this.loadPeople}
        />

        <ScrollView style={{ flex: 1 }}>{this.renderUser()}</ScrollView>
      </View>
    );
  }
}
