function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=creatorCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);   
poseNet.on('pose' , gotposes);
}
function draw(){
image(video , 0 , 300 , 300);
}
function ClickPic(){
save('img.moustache');
}
function modelLoaded(){
console.log('poseNet is Initialized');
}
function gotpose(results){
if(results.length > 0){
console.log(results);
console.log("nose x= " + results[0].pose.nose.x);
console.log("nose x= " + results[0].pose.nose.x);
}
}