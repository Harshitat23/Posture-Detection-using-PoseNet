# Posture-Detection-using-PoseNet

This is a real-time posture detection web application built using **ml5.js** and **PoseNet**. It captures the user's live webcam feed, detects key body points and displays them visually along with the connecting skeleton.

## 🔍 Features

- Real-time pose estimation using your webcam
- Visualizes keypoints on the user's body
- Draws skeleton lines connecting the joints
- Built with 'p5.js', 'ml5.js' and 'PoseNet'

  ## 🛠️ Technologies Used

- [p5.js](https://p5js.org/) – for rendering and creative coding
- [ml5.js](https://ml5js.org/) – easy-to-use machine learning library
- [PoseNet](https://github.com/tensorflow/tfjs-models/tree/master/posenet) – pre-trained model for real-time human pose estimation


🚀 How It Works
- The webcam feed is captured using createCapture().
- The PoseNet model (via ml5.js) detects body keypoints in real-time.
- Each keypoint is drawn as a red circle.
- Skeleton connections are drawn between body joints.

📌 Output
The app will display:

- A live video feed from your webcam
- Red dots on keypoints (e.g., elbows, knees, etc.)
- White lines forming a skeleton structure
