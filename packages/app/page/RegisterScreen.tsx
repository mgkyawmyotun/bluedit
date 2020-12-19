import { userValidationSchema } from '@bluedit/common';
import { Formik } from 'formik';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export const RegisterScreen: FC = () => {
  return (
    <View style={styles.screen}>
      <Formik
        initialValues={{
          username: '',
          email: '',
          displayName: '',
          password: '',
        }}
        onSubmit={async (values, helpers) => {}}
        validationSchema={userValidationSchema}
      >
        {({
          errors,
          values,
          setErrors,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <View>
            <Text>Hello Fro m</Text>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
