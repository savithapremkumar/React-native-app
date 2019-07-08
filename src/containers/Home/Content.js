import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert
} from "react-native";
import CardItem from "../../components/CardItem";
import Styles from "../../styles/containers/Home/home";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import { isNil } from "ramda";
import PostsActions from "../../redux/PostsRedux";

type Props = {};
class Content extends Component<Props> {
  componentDidMount() {
    console.log("INSIDE CONTENT JS COMPONENT DID MOUNT", this.props.userID);
    this.props.getPosts(this.props.userID);
  }
  render() {
    if (this.props.fetching) {
      return (
        <View
          style={{
            flex: 1,
            paddingVertical: 250,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <ActivityIndicator size="large" color="#ba1c40" />
        </View>
      );
    }
    return (
      <SafeAreaView>
        <View style={Styles.container}>
          <Text style={Styles.title}>
            Ko te mutanga oranga, he timatatanga kaha! {this.props.navigateTo}
          </Text>
          <FlatList
            data={this.props.posts}
            renderItem={({ item }) => (
              <CardItem
                id={item.id}
                title={item.title}
                content={item.body}
                keyExtractor={({ id }, index) => id}
                navigation={this.props.navigation}
              />
            )}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Proposal", {})}
            style={Styles.fab}
          >
            <Text style={Styles.fabIcon}>I'm ready to start my proposal</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  fetching: state.posts.fetching,
  userID: state.auth.userID
});

const mapDispatchToProps = dispatch => ({
  getPosts: userID => dispatch(PostsActions.postsRequest(userID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
