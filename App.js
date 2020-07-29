import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import PeopleListRow from "./components/PeopleListRow";
import { SearchBar } from "react-native-elements";
import _ from "lodash";

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
      text: "",
      results: [],
      newResults: [],
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
          newResults: responseJson.results,
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
    return this.state.newResults.map((item, index) => {
      return <PeopleListRow key={index} {...item} />;
    });
  };

  Search(inputText) {
    const newData = this.state.results.filter((item) => {
      const itemData =
        item.name.first +
        " " +
        item.name.last +
        " " +
        item.email +
        " " +
        item.phone +
        " " +
        item.cell
          ? item.name.first.toUpperCase() +
            " " +
            item.name.last.toUpperCase() +
            item.email.toUpperCase() +
            item.phone +
            item.cell
          : "".toUpperCase();
      const textData = inputText.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      newResults: newData,
      text: inputText,
    });
  }

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
            <ActivityIndicator animating size="large" color="bad555" />
          </View>
        ) : null}
        <SafeAreaView />
        <Text style={s.pageTitle}>PEOPLE DIRECTORY</Text>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={(text) => {
            this.Search(text);
          }}
          value={this.state.text}
        />

        <ScrollView style={{ flex: 1 }}>{this.renderUser()}</ScrollView>
      </View>
    );
  }
}
