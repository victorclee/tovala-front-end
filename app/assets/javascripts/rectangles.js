// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
Draggable.create("#box", {
  type:"x,y",
  bounds:"#container",
  overshootTolerance:0,
  throwProps:true
})
