<template>
    <div class="links__page">
        <div class="links__wrapper">
            <div class="links__items">
                <div class="item">
                    <div class="item-desc">Boosty</div>
                    <a href="https://boosty.to/davidfisher" target="_blank">ПОДПИСАТЬСЯ</a>
                    <video class="item-video" src="@/assets/video/potionsGeralt.mp4" autoplay loop muted></video>
                </div>
                <div class="item">
                    <div class="item-desc">Vkontakte</div>
                    <div class="item-img"></div>
                </div>
                <div class="item">
                    <div class="item-desc">Telegram</div>
                    <div class="item-img"></div>
                </div>
                <div class="item">
                    <div class="item-desc">Youtube</div>
                    <div class="item-img"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .links__page {
    width: 100vw;
    height: 94vh;
    margin: auto;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
      .links__wrapper {
        width: 90%;
        margin: auto;
        margin-top: 50px;
        color: white;
        .links__items {
            display: flex;
            justify-content: space-around;
            .item {
                display: flex;
                flex-direction: column;
                width: 250px;
                height: 42px;
                background: black;
                transition: all 0.3s linear;
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
                text-align: center;
                .item-desc {
                    font-size: 18px;
                    font-family: Scary;
                    padding: 10px;
                    background: black;
                    border-top-left-radius: 15px;
                    border-top-right-radius: 15px;
                }
                .item-video {
                    width: 100%;
                    height: 1px;
                    transition: all 0.3s linear;
                    border-bottom-left-radius: 15px;
                    border-bottom-right-radius: 15px;
                }

                a {
                    text-decoration: none;
                    background: orange;
                    width: 80%;
                    height: 0px;
                    margin: auto;
                    margin-top: 0px;
                    padding: 0px;
                    font-size: 0;
                    border-radius: 15px;
                    transition: all 0.2s linear;
                    cursor: pointer;
                    &:hover {
                        box-shadow: 0px 0px 12px 6px orangered;
                    }

                }

                &:hover {
                    height: 250px;
                    .item-video {
                        height: 209px;
                    }
                    a {
                        font-size: 18px;
                        height: 40px;
                        padding: 10px;
                        margin-top: 15px;
                        margin-bottom: 15px;
                        
                    }
                }
            }
        }
     } 
  }
  .links__page::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>