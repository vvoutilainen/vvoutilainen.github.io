import {Canvas} from '../../../animlib/src/classes/Canvas.js'
import {NQColors, NQTextColors, NQFonts} from '../../../animlib/src/variables/NQ_colors_and_fonts.js'
import {Arrow} from '../../../animlib/src/classes/Arrow.js'
import {TextObject} from '../../../animlib/src/classes/TextObject.js'
import {Circle} from '../../../animlib/src/classes/Circle.js'

/************************************************
 canvas
************************************************/
let width = 1920
let height = 1080
// Scalable canvas
let canvas = new Canvas({})
canvas.svg.attr('viewBox','0 0 ' + width + ' ' + height)
    .attr('preserveAspectRatio','xMidYMid meet')
    .style("width", '98%')
    .style("height", '98%')
    .style("display", "block")
    .style("position", "absolute")
export {canvas}
/************************************************
 Main title 
************************************************/
let tfParams = {
    pos: [550, 1000],
    id: "tf",
    textAreaWidth: 1500,
    textAreaHeight: 170,
    text: "<b>PREDICTIVE MODELLING</b>",
    scaleEase: "d3.easeBounce",
    fontSize: 72,
    fontFamily: NQFonts.heading,
    rectStroke: "none",
    textColor: NQTextColors.white
}
export let tf = new TextObject(tfParams, canvas)

/************************************************
 Define objects
************************************************/
let start_x = 420
let sub_title_y = 340

tfParams = {
    pos: [start_x-200, sub_title_y],
    id: "tf_aux1",
    textAreaWidth: 900,
    textAreaHeight: 170,
    text: "Available information",
    fontSize: 42,
    fontFamily: NQFonts.heading,
    rectStroke: "none",
    textColor : NQTextColors.white,
}
export let tf_aux1 = new TextObject(tfParams, canvas)

tfParams = {
    pos: [start_x+230, sub_title_y],
    id: "tf_aux3",
    textAreaWidth: 900,
    textAreaHeight: 170,
    text: "Unknown state",
    fontSize: 42,
    fontFamily: NQFonts.heading,
    rectStroke: "none",
    textColor: NQTextColors.white,
}
export let tf_aux3 =  new TextObject(tfParams, canvas)

tfParams = {
    pos: [start_x+630, sub_title_y],
    id: "tf_aux2",
    textAreaWidth: 900,
    textAreaHeight: 170,
    text: "Modelling",
    fontSize: 42,
    fontFamily: NQFonts.heading,
    rectStroke: "none",
    textColor : NQTextColors.white,
}
export let tf_aux2 = new TextObject(tfParams, canvas)

tfParams = {
    pos: [start_x+960,sub_title_y],
    id: "tf_aux5",
    textAreaWidth: 900,
    textAreaHeight: 170,
    text: "Prediction",
    fontSize: 42,
    fontFamily: NQFonts.heading,
    rectStroke: "none",
    textColor : NQTextColors.white,
}
export let tf_aux5 =  new TextObject(tfParams, canvas)

let circleparams1 = 
{
    id: "circle1",
    pos: [start_x, 500],
    entPoint: [start_x-60, 460],
    r: 70,
    color: NQColors.orange,
    strokeWidth: 2,
    strokeColor: 'white',
    moveInEase: d3.easeLinear,
}
export let circle1 = new Circle(circleparams1, canvas)

let circleparams2 = 
{
    id: "circle2",
    pos: [start_x-40, 650],
    entPoint: [start_x-40-60, 650],
    r: 70,
    color : NQColors.dark_purple,
    strokeWidth: 2,
    strokeColor: 'white',
    moveInEase: d3.easeLinear,
}
export let circle2 = new Circle(circleparams2, canvas)

let circleparams3 = 
{
    id: "circle3",
    pos: [start_x, 800],
    entPoint: [start_x-60,840],
    r: 70,
    color: NQColors.dark_purple,
    strokeWidth: 2,
    strokeColor: 'white',
    moveInEase: d3.easeLinear
}
export let circle3 = new Circle(circleparams3, canvas)

let circleparams4 = 
{
    id: "circle4",
    pos: [start_x+350, 650],
    entPoint: [start_x +350-60, 650],
    r: 70,
    color: NQColors.light_grey,
    strokeWidth: 2,
    strokeColor: 'white',
    moveInEase: d3.easeLinear,
}
export let circle4 = new Circle(circleparams4, canvas)

tfParams = {
    pos: [start_x+317, 720],
    id: "tf_aux4",
    textAreaWidth: 900,
    textAreaHeight: 170,
    text: "?",
    fontSize: 120,
    fontFamily: NQFonts.heading,
    rectStroke: "none",
    textColor : NQColors.red,
}
export let tf_aux4 = new TextObject(tfParams, canvas)

let arrowparams1 = {
    id: "arrow1",
    data: [[start_x+600, 650], [start_x+600+250, 650]],
    strokeColor: NQColors.light_purple,
    strokeWidth: 6,
}
export let arrow1 = new Arrow(arrowparams1, canvas)
