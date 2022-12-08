<template>
    <div class="links__page">
        <div class="links__wrapper">
            <div class="links_desc">
                Ниже можно найти самые разные способы поддержать меня, а при взаимодействии
                с блоком даже увидеть мою реакцию:
            </div>
            <div class="links__items">
                <div class="item">
                    <div class="item-desc">Boosty</div>
                    <a class="boosty" href="https://boosty.to/davidfisher" target="_blank">ПОДПИСАТЬСЯ</a>
                    <video class="item-video" src="@/assets/gif/potionsGeralt.mp4" autoplay loop muted></video>
                </div>
                <div class="item">
                    <div class="item-desc">Vkontakte</div>
                    <a class="vk" href="https://vk.com/davidfisherteam" target="_blank">ВСТУПИТЬ</a>
                    <video class="item-video" src="@/assets/gif/13.mp4" autoplay loop muted></video>
                </div>
                <div class="item">
                    <div class="item-desc">Telegram</div>
                    <a class="telega" href="https://t.me/DavidFisherPublic" target="_blank">ВОЙТИ В ЧАТ</a>
                    <video class="item-video" src="@/assets/gif/16.mp4" autoplay loop muted></video>
                </div>
                <div class="item">
                    <div class="item-desc">Youtube</div>
                    <a class="youtube" href="https://www.youtube.com/TheSimpleHugh" target="_blank">ЛАЙКНУТЬ</a>
                    <video class="item-video" src="@/assets/gif/like-fast.mp4" height="250px" autoplay loop muted></video>
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
        .links_desc {
            font-size: 18px;
            color: white;
            margin: auto;
            box-shadow: 0px 0px 12px;
            border-radius: 15px;
            width: 60%;
            padding: 10px;
            @media (max-width: 768px) {
              width: 90%;
            }
        }
        .links__items {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
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
                margin-top: 50px;
                margin-bottom: 50px;
                .item-desc {
                    font-size: 22px;
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
                .boosty {
                    background: #f15f2c;
                    &:hover {
                        box-shadow: 0px 0px 12px 6px #f1612c;
                    }
                }
                .vk {
                    background: #0077ff;
                    &:hover {
                        box-shadow: 0px 0px 12px 6px #0077ff;
                    }
                }
                .telega {
                    background: #2481cc;
                    &:hover {
                        box-shadow: 0px 0px 12px 6px #2480cc;
                    }
                }
                .youtube {
                    background: #ff0000;
                    &:hover {
                        box-shadow: 0px 0px 12px 6px #ff0000;
                    }
                }

                a {
                    text-decoration: none;
                    color: white;
                    font-weight: 600;
                    width: 80%;
                    height: 0px;
                    margin: auto;
                    margin-top: 0px;
                    padding: 0px;
                    font-size: 0;
                    border-radius: 15px;
                    transition: all 0.2s linear;
                    cursor: pointer;
                }

                &:hover {
                    height: 250px;
                    .item-video {
                        height: 100%;
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