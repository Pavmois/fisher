<template>
  <div class="clips">
    <div class="clips-wrapper">
      
      <video class="clip" src="@/assets/video/osc.mp4" controls></video>
      <video class="clip" src="@/assets/video/osc.mp4" controls></video>
      <video class="clip" src="@/assets/video/osc.mp4" controls></video>
      <video class="clip" src="@/assets/video/osc.mp4" controls></video>
      <video class="clip" src="@/assets/video/osc.mp4" controls></video>
      <video class="clip" src="@/assets/video/osc.mp4" controls></video>
      <video class="clip" src="@/assets/video/osc.mp4" controls></video>
      <video class="clip" src="@/assets/video/osc.mp4" controls></video>
      <video class="clip" src="@/assets/video/osc.mp4" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
  }
}
</script>

<style lang='scss' scoped>
  .clips {
    width: 100vw;
    height: 94vh;
    margin: auto;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    .clips-wrapper {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 80%;
      margin: auto;
      margin-top: 50px;
      .clip {
        width: 250px;
        height: 150px;
        padding: 10px;
        margin-top: 10px;
      }
    }
  }

  .clips::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

</style>
