import React, { Component } from "react";
import * as yup from "yup";
import { Alert, Keyboard, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { Button } from "react-native-paper";
import { Forms, Colors } from "../../styles/shared/index";
import { connect } from "react-redux";
import AuthActions from "../../redux/AuthRedux";
import { isNil } from "ramda"

class LoginForm extends Component {

  constructor(props) {
    super(props);
  }
  // Dispatch login request
  loginHandler = (username, password) => {
    this.props.loginRequest(username, password);
  };

  errorMessage = this.props.error ? "Sorry an error occured, please try again later" : "";


  render() {
    if(!isNil(this.props.token)) {
      console.log("inside login render if condition")
      return (this.props.navigation.navigate("App"))
    }
    console.log("inside login render")
    return (
      <View style={Forms.container}>
        <View style={Forms.form}>
          <Text> {this.errorMessage}
            Hint: Use this email and password to get the right response:
            'eve.holt@reqres.in' Password : 'cityslicka'{" "}
          </Text>
          <Formik
            initialValues={{
              email: "eve.holt@reqres.in",
              password: "cityslicka"
            }}
            onSubmit={values => this.loginHandler(values.email, values.password)}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email()
                .required(),
              password: yup
                .string()
                .min(6)
                .required()
            })}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              setFieldTouched,
              touched,
              isValid
            }) => (
              <View>
                <TextInput
                  style={Forms.input}
                  mode="outlined"
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  value={values.email}
                  placeholder="Email"
                  placeholderTextColor={Colors.grey.default}
                />
                {touched.email && errors.email && (
                  <Text style={Forms.error}>{errors.email}</Text>
                )}
                <TextInput
                  style={Forms.input}
                  mode="outlined"
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  value={values.password}
                  placeholder="Password"
                  placeholderTextColor={Colors.grey.default}
                  secureTextEntry={true}
                />
                {touched.password && errors.password && (
                  <Text style={Forms.error}>{errors.password}</Text>
                )}
                <Button
                  style={Forms.button}
                  onPress={handleSubmit}
                  accessibilityLabel="Submit"
                  mode="contained"
                >
                  Submit
                </Button>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
  fetching: state.auth.fetching,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  loginRequest: (email, password) =>
    dispatch(AuthActions.authRequest(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
