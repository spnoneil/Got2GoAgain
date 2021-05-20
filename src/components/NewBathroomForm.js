import React from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';

const NewBathroomForm = props => (
  <Formik
    style= {{flex: 1, justifyContent: "center"}}
    initialValues={{ email: '', cost: '', rating: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>

        <Text style={styling.text}>Address:</Text>
        <TextInput
          style={styling.input}
          onChangeText={handleChange('address')}
          onBlur={handleBlur('address')}
          value={values.address}
        />
        <Text style={styling.text}>Notes:</Text>
        <TextInput
          style={styling.input}
          onChangeText={handleChange('notes')}
          onBlur={handleBlur('notes')}
          value={values.notes}
        />
        <Text style={styling.text}>Rating:</Text>
        <TextInput
          style={styling.input}
          onChangeText={handleChange('rating')}
          onBlur={handleBlur('rating')}
          value={values.rating}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

const styling = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'purple',
    marginBottom: 5,
    width: 150,
  },
  text: {
    fontSize: 15,
  }
})

export default NewBathroomForm;