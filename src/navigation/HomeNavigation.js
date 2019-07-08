import { createStackNavigator } from "react-navigation";
import HomeScreen from "../containers/Home/index";
import Story from "../containers/Story/index";
import Proposal from "../containers/Proposal2/index";
const HomePageNavigation = createStackNavigator(
  {
    Home: {
      navigationOptions: {
        header: null
      },
      screen: HomeScreen
    },
    Story: {
      navigationOptions: {
        title: "Story",
        headerStyle: {
          backgroundColor: "#ba1c40"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      },
      screen: Story
    },
    Proposal: {
      navigationOptions: {
        title: "Create your proposal",
        headerStyle: {
          backgroundColor: "#ba1c40"
        },

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      },
      screen: Proposal
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default HomePageNavigation;
