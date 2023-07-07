import React, { useState, useRef } from 'react';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet, PanResponder, Animated, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Test = () => {
  const [isVisible, setIsVisible] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) {
        translateY.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 50) {
        setIsVisible(false);
      } else {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  const renderListItems = () => {
    return list.map((l, i) => (
      <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
        <ListItem.Content>
          <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ));
  };

  return (
    <SafeAreaProvider>
      <Button
        title="Open Bottom Sheet"
        onPress={() => setIsVisible(true)}
        buttonStyle={styles.button}
      />
      {isVisible && (
        <View style={styles.bottomSheetContainer}>
          <Animated.View
            style={[
              styles.bottomSheet,
              {
                transform: [{ translateY }],
              },
            ]}
            {...panResponder.panHandlers}
          >
            {renderListItems()}
          </Animated.View>
        </View>
      )}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  bottomSheetContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomSheet: {
    backgroundColor: '#000',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Test;
