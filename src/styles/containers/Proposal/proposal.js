import { StyleSheet, Dimensions, Alert } from "react-native";
import { Colors }  from "../../../styles/shared/index";

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "tinderclone";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;
const MAX_PADDING = 0.2 * DIMENSION_WIDTH;

export default StyleSheet.create({
  // COMPONENT - CARD ITEM
  containerCardItem: {
    backgroundColor: WHITE,
    borderRadius: 8,
    borderColor: GRAY,
    borderWidth: 1,
    marginTop: 50,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 10, width: 10 },
    flex: 1,
    width: 0.9 * DIMENSION_WIDTH,
    alignItems: "center"
  },
  matchesCardItem: {
    marginTop: -35,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  matchesTextCardItem: {
    fontFamily: ICON_FONT,
    color: WHITE
  },
  label: {
    color: BLACK,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    marginBottom: 20
  },
  textInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 3,
    width: 200
  },
  picker: {
    height: 50,
    width: 100,
    borderColor: "gray",
    borderWidth: 10,
    borderRadius: 3
  },
  status: {
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  statusText: {
    color: GRAY,
    fontSize: 12
  },
  online: {
    width: 6,
    height: 6,
    backgroundColor: ONLINE_STATUS,
    borderRadius: 3,
    marginRight: 4
  },
  offline: {
    width: 6,
    height: 6,
    backgroundColor: OFFLINE_STATUS,
    borderRadius: 3,
    marginRight: 4
  },
  actionsCardItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.orange.formbutton,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 }
  },
  buttonText: {
    color: WHITE,
    fontSize: 15,
    fontFamily: "Montserrat-Bold"
  },
  miniButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 }
  },
  star: {
    fontFamily: ICON_FONT,
    color: STAR_ACTIONS
  },

  flash: {
    fontFamily: ICON_FONT,
    color: FLASH_ACTIONS
  },
  radiocontainer: {
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-evenly",

  },
  radiolabel:{
    flex:1,
  },
  // COMPONENT - CITY
  city: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 90,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 }
  },
  cityText: {
    fontFamily: ICON_FONT,
    color: DARK_GRAY,
    fontSize: 13
  },

  // COMPONENT - FILTERS
  filters: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 70,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 }
  },
  filtersText: {
    fontFamily: ICON_FONT,
    color: DARK_GRAY,
    fontSize: 13
  },

  // COMPONENT - MESSAGE
  containerMessage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
    width: DIMENSION_WIDTH - 100
  },
  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginRight: 20,
    marginVertical: 15
  },
  message: {
    color: GRAY,
    fontSize: 12,
    paddingTop: 5
  },

  // COMPONENT - PROFILE ITEM
  containerProfileItem: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    paddingBottom: 25,
    margin: 20,
    borderRadius: 8,
    marginTop: -65,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 }
  },
  matchesProfileItem: {
    width: 131,
    marginTop: -15,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    textAlign: "center",
    alignSelf: "center"
  },
  matchesTextProfileItem: {
    fontFamily: ICON_FONT,
    color: WHITE
  },
  name: {
    paddingTop: 25,
    paddingBottom: 5,
    color: DARK_GRAY,
    fontSize: 15,
    textAlign: "center"
  },
  descriptionProfileItem: {
    color: GRAY,
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 13
  },
  info: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  iconProfile: {
    fontFamily: ICON_FONT,
    fontSize: 12,
    color: DARK_GRAY,
    paddingHorizontal: 10
  },
  infoContent: {
    color: GRAY,
    fontSize: 13
  },

  // CONTAINER - GENERAL
  bg: {
    flexDirection: "row",
    resizeMode: "cover",
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: { paddingBottom: 10, fontSize: 22, color: DARK_GRAY },
  icon: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: DARK_GRAY,
    paddingRight: 10
  },

  // CONTAINER - HOME
  containerHome: { marginHorizontal: 20 },

  // CONTAINER - MATCHES
  containerMatches: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10
  },

  // CONTAINER - MESSAGES
  containerMessages: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10
  },

  // CONTAINER - PROFILE
  containerProfile: { marginHorizontal: 0 },
  photo: {
    width: DIMENSION_WIDTH,
    height: 450
  },
  topIconLeft: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: WHITE,
    paddingLeft: 20,
    marginTop: -20,
    transform: [{ rotate: "90deg" }]
  },
  topIconRight: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: WHITE,
    paddingRight: 20
  },
  actionsProfile: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  iconButton: { fontFamily: ICON_FONT, fontSize: 20, color: WHITE },
  textButton: {
    fontFamily: ICON_FONT,
    fontSize: 15,
    color: WHITE,
    paddingLeft: 5
  },
  circledButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  roundedButton: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 20
  },

  // MENU
  tabButton: {
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  tabButtonText: {
    textTransform: "uppercase"
  },
  iconMenu: {
    fontFamily: ICON_FONT,
    height: 20,
    paddingBottom: 7
  }
});
