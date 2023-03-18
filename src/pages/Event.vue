<template>
    <div class="event__page">
        <div class="event__wrapper">
            <!-- Заголовок -->
            <div class="event_desc">
                <div class="desc-top">
                    <span>Специальное событие по интерактивной игре в Готику!</span>
                </div>
                <br>
                <div class="desc-bottom">
                    <div class="bottom-header">
                        В зависимости от суммы доната,
                        на Безымянного в прямом эфире будет накладываться тот или иной эффект. Эффекты делятся на 5 категорий:
                    </div>
                    <div class="bottom-footer">
                        <span class="baff">Усиление</span>
                        <span class="debaff">Ослабление</span>
                        <span class="npc">Призыв NPC</span>
                        <span class="special">Особый эффект</span>
                        <span class="trigger">Trigger</span>
                    </div>
                </div>                 
            </div>
            <!-- Таблица значений  -->
            <div class="event_table">
                <Table/>
            </div>
        </div>
    </div>
</template>

<script>
import Table from "@/components/Table.vue";
export default {
    name: 'Event',
    components: {
        Table,
    }
}
</script>

<style lang="scss" scoped>
  .event__page {
    width: 100vw;
    height: 94vh;
    margin: auto;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
      .event__wrapper {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
        margin-top: 50px;
        color: white;
        .event_desc {
            display: flex;
            flex-direction: column;
            font-size: 22px;
            color: white;
            margin: auto;
            box-shadow: 0px 0px 12px;
            border-radius: 15px;
            background-color: rgba(0, 0, 0, 0.5);
            width: 60%;
            padding: 10px;
            text-align: center;
            .desc-bottom {
                display: flex;
                flex-direction: column;
                text-align: left;
                .bottom-footer {
                    display: grid;
                    place-items: center;
                    gap: 10px;
                    grid-template-columns : repeat(4, 1fr);
                    margin-top: 10px;
                    span {
                        width: 150px;
                        padding: 5px 5px;
                        text-align: center;
                    }      
                    @media (max-width: 1280px) {
                        grid-template-columns : repeat(2, 1fr);
                    }    
                    @media (max-width: 420px) {
                        grid-template-columns : repeat(1, 1fr);
                        justify-items: center;
                        font-size: 16px;
                        span {
                            width: 200px;
                        }
                    }
                }
            }
            @media (max-width: 768px) {
              width: 90%;
            }
            @media (max-width: 500px) {
              font-size: 18px;
            }
        }
        .event_table {
            position: relative;
            overflow: auto;
        }
        .npc {
            background: #476dd6;
        }
        .baff {
            background: #59a83d;
        }
        .debaff {
            background:  #bd2020;
        }
        .special {
            background: #22229c;
        }
        .trigger {
            background: #943291;
        }

     } 
  }
  .event__page::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>