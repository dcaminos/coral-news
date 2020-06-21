import {faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const FavoriteButton = ({onPress, filled = true, color = 'red'}) => {
  return (
    <TouchableOpacity style={styles.favoriteButton} onPress={onPress}>
      <FontAwesomeIcon icon={filled ? solidHeart : emptyHeart} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoriteButton: {
    padding: 10,
  },
});

export default FavoriteButton;
