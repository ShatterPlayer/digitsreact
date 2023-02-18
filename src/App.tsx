import React, { Component } from 'react'
import styled from 'styled-components'
import { LayersModel, loadLayersModel } from '@tensorflow/tfjs'

const Canvas = styled.canvas`
  width: 500px;
  height: 500px;
  border: 2px solid red;
  margin: 0 auto;
  display: block;
`

class App extends Component {
  constructor(props: any) {
    super(props)
    this.canvas = React.createRef()
  }

  canvas: React.RefObject<HTMLCanvasElement> | null = null

  model: null | LayersModel = null

  componentDidMount() {
    // loadLayersModel('/model.json').then(m => {
    //   this.model = m
    //   console.log('model loaded')
    // })

    if (this.canvas && this.canvas.current) {
      this.canvas.current.addEventListener('mousemove', e => {
        if (this.canvas && this.canvas.current) {
          const rect = this.canvas.current.getBoundingClientRect()
          console.log(e.clientX - rect.left, e.clientY - rect.top)
        }
      })
    }
  }

  clickHandler = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    console.log(e.target)
  }

  render() {
    return <Canvas ref={this.canvas} onClick={this.clickHandler} />
  }
}

export default App
