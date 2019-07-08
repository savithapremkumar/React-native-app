import { Dimensions, Platform } from "react-native";
import Colors from "./colors";
let headerHeight = Platform.OS === "ios" ? 66 : 46;
let footerHeight = 55;
const { width, height } = Dimensions.get("window");

const constants = {
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: height - headerHeight,
  viewPadding: 15,
  defaultSpacer: 10,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenHeight: width < height ? height : width,
  screenWidth: width < height ? width : height,
  divider: { backgroundColor: Colors.grey.default },
  buttonRadius: 4,
  baseImageStyle: { flex: 1, width: undefined, height: undefined },
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
};
export default constants;
