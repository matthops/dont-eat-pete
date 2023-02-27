import React, { useMemo, useState } from 'react'
import { StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native'
import hand from '../../assets/welcome-hand.json'
import smile from '../../assets/smile.json'
import eyes from '../../assets/eyes.json'
import heart from '../../assets/heart.json'
import tongue from '../../assets/tongue.json'
import monkey from '../../assets/monkey.json'
import emoji from '../../assets/emoji.json'
import angry from '../../assets/angry.json'
import sunglasses from '../../assets/sunglasses.json'

import Square from './Square'

const animations = [
  smile,
  eyes,
  heart,
  tongue,
  monkey,
  emoji,
  angry,
  sunglasses,
  hand
]

export default function Lottie() {
  const [reset, setReset] = useState(false)
  const [isSelectMode, setIsSelectMode] = useState(false)
  const [selected, setSelected] = useState(null)
  const [start, setStart] = useState(false)
  const [freeze, setFreeze] = useState(false)
  // create a function that returns a random number between 0 and the length of the animations array
  const peteIndex = useMemo(() => {
    return isSelectMode
      ? selected
      : Math.floor(Math.random() * animations.length)
  }, [reset, isSelectMode, selected])

  const handleReset = () => {
    setReset(true)
    setStart(false)
    setSelected(null)
    setIsSelectMode(null)
    setReset(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>DON'T EAT PETE</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '95%',
          marginTop: -30
        }}
      >
        <Pressable onPress={handleReset} style={{ padding: 5 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Reset</Text>
        </Pressable>
      </View>
      {/* <Pressable
        onPress={() => setIsSelectMode(!isSelectMode)}
        style={{
          backgroundColor: isSelectMode ? 'green' : null,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500'
          }}
        >
          Select Mode
        </Text>
      </Pressable> */}
      {isSelectMode && selected !== null && (
        <Pressable
          onPress={() => setStart(true)}
          style={{
            backgroundColor: start ? 'green' : null,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 5
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500'
            }}
          >
            Start
          </Text>
        </Pressable>
      )}
      <View style={styles.animationContainer}>
        {animations.map((animation, index) => (
          <Square
            key={JSON.stringify(index * 1.2)}
            animation={animation}
            peteIndex={peteIndex}
            index={index}
            reset={reset}
            isSelectMode={isSelectMode}
            selected={selected}
            setSelected={setSelected}
            start={start}
            setFreeze={setFreeze}
            freeze={freeze}
            handleReset={() => handleReset()}
          />
        ))}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  animationContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  buttonContainer: {
    paddingTop: 20
  }
})
