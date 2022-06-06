function setup() {
    canvas=createCanvas(280, 200);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
    }
    
    function preload() {
        classifier = ml5.imageClassifier('DoodleNet');
    }
    
    function clearCanvas() {
        background("white");
    }
    
    function draw() {
        strokeWeight(13);
    
        stroke(0);
    
        if (mouseIsPressed) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    }