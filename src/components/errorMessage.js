import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchNewsAction} from '../actions/news';

const ErrorMessage = ({error}) => {
  const dispatch = useDispatch();

  const retry = () => {
    dispatch(fetchNewsAction());
  };
  return (
    <View style={styles.errorMessage}>
      <Text style={styles.banner}>
        {'Oops.. An unexpected error occurred:'}
      </Text>
      <Text style={styles.error}>{error}</Text>
      <TouchableOpacity onPress={retry}>
        <Text style={styles.buttonRetry}>{'Retry'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },

  banner: {
    color: 'red',
  },

  error: {
    color: 'red',
    marginVertical: 20,
  },

  buttonRetry: {
    width: '100%',
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
});

export default ErrorMessage;
