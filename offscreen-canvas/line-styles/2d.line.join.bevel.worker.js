// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.join.bevel
// Description:lineJoin 'bevel' is rendered correctly
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("lineJoin 'bevel' is rendered correctly");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
var tol = 1; // tolerance to avoid antialiasing artifacts
ctx.lineJoin = 'bevel';
ctx.lineWidth = 20;
ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';
ctx.fillRect(10, 10, 20, 20);
ctx.fillRect(20, 20, 20, 20);
ctx.beginPath();
ctx.moveTo(30, 20);
ctx.lineTo(40-tol, 20);
ctx.lineTo(30, 10+tol);
ctx.fill();
ctx.beginPath();
ctx.moveTo(10, 20);
ctx.lineTo(30, 20);
ctx.lineTo(30, 40);
ctx.stroke();
ctx.fillStyle = '#0f0';
ctx.strokeStyle = '#f00';
ctx.beginPath();
ctx.moveTo(60, 20);
ctx.lineTo(80, 20);
ctx.lineTo(80, 40);
ctx.stroke();
ctx.fillRect(60, 10, 20, 20);
ctx.fillRect(70, 20, 20, 20);
ctx.beginPath();
ctx.moveTo(80, 20);
ctx.lineTo(90+tol, 20);
ctx.lineTo(80, 10-tol);
ctx.fill();
_assertPixel(offscreenCanvas, 34,16, 0,255,0,255, "34,16", "0,255,0,255");
_assertPixel(offscreenCanvas, 34,15, 0,255,0,255, "34,15", "0,255,0,255");
_assertPixel(offscreenCanvas, 35,15, 0,255,0,255, "35,15", "0,255,0,255");
_assertPixel(offscreenCanvas, 36,15, 0,255,0,255, "36,15", "0,255,0,255");
_assertPixel(offscreenCanvas, 36,14, 0,255,0,255, "36,14", "0,255,0,255");
_assertPixel(offscreenCanvas, 84,16, 0,255,0,255, "84,16", "0,255,0,255");
_assertPixel(offscreenCanvas, 84,15, 0,255,0,255, "84,15", "0,255,0,255");
_assertPixel(offscreenCanvas, 85,15, 0,255,0,255, "85,15", "0,255,0,255");
_assertPixel(offscreenCanvas, 86,15, 0,255,0,255, "86,15", "0,255,0,255");
_assertPixel(offscreenCanvas, 86,14, 0,255,0,255, "86,14", "0,255,0,255");

t.done();

});
done();