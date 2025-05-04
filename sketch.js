let capture;
let posenet;
let singlePose, skeleton;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', receivedPoses);
}

function receivedPoses(poses) {
    console.log(poses);

    if (poses.length > 0) {
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {
    // Draw the video capture
    image(capture, 0, 0, width, height); // Make sure the video fits within the canvas

    fill(255, 0, 0);

    if (singlePose) {
        // Iterate through keypoints and draw them
        for (let i = 0; i < singlePose.keypoints.length; i++) {
            let x = map(singlePose.keypoints[i].position.x, 0, capture.width, 0, width);
            let y = map(singlePose.keypoints[i].position.y, 0, capture.height, 0, height);
            ellipse(x, y, 20);
        }

        // Draw skeleton lines
        stroke(255, 255, 255);
        strokeWeight(5);
        for (let j = 0; j < skeleton.length; j++) {
            let x1 = map(skeleton[j][0].position.x, 0, capture.width, 0, width);
            let y1 = map(skeleton[j][0].position.y, 0, capture.height, 0, height);
            let x2 = map(skeleton[j][1].position.x, 0, capture.width, 0, width);
            let y2 = map(skeleton[j][1].position.y, 0, capture.height, 0, height);
            line(x1, y1, x2, y2);
        }
    }
}