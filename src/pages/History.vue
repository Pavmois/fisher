<template>
  <div class="history">
    <div class="history-wrapper">
      <div class="history__left">
        <div class="history-item">
          <div class="item-desc"></div>
          <div class="item-img"></div>
          <div class="item-year"></div>
        </div>
        <div class="history-item">
          <div class="item-desc"></div>
          <div class="item-img"></div>
          <div class="item-year"></div>
        </div>
        <div class="history-item">
          <div class="item-desc"></div>
          <div class="item-img"></div>
          <div class="item-year"></div>
        </div>
      </div>

      <div class="history__mid"></div>

      <div class="history__right">
        <div class="history-item mt75">
          <div class="item-desc"></div>
          <div class="item-img"></div>
          <div class="item-year"></div>
        </div>
        <div class="history-item mt75">
          <div class="item-desc"></div>
          <div class="item-img"></div>
          <div class="item-year"></div>
        </div>
        <div class="history-item mt75">
          <div class="item-desc"></div>
          <div class="item-img"></div>
          <div class="item-year"></div>
        </div>
      </div>
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
  .history {
    width: 100vw;
    height: 94vh;
    margin: auto;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: flex;
    justify-content: end;
    .history-wrapper {
      display: flex;
      height: 1500px;
      width: 50%;
      border: 1px solid red;
      margin-right: 10%;
      .history__left,
      .history__right {
        width: 49%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .history__mid {
        width: 2%;
        background: white;
      }
      .history-item {
        width: 220px;
        height: 220px;
        margin-top: 25px;
        border-radius: 15px;
        background: goldenrod;
      }
      .mt75 {
        margin-top: 75px;
        background: antiquewhite;
      }

      @media (max-width: 768px) {
        width: 100%;        
      }
    }
    @media (max-width: 768px) {
      justify-content: center;        
    }
  }

  .history::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

</style>
