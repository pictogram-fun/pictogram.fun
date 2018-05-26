<template>
  <div id="page-human2picto">
    <h1>human2picto</h1>

    <section class="contents">
      <div>
        <img id="human" :ref="'human'"
             width="300px"
             src="../../../images/dev/human2picto/human1.jpg"/>
      </div>

      <div>
        <button @click="convert">Convert</button>
      </div>

      <div v-if="hasPoseData">
        <v-stage :config="canvasConfig">
          <v-layer>
            <v-shape :config="shapeConfig"/>
            <v-circle v-for="(point, index) in debugPoints"
                      :key="`debug-point-${index}`"
                      :config="point"/>
          </v-layer>
        </v-stage>
      </div>
    </section>

  </div>
</template>

<script>
  import * as posenet from '@tensorflow-models/posenet';

  const imageScaleFactor = 0.5;
  const outputStride = 16;
  const flipHorizontal = false;

  // TODO dynamically upload photo

  export default {
    data() {
      return {
        hasPoseData: false,
        poseKeyPoints: [],
        debugPoints: [],
      };
    },
    methods: {
      convert() {
        const imageElement = this.$refs['human'];
        posenet.load().then((net) => {
          return net.estimateSinglePose(
            imageElement,
            imageScaleFactor,
            flipHorizontal,
            outputStride,
          );
        }).then((pose) => {
          if (pose.keypoints) {
            this.poseKeyPoints = pose.keypoints;
            this.debugPoints = this.poseKeyPoints.map(({part, position}) => {
              const {x, y} = position;
              return {
                x,
                y,
                radius: 1,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4,
              };
            });
            this.hasPoseData = true;
          }
        });
      },
      getPoint(part) {
        const point = this.poseKeyPoints.find(kp => kp.part === part);
        if (!point) {
          console.error(`Not found point of part:${part}`);
          return {};
        }
        return point;
      },
    },
    computed: {
      canvasConfig() {
        const imageElement = this.$refs['human'];
        return {
          width: imageElement.width,
          height: imageElement.height,
          stroke: '#22419B',
        };
      },
      shapeConfig() {
        const leftEye = this.poseKeyPoints.find(kp => kp.part === 'leftEye');
        const rightEye = this.poseKeyPoints.find(kp => kp.part === 'rightEye');
        const leftShoulder = this.poseKeyPoints.find(kp => kp.part === 'leftShoulder');
        const rightShoulder = this.poseKeyPoints.find(kp => kp.part === 'rightShoulder');
        const leftHip = this.poseKeyPoints.find(kp => kp.part === 'leftHip');
        const rightHip = this.poseKeyPoints.find(kp => kp.part === 'rightHip');

        const makeLine = (context, fromPart, toPart) => {
          const fromPos = this.getPoint(fromPart).position;
          const toPos = this.getPoint(toPart).position;
          context.moveTo(fromPos.x, fromPos.y);
          context.lineTo(toPos.x, toPos.y);
        };

        const makeCircle = (context, center, radius) => {
          context.arc(center.x, center.y, radius, 0, Math.PI * 2, true);
          context.fill();
        };

        const calcCenter = (posA, posB) => {
          return {
            x: (posA.x + posB.x) / 2,
            y: (posA.y + posB.y) / 2,
          };
        };

        const calcDistance = (posA, posB) => {
          const diffX = posA.x - posB.x;
          const diffY = posA.y - posB.y;
          return Math.sqrt(diffX * diffX + diffY * diffY);
        };

        const color = '#22419B';

        return {
          sceneFunc(context) {
            context.beginPath();

            // head
            makeLine(context, 'nose', 'leftEye');
            makeLine(context, 'nose', 'rightEye');
            makeLine(context, 'nose', 'leftEar');
            makeLine(context, 'nose', 'rightEar');

            // const center = leftEye.position
            makeCircle(
              context,
              calcCenter(leftEye.position, rightEye.position),
              calcDistance(leftEye.position, rightEye.position),
            );

            // upper body
            makeLine(context, 'leftShoulder', 'leftElbow');
            makeLine(context, 'leftElbow', 'leftWrist');
            makeLine(context, 'rightShoulder', 'rightElbow');
            makeLine(context, 'rightElbow', 'rightWrist');

            // body
            makeLine(context, 'leftShoulder', 'leftHip');
            makeLine(context, 'rightShoulder', 'rightHip');
            makeLine(context, 'leftHip', 'rightHip');

            // lower body
            makeLine(context, 'leftHip', 'leftKnee');
            makeLine(context, 'leftKnee', 'leftAnkle');
            makeLine(context, 'rightHip', 'rightKnee');
            makeLine(context, 'rightKnee', 'rightAnkle');

            context.closePath();
            context.stroke();
            context.fillShape(this);
            context.fillStrokeShape(this);
          },
          fill: color,
          fillStyle: color,
          stroke: color,
          strokeWidth: 4,
        };
      },
    },
  };
</script>

<style scoped lang="sass">
  #page-human2picto
    .contents
      display: flex
</style>
