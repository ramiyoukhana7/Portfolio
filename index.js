import {annotate, annotationGroup} from "https://unpkg.com/rough-notation?module"

const hightlight = document.getElementById("highlight")
const hightlight2 = document.getElementById("highlight2")
const bracket = document.getElementById("bracket")
const underline = document.getElementById("underline")
const box = document.getElementById("box")


const a1 = annotate(hightlight, { type: 'highlight', color: '#c2f8cb'})
const a5 = annotate(hightlight2, { type: 'highlight', color: '#c2f8cb'})
const a2 = annotate(bracket, { type: 'bracket', color: '#8367c7', brackets: ['left', 'right']})
const a3 = annotate(underline, { type: 'underline', color: '#2ec4b6'})
const a4 = annotate(box, { type: 'box', color: '#95b8d1'})

const ag = annotationGroup([a1,a5, a2, a3, a4])

ag.show()