// // ml5.js
// let handPose;
// let video;
// let hands = [];

// let THUMB_TIP = 4;
// let INDEX_FINGER_TIP = 8;


// // Matter.js
// const {Engine, Body, Bodies, Composite, Composites, Constraint, Vector} = Matter;

// let bridge; let num = 15; let radius = 10; let length = 25
// let circles = [];
// const colorPalette = [
//   "rgb(123, 45, 210)",
//   "rgb(34, 200, 145)",
//   "rgb(255, 78, 0)",
//   "rgb(89, 170, 255)",
//   "rgb(240, 90, 140)",
//   "rgb(60, 255, 120)",
//   "rgb(200, 160, 20)",
//   "rgb(255, 120, 60)",
//   "rgb(100, 80, 255)",
//   "rgb(30, 200, 255)"
// ];


// function preload() {
//   // Load the handPose model
//   handPose = ml5.handPose({maxHands: 1,flipped: true});
// }

// function setup() {
//   createCanvas(640, 480);
//   // Create the webcam video and hide it
//   video = createCapture(VIDEO, { flipped: true });
//   video.size(640, 480);
//   video.hide();
//   // start detecting hands from the webcam video
//   handPose.detectStart(video, gotHands);
  
//   engine = Engine.create()
  
//   bridge = new Bridge(num, radius, length)
// }

// function draw() {
//   background(220)
//   Engine.update(engine)
  
//   // Draw the webcam video
//   image(video, 0, 0, width, height);
  
//   if (random() < 0.1) {
//     circles.push(new Circle())
//   }
  
//   for (let i=0; i<circles.length; i++) {
//     circles[i].checkDone()
//     circles[i].display()
    
//     if (circles[i].done){
//       circles.splice(i, 1)
//     }
//   }
  
//   if (hands.length > 0) {
//     let thumb = hands[0].keypoints[THUMB_TIP]
//     let index = hands[0].keypoints[INDEX_FINGER_TIP]
//     push()
//     fill(0, 255, 0);
//     noStroke();
//     circle(thumb.x, thumb.y, 10);
//     circle(index.x, index.y, 10);
//     pop()
//     bridge.bodies[0].position.x = thumb.x
//     bridge.bodies[0].position.y = thumb.y
//     bridge.bodies[bridge.bodies.length - 1].position.x = index.x
//     bridge.bodies[bridge.bodies.length - 1].position.y = index.y
  
//     bridge.display()
//   }
  
  
// }

// // Callback function for when handPose outputs data
// function gotHands(results) {
//   // save the output to the hands variable
//   hands = results;
// }




// // ml5.js
// let handPose;
// let video;
// let hands = [];
// let THUMB_TIP = 4;
// let INDEX_FINGER_TIP = 8;
// // Matter.js
// const {Engine, Body, Bodies, Composite, Composites, Constraint, Vector} = Matter;
// let bridge; let num = 15; let radius = 10; let length = 25
// let circles = [];
// const colorPalette = [
//   "rgb(123, 45, 210)",
//   "rgb(34, 200, 145)",
//   "rgb(255, 78, 0)",
//   "rgb(89, 170, 255)",
//   "rgb(240, 90, 140)",
//   "rgb(60, 255, 120)",
//   "rgb(200, 160, 20)",
//   "rgb(255, 120, 60)",
//   "rgb(100, 80, 255)",
//   "rgb(30, 200, 255)"
// ];
// // Bucket variables
// let bucket;
// let bucketBodies = [];

// function preload() {
//   // Load the handPose model
//   handPose = ml5.handPose({maxHands: 1,flipped: true});
// }
// function setup() {
//   createCanvas(640, 480);
//   // Create the webcam video and hide it
//   video = createCapture(VIDEO, { flipped: true });
//   video.size(640, 480);
//   video.hide();
//   // start detecting hands from the webcam video
//   handPose.detectStart(video, gotHands);
  
//   engine = Engine.create()
  
//   bridge = new Bridge(num, radius, length)
  
//   // Create bucket in bottom right corner
//   let bucketX = width - 80;
//   let bucketY = height - 60;
//   let bucketWidth = 100;
//   let bucketHeight = 80;
//   let wallThickness = 10;
  
//   // Bottom wall
//   bucketBodies.push(Bodies.rectangle(bucketX, bucketY + bucketHeight/2, bucketWidth, wallThickness, { isStatic: true }));
//   // Left wall
//   bucketBodies.push(Bodies.rectangle(bucketX - bucketWidth/2 + wallThickness/2, bucketY, wallThickness, bucketHeight, { isStatic: true }));
//   // Right wall
//   bucketBodies.push(Bodies.rectangle(bucketX + bucketWidth/2 - wallThickness/2, bucketY, wallThickness, bucketHeight, { isStatic: true }));
  
//   Composite.add(engine.world, bucketBodies);
// }
// function draw() {
//   background(220)
//   Engine.update(engine)
  
//   // Draw the webcam video
//   image(video, 0, 0, width, height);
  
//   if (random() < 0.1) {
//     circles.push(new Circle())
//   }
  
//   for (let i=0; i<circles.length; i++) {
//     circles[i].checkDone()
//     circles[i].display()
    
//     if (circles[i].done){
//       circles.splice(i, 1)
//     }
//   }
  
//   if (hands.length > 0) {
//     let thumb = hands[0].keypoints[THUMB_TIP]
//     let index = hands[0].keypoints[INDEX_FINGER_TIP]
//     push()
//     fill(0, 255, 0);
//     noStroke();
//     circle(thumb.x, thumb.y, 10);
//     circle(index.x, index.y, 10);
//     pop()
//     bridge.bodies[0].position.x = thumb.x
//     bridge.bodies[0].position.y = thumb.y
//     bridge.bodies[bridge.bodies.length - 1].position.x = index.x
//     bridge.bodies[bridge.bodies.length - 1].position.y = index.y
  
