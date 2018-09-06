import React, { Component } from 'react'
import { Rectangle, Circle, Triangle } from './src/Shapes'
import { Palette } from '../../assets/palette/Palette'
import UserInput from '../UserInput/UserInput'

export default class ShapeTool extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 200,
            height: 200,
            stroke: 0,
            radius: 50,
            selectedShape: shapes.circle
        }

        this.renderShape = this.renderShape.bind(this)
    }

    onWidthChange(newValue) {
        console.log('onWidthChange Value: ', newValue.target.value)

        const intValue = parseInt(newValue.target.value, 10)

        this.setState({ width: intValue })

    }

    onHeightChange(newValue) {
        console.log('onHeightChange Value: ', newValue.target.value)

        const intValue = parseInt(newValue.target.value, 10)

        this.setState({ height: intValue, stroke: this.state.stroke })

    }

    onRadiusChange(newValue) {
        console.log('onRadiusChange Value: ', newValue.target.value)

        const intValue = parseInt(newValue.target.value, 10)

        this.setState({ radius: intValue })
    }

    onStrokeChange(newValue) {
        console.log('onStrokeChange Value: ', newValue.target.value)

        const intValue = parseInt(newValue.target.value, 10)

        this.setState({ stroke: intValue })

    }

    renderShape() {
        switch (this.state.selectedShape) {
            case shapes.rectangle:
                return (
                    <Rectangle
                        style={styles.shape}
                        width={this.state.width}
                        height={this.state.height}
                        fill={{ color: Palette.light }}
                        stroke={{ color: Palette.veryDark }}
                        strokeWidth={this.state.stroke}
                    />
                )
            case shapes.circle:
                return (
                    <Circle
                        r={this.state.radius}
                        fill={{ color: Palette.light }}
                        stroke={{ color: Palette.veryDark }}
                        strokeWidth={this.state.stroke} 
                    />
                )
            case shapes.triangle:
                return (
                    <Triangle
                        width={150}
                        height={150}
                        fill={{ color: '#2409ba' }}
                        stroke={{ color: '#E65243' }}
                        strokeWidth={3}
                    />
                )
            default:
                return (
                    <text>Pick a shape to start building</text>
                )
        }
    }

    pickShape(pickedShape) {
        this.setState({ selectedShape: pickedShape })
    }

    // TODO: Offset Shape with the value of this.state.stroke to center the element

    renderTools() {
        switch (this.state.selectedShape) {
            case shapes.rectangle:
                return (
                    <div style={styles.toolsContainer}>
                        <text>Width</text>
                        <UserInput value={this.state.width} onChange={value => this.onWidthChange(value)} />

                        <text>Height</text>
                        <UserInput value={this.state.height} onChange={value => this.onHeightChange(value)} />

                        <text>Stroke</text>
                        <UserInput value={this.state.stroke} onChange={value => this.onStrokeChange(value)} />
                    </div>
                )
            case shapes.circle:
                return (
                    <div style={styles.toolsContainer}>
                        <text>Radius</text>
                        <UserInput value={this.state.radius} onChange={value => this.onRadiusChange(value)} />

                        <text>Stroke</text>
                        <UserInput value={this.state.stroke} onChange={value => this.onStrokeChange(value)} />
                    </div>
                )
            case shapes.triangle:
                return (
                    <div style={styles.toolsContainer}>
                        <text>Width</text>
                        <UserInput value={this.state.width} onChange={value => this.onWidthChange(value)} />

                        <text>Height</text>
                        <UserInput value={this.state.height} onChange={value => this.onHeightChange(value)} />

                        <text>Stroke</text>
                        <UserInput value={this.state.stroke} onChange={value => this.onStrokeChange(value)} />
                    </div>
                )
            default:
                return (
                    <text>There are no tools for this shape..</text>
                )
        }
    }

    render() {
        return (
            <div style={styles.container}>

                {this.renderTools()}

                <div style={styles.canvasContainer}>
                    
                    {this.renderShape()}

                </div>

            </div>
        )
    }
}

// <div style={{
//     width: this.state.width - this.state.stroke * 2,
//     height: this.state.height - this.state.stroke * 2,
//     border: '0px solid black',
//     borderWidth: this.state.stroke + 'px',
//     borderColor: '#000',
//     margin: 0,
//     padding: 0,
//     position: 'absolute',
//     zIndex: 5
// }} />

const styles = {
    container: {
        alignItems: 'center',
        width: '100%'
    },
    canvasContainer: {
        margin: 'auto',
        marginBottom: 30,
        width: 600,
        height: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        padding: 30,
        zIndex: 5,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    shape: {
        alignSelf: 'center',
        position: 'absolute'
    },
    toolsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 150,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    shapeWrapper: {
        border: '3px solid #000',
        margin: 0,
        padding: 0
    }
}

const shapes = {
    circle: 'circle',
    rectangle: 'rectangle',
    triangle: 'triangle'
}