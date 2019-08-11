<template>
  <div ref="gl" id="gl" class="gl"></div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "three";
import * as THREE from "three";
const OrbitControls = require("three-orbit-controls")(THREE);

@Component
export default class GL extends Vue {
  @Provide() scene!: Scene;
  @Provide() camera!: PerspectiveCamera;
  @Provide() renderer!: WebGLRenderer;
  @Provide() cube!: Mesh;

  mounted() {
    this.initialize();
    this.rendering();
  }

  // 初始化场景相关内容
  initialize() {
    this.scene = new Scene(); // 生成一个场景

    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    ); // 生成一个透视相机

    this.renderer = new WebGLRenderer({
      // alpha: true // 默认为黑色场景，此处设为透明
    }); // 设置一个场景

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    (this.$refs.gl as Element).append(this.renderer.domElement);

    let geometry: BoxGeometry = new BoxGeometry(1, 1, 1); // 创建一个长宽高都为1个单位的正方体

    let material: MeshBasicMaterial = new MeshBasicMaterial({
      color: 0xcc55aa
    }); // 材料

    this.cube = new Mesh(geometry, material); // 创造一个立方体网格

    this.scene.add(this.cube);

    this.camera.position.z = 5;

    let controls = new OrbitControls(this.camera);
    controls.target.set(0, 0, 0); // 设置控制器的焦点，使控制器围绕这个焦点进行旋转
    controls.minDistance = 3; // 设置移动的最短距离（默认为零）
    controls.maxDistance = 50; // 设置移动的最长距离（默认为无穷）
    controls.maxPolarAngle = Math.PI; //绕垂直轨道的距离（范围是0-Math.PI,默认为Math.PI）
    controls.update(); // 照相机转动时，必须更新该控制器
  }

  // 绘制方法，rAF
  rendering() {
    requestAnimationFrame(this.rendering);
    // 让立方体动起来
    // this.cube.rotation.x += 0.05;
    // this.cube.rotation.y += 0.05;
    this.renderer.render(this.scene, this.camera);
  }
}
</script>

<style lang="scss">
canvas {
  width: 100%;
  height: 100%;
}
</style>
