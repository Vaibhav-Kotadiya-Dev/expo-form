import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import styles from './style';

interface InputFieldProps extends TextInputProps {
  label: string;
  errorText?: string;
  title?: string;
  bgColor?: string;
  style?: object;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const Input: React.FC<InputFieldProps> = (props) => {
  const {
    label,
    errorText,
    value,
    style,
    onBlur,
    title,
    onFocus,
    bgColor,
    ...restOfProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  let color = isFocused ? '#1e90ff' : '#add8e6';
  if (errorText) {
    color = '#B00020';
  }

  return (
    <View style={style}>
      <View>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: color,
            },
          ]}
          ref={inputRef}
          {...restOfProps}
          value={value}
          onBlur={(event) => {
            setIsFocused(false);
            onBlur?.(event);
          }}
          onFocus={(event) => {
            setIsFocused(true);
            onFocus?.(event);
          }}
        />
        <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
          <Animated.View
            style={[
              styles.labelContainer,
              { backgroundColor: bgColor },

              {
                transform: [
                  {
                    scale: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.75],
                    }),
                  },
                  {
                    translateY: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [24, -12],
                    }),
                  },
                  {
                    translateX: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [16, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text
              style={[
                styles.label,
                {
                  color,
                },
              ]}
            >
              {label}
              {errorText ? '*' : ''}
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        {!!errorText && <Text style={styles.error}>{errorText}</Text>}
      </View>
    </View>
  );
};

export default Input;
