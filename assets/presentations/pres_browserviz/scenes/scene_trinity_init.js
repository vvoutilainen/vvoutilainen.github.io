import {Canvas} from '../../../animlib/src/classes/Canvas.js'
import {Image} from '../../../animlib/src/classes/Image.js'

export const svg = new Canvas({"bolor": "white"})
let xpos = 0
let params1 = {
    pos: [xpos + 200, 750],
    path: "../pics/html.svg",
    id: "fig_html",
    relSize: 25,
    drawType: "fadein"
}
export let img1 = new Image(params1, svg)

let params2 = {
    pos: [xpos + 650, 750],
    path: "../pics/js.svg",
    id: "fig_js",
    relSize: 25,
    drawType: "fadein"
}
export let img2 = new Image(params2, svg)

let params3 = {
    pos: [xpos + 1150, 750],
    path: "../pics/css.svg",
    id: "fig_css",
    relSize: 25,
    drawType: "fadein"
}
export let img3 = new Image(params3, svg)

let params4 =
  {
    path: "../pics/browsers.png"
    ,id: "fig_browsers"
    ,pos: [xpos + 630, 340]
    ,relsize: 40
  }
export var img4 = new Image(params4, svg)

let paramswp_0 = {
  pos: [xpos + 100, 1000],
  path: "../pics/webpage_0.svg",
  id: "fig_wp_0",
  relSize: 90,
  drawType: "fadein"
}
export var img_wp_0 = new Image(paramswp_0, svg)

let paramswp_1 = {
  pos: [xpos + 100, 1000],
  path: "../pics/webpage_1.svg",
  id: "fig_wp_1",
  relSize: 90,
  drawType: "fadein"
}
export var img_wp_1 = new Image(paramswp_1, svg)

let paramswp_2 = {
  pos: [xpos + 100, 1000],
  path: "../pics/webpage_2.svg",
  id: "fig_wp_2",
  relSize: 90,
  drawType: "fadein"
}
export var img_wp_2 = new Image(paramswp_2, svg)

let paramswp_3 = {
  pos: [xpos + 100, 1000],
  path: "../pics/webpage_3.svg",
  id: "fig_wp_3",
  relSize: 90,
  drawType: "fadein"
}
export var img_wp_3 = new Image(paramswp_3, svg)
