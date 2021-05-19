import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';

export const NewBathroomForm = props => (
  <Formik
    initialValues={{ email: '', cost: '', rating: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange('address')}
          onBlur={handleBlur('address')}
          value={values.address}
        />
        <TextInput
          onChangeText={handleChange('cost')}
          onBlur={handleBlur('cost')}
          value={values.cost}
        />
        <TextInput
          onChangeText={handleChange('rating')}
          onBlur={handleBlur('rating')}
          value={values.rating}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);