//     bridge.display()
//   }
  
//   // Draw bucket
//   push();
//   fill(220);
//   // stroke(101, 67, 33);
//   strokeWeight(2);
//   rectMode(CENTER);
//   for (let body of bucketBodies) {
//     let pos = body.position;
//     let angle = body.angle;
//     push();
//     translate(pos.x, pos.y);
//     rotate(angle);
//     if (body === bucketBodies[0]) {
//       rect(0, 0, 100, 10); // bottom
//     } else {
//       rect(0, 0, 10, 80); // walls
//     }
//     pop();
//   }
//   pop();
  
// }
// // Callback function for when handPose outputs data
// function gotHands(results) {
//   // save the output to the hands variable
//   hands = results;
// }




// ml5.js
let handPose;
let video;
let hands = [];
let THUMB_TIP = 4;
let INDEX_FINGER_TIP = 8;
// Matter.js
const {Engine, Body, Bodies, Composite, Composites, Constraint, Vector} = Matter;
let bridge; let num = 15; let radius = 10; let length = 25
let circles = [];
const colorPalette = [
  "rgb(123, 45, 210)",
  "rgb(34, 200, 145)",
  "rgb(255, 78, 0)",
  "rgb(89, 170, 255)",
  "rgb(240, 90, 140)",
  "rgb(60, 255, 120)",
  "rgb(200, 160, 20)",
  "rgb(255, 120, 60)",
  "rgb(100, 80, 255)",
  "rgb(30, 200, 255)"
];
// Bucket variables
let bucket;
let bucketBodies = [];
// Sound variables
let audioContext;
let collisionCooldown = {};

function preload() {
  // Load the handPose model
  handPose = ml5.handPose({maxHands: 1,flipped: true});
}
function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
  
  engine = Engine.create()
  
  bridge = new Bridge(num, radius, length)
  
  // Initialize audio context
  audioContext = new (window.AudioContext ||   window.webkitAudioContext)();
  
  // Add collision event listener
  Matter.Events.on(engine, 'collisionStart', function(event) {
    const pairs = event.pairs;
    for (let pair of pairs) {
      // Check if collision involves a circle
      let circleBody = null;
      if (circles.some(c => c.body === pair.bodyA)) {
        circleBody = pair.bodyA;
      } else if (circles.some(c => c.body === pair.bodyB)) {
        circleBody = pair.bodyB;
      }
      
      if (circleBody) {
        const bodyId = circleBody.id;
        const now = Date.now();
        
        // Cooldown to prevent too many sounds
        if (!collisionCooldown[bodyId] || now - collisionCooldown[bodyId] > 100) {
          collisionCooldown[bodyId] = now;
          
          // Calculate collision intensity
          const velocity = Vector.magnitude(circleBody.velocity);
          if (velocity > 1) {
            playCollisionSound(velocity);
          }
        }
      }
    }
  });
  
  // Create bucket in bottom right corner
  let bucketX = width - 80;
  let bucketY = height - 60;
  let bucketWidth = 100;
  let bucketHeight = 80;
  let wallThickness = 10;
  
  // Bottom wall
  bucketBodies.push(Bodies.rectangle(bucketX, bucketY + bucketHeight/2, bucketWidth, wallThickness, { isStatic: true }));
  // Left wall
  bucketBodies.push(Bodies.rectangle(bucketX - bucketWidth/2 + wallThickness/2, bucketY, wallThickness, bucketHeight, { isStatic: true }));
  // Right wall
  bucketBodies.push(Bodies.rectangle(bucketX + bucketWidth/2 - wallThickness/2, bucketY, wallThickness, bucketHeight, { isStatic: true }));
  
  Composite.add(engine.world, bucketBodies);
}
function draw() {
  background(220)
  Engine.update(engine)
  
  // Draw the webcam video
  image(video, 0, 0, width, height);
  
  if (random() < 0.1) {
    circles.push(new Circle())
  }
  
  for (let i=0; i<circles.length; i++) {
    circles[i].checkDone()
    circles[i].display()
    
    if (circles[i].done){
      circles.splice(i, 1)
    }
  }
  
  if (hands.length > 0) {
    let thumb = hands[0].keypoints[THUMB_TIP]
    let index = hands[0].keypoints[INDEX_FINGER_TIP]
    push()
    fill(0, 255, 0);
    noStroke();
    circle(thumb.x, thumb.y, 10);
    circle(index.x, index.y, 10);
    pop()
    bridge.bodies[0].position.x = thumb.x
    bridge.bodies[0].position.y = thumb.y
    bridge.bodies[bridge.bodies.length - 1].position.x = index.x
    bridge.bodies[bridge.bodies.length - 1].position.y = index.y
  
    bridge.display()
  }
  
  // Draw bucket
  push();
  fill(139, 90, 60);
  stroke(101, 67, 33);
  strokeWeight(2);
  rectMode(CENTER);
  for (let body of bucketBodies) {
    let pos = body.position;
    let angle = body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    if (body === bucketBodies[0]) {
      rect(0, 0, 100, 10); // bottom
    } else {
      rect(0, 0, 10, 80); // walls
    }
    pop();
  }
  pop();
  
}
// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}

// Function to play collision sound
function playCollisionSound(velocity) {
  if (!audioContext) return;
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Frequency based on velocity (higher velocity = higher pitch)
  const frequency = Math.min(200 + velocity * 20, 800);
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  
  // Volume based on velocity
  const volume = Math.min(velocity * 0.05, 0.3);
  gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
  
  oscillator.type = 'sine';
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.1);
}

