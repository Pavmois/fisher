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
                        на Безымянного в прямом эфире будет накладываться тот или иной эффект. Эффекты делятся на 4 категории:
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
                <table class="table">
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Секунды</th>
                            <th>Цена р.</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Усиления -->
                        <tr class="baff">
                            <td>Лечение</td>
                            <td>20</td>
                            <td>55</td>
                            <td>Лечение Безымянного</td>
                        </tr>
                        <tr class="baff">
                            <td>Бессмертие</td>
                            <td>60</td>
                            <td>77</td>
                            <td>Бессмертие на 1 мин.</td>
                        </tr>
                        <tr class="baff">
                            <td>Замедленное падение</td>
                            <td>30</td>
                            <td>88</td>
                            <td>Скорость падения снижена</td>
                        </tr>
                        <tr class="baff">
                            <td>Спринт</td>
                            <td>30</td>
                            <td>123</td>
                            <td>Увеличена скорость бега</td>
                        </tr>
                        <tr class="baff">
                            <td>Силач</td>
                            <td>60</td>
                            <td>211</td>
                            <td>Увеличена сила и ловкость</td>
                        </tr>

                        <!-- Ослабления -->
                        <tr class="debaff">
                            <td>Горение</td>
                            <td>10</td>
                            <td>101</td>
                            <td>Поджог Безымянного</td>
                        </tr>
                        <tr class="debaff">
                            <td>Слабость</td>
                            <td>60</td>
                            <td>222</td>
                            <td>Уменьшение силы и ловкости</td>
                        </tr>
                        <tr class="debaff">
                            <td>Пьянь</td>
                            <td>60</td>
                            <td>255</td>
                            <td>Пьяный Безымянный</td>
                        </tr>

                        <!-- Вызов неписи  -->
                        <tr class="npc">
                            <td>Оракул</td>
                            <td>0</td>
                            <td>333</td>
                            <td>Задай вопрос в донате и узнай ответ от Оракула в игре</td>
                        </tr>
                        <tr class="npc">
                            <td>Курьер</td>
                            <td>0</td>
                            <td>345</td>
                            <td>Отправь рандомный подарок герою курьером</td>
                        </tr>
                        <tr class="npc">
                            <td>Советчик</td>
                            <td>300</td>
                            <td>404</td>
                            <td>Напишите в донате совет, без которого герой не справится!</td>
                        </tr>
                        <tr class="npc">
                            <td>Охранник</td>
                            <td>300</td>
                            <td>555</td>
                            <td>Придумай персонажа, опиши его. Он придёт на помощь герою</td>
                        </tr>
                        <tr class="npc">
                            <td>Охотник за головами</td>
                            <td>0</td>
                            <td>666</td>
                            <td>Найми убийцу и отправь его за героем!</td>
                        </tr>

                        <!-- Особые события -->
                        <tr class="special">
                            <td>Спринт</td>
                            <td>30</td>
                            <td>150</td>
                            <td>Ускоряет героя</td>
                        </tr>
                        
                        <!-- Триггер  -->
                        <tr class="trigger">
                            <td>Охотник за головами</td>
                            <td>0</td>
                            <td>666</td>
                            <td>Найми убийцу и отправь его за героем!</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Event',
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
                        justify-items: stretch;
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
        .table {
            width: 100%;
            border: none;
            margin-bottom: 20px;
            margin-top: 30px;
        }
        .table thead th {
            font-weight: 400;
            text-align: center;
            border: none;
            padding: 10px 15px;
            background-color: rgba(0, 0, 0, 0.5);
            font-size: 20px;
            @media (max-width: 500px) {
              font-size: 14px;
            }
        }
        .table thead tr th:first-child {
            border-radius: 8px 0 0 8px;
        }
        .table thead tr th:last-child {
            border-radius: 0 8px 8px 0;
        }
        .table tbody td {
            text-align: center;
            border: none;
            padding: 10px 15px;
            font-size: 18px;
            vertical-align: top;
            @media (max-width: 500px) {
              font-size: 14px;
            }
            @media (max-width: 420px) {
              font-size: 12px;
            }
        }
        .table tbody tr td:first-child {
            text-align: left;
            border-radius: 8px 0 0 8px;
        }
        .table tbody tr td:last-child {
            text-align: left;
            border-radius: 0 8px 8px 0;
        }
        .npc {
            background: rgb(201, 184, 29);
            color: black;
        }
        .baff {
            background: #0f7779;
        }
        .debaff {
            background: rgb(172, 28, 28);
        }
        .special {
            background: lemonchiffon;
            color: black;
        }
        .trigger {
            background: #fb7756;
        }
     } 
  }
  .event__page::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>