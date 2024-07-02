import React from 'react'
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);



  return (
    <div
      className='absolute left-full ml-3'
    >
      <SketchPicker
        color = {snap.color}
        disableAlpha
//         presetColors = {[
         
// "2D0101",
// "F0651B",
// "159512",
// "CC2867",
// "22482E",
// "1F286A",
// "321541",
// "A50303",
// "F9D168",
// "EF9A31",
// "ECFA3O",
// "4ABADD",
// "ECDSE6",
// "6Е6E6E",
// "СЗСЗСЗ",
// "2D314A",
// "FFFFFF",
// "7B2F1D",
// "1C100F",
// "453E2F",
// "002A2F",
// "ЗА3Е41",
// "B6840D",
// "F0651B",
// "151515",
// "BBB1D2",
// "ebcd8b",
// "bffcf7",
// "a4cef8",
// "984e45"
//         ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker