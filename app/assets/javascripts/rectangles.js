// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// Global variables
var id = 1;
var Canvas;

// Creating a canvas for the rectangles
window.onload = function() {
    Canvas = Raphael("canvas", 1400, 630)
    };

// What happens when you click on New Rectangle. 
function newRectangle() {
        r = Canvas.rect(100, 100, 100, 100)
            .attr({
                    fill: "#f293e8",
                    stroke: "none",
                    opacity: .5,
                    cursor: "move"
                    })
            .data("id", id)
            .dblclick(function () {
                var randomizedColor = "#";
                var hexChars = "0123456789ABCDEF";
                for (var index = 0; index < 6; index++) {
                  randomizedColor += hexChars[Math.floor(Math.random() * 16)];
                }
                this.attr('fill', randomizedColor);
                console.log(randomizedColor);
                }),
        s = Canvas.rect(190, 190, 10, 10)
            .attr({
                    fill: "#FFFFFF",
                    stroke: "none",
                    opacity: .1
                    })
            
            /* Below was an attempt to delete the rectangle by double-clicking the lower right hand corner. It was glitchy, so commented out.
            .dblclick(function() {
                r.remove();
                this.remove();
            })
            */
            ,

    // start, move, and up are the drag functions
    start = function () {
        // storing original coordinates
        this.ox = this.attr("x");
        this.oy = this.attr("y");
        this.attr({opacity: 1});
        
        this.sizer.ox = this.sizer.attr("x");
        this.sizer.oy = this.sizer.attr("y");
        this.sizer.attr({opacity: 1});
    },
    move = function (dx, dy) {
        // move will be called with dx and dy
        this.attr({x: this.ox + dx, y: this.oy + dy});
        this.sizer.attr({x: this.sizer.ox + dx, y: this.sizer.oy + dy});        
    },
    up = function () {
        // restoring state
        this.attr({opacity: .5});
        this.sizer.attr({opacity: .5});        
    },
    rstart = function () {
        // storing original coordinates
        this.ox = this.attr("x");
        this.oy = this.attr("y");        
        
        this.box.ow = this.box.attr("width");
        this.box.oh = this.box.attr("height");        
    },
    rmove = function (dx, dy) {
        // move will be called with dx and dy
        this.attr({x: this.ox + dx, y: this.oy + dy});
        this.box.attr({width: this.box.ow + dx, height: this.box.oh + dy});
    };   
    // rstart and rmove are the resize functions;
    r.drag(move, start, up);
    r.sizer = s;
    s.drag(rmove, rstart);
    s.box = r;


    id++;

    };


function removeAll() {
    Canvas.clear();       
    };





















