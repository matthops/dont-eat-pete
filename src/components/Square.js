import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, Pressable, Alert } from 'react-native'
import LottieView from 'lottie-react-native'

const Square = ({
  animation,
  peteIndex,
  index,
  reset,
  selected,
  setSelected,
  start,
  isSelectMode,
  freeze,
  setFreeze,
  handleReset
}) => {
  const [pressed, setPressed] = useState(false)
  const [correctPress, setCorrectPress] = useState(false)
  const animationRef = useRef(null)

  useEffect(() => {
    if (reset) {
      console.log("I'm resetting")
      setPressed(false)
      setCorrectPress(false)
      setFreeze(false)
    }
  }, [reset])

  const handlePress = () => {
    if (freeze) return
    setPressed(true)
    animationRef.current?.reset()
    animationRef.current?.play()
    if (isSelectMode && !selected) {
      setSelected(index)
    }
    if (index === peteIndex && start) {
      setCorrectPress(true)
      Alert.alert("DON'T EAT PETE!", ' Play again.', [
        {
          text: 'Reset',
          onPress: () => {
            console.log('ONPRESS RESET')
            handleReset()
          }
        }
      ])
    } else if (index === peteIndex && !isSelectMode) {
      setFreeze(true)
      setCorrectPress(true)
      Alert.alert("DON'T EAT PETE!", ' Play again.', [
        {
          text: 'Reset',
          onPress: () => {
            console.log('ONPRESS RESET')
            handleReset()
          }
        }
      ])
    }
  }
  return (
    <Pressable
      style={{
        width: '32%',
        height: '32%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 2,
        backgroundColor: !pressed ? '#D3D3D3' : correctPress ? 'red' : 'green'
      }}
      onPress={handlePress}
    >
      <LottieView
        autoPlay
        ref={animationRef}
        style={{
          width: '70%'
        }}
        source={animation}
      />
    </Pressable>
  )
}

export default Square
