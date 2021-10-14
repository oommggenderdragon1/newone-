function preload(){
    //nothing
}

function setup(){

    canvas = createCanvas(500,500);
    canvas.position(400,400);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
    

}
function draw(){
image(video,0,0,500,500);
tint(tint_color);



}function take_snapshot(){

    save("FILTER_COLOR.png");

}