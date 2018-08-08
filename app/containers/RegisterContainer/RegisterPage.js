import React from 'react';

import { StyleSheet, Text, View, TextInput, Linking, Alert, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage, Icon } from 'react-native-elements';



class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleRegisterSubmission = this.handleRegisterSubmission.bind(this);
    }

    handleFirstNameInput(text) {
        const { dispatch } = this.props;
        dispatch(firstNameEntry(text));
    }

    handleLastNameInput(text) {
        const { dispatch } = this.props;
        dispatch(lastNameEntry(text));
    }

    handleEmailInput(text) {
        const { dispatch } = this.props;
        dispatch(emailEntry(text));
    }

    handlePasswordInput(text) {
        const { dispatch } = this.props;
        dispatch(passwordEntry(text));
    }

    handleRegisterSubmission() {
        const { dispatch, first_name, last_name, email, password } = this.props;
        const { navigate } = this.props.navigation;

        if (first_name == '' || last_name == '' || email == '' || password == '') {
            Alert.alert(
                'Form Error',
                'Complete all fields to submit', [{
                    text: 'OK',
                    onPress: null,
                    style: 'cancel'
                }]
            )
        } else {
            const registerObj = {
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "password": password,
            }
            dispatch(registerEntry(registerObj, navigate));
        }
    }



    render() {

        return (
            <ScrollView keyboardDismissMode='on-drag'>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <FormLabel>FIRST NAME </FormLabel>
                        <FormInput onChangeText={this.handleFirstNameInput} />
                        <FormLabel>LAST NAME</FormLabel>
                        <FormInput onChangeText={this.handleLastNameInput} />
                        <FormLabel>EMAIL</FormLabel>
                        <FormInput onChangeText={this.handleEmailInput} />
                        <FormLabel>PASSWORD</FormLabel>
                        <FormInput secureTextEntry={true} onChangeText={this.handlePasswordInput} />
                    </View>
                    <View>
                    </View>
                    <Button style={styles.button}
                        onPress={this.handleregisterSubmission}
                        backgroundColor={'#346abb'}
                        borderRadius={3}
                        large
                        icon={{ name: 'sign-in', type: 'font-awesome' }}
                        title='REGISTER' />
                   
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 300
    },
    button: {
        marginTop: 55,
        marginBottom: 20,
        width: 320
    },
 
    formContainer: {
        width: 350
        // padding: 50
    },
    switchToLogin: {
    }
});

function mapStoreToProps(store) {
    return {
        first_name: store.registerData.first_name,
        last_name: store.registerData.last_name,
        email: store.registerData.email,
        password: store.registerData.password,
        user: store.registerData.user
    };
}

export default RegisterContainer;