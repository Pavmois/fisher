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
                        <span class="baff">- Усиление</span>
                        <span class="debaff">- Ослабление</span>
                        <span class="npc">- Призыв NPC</span>
                        <span class="special">- Особый эффект</span>
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
                        <tr class="baff">
                            <td>Бессмертие</td>
                            <td>60</td>
                            <td>100</td>
                            <td>Бессмертие на 1 мин.</td>
                        </tr>
                        <tr class="debaff">
                            <td>Лечение</td>
                            <td>20</td>
                            <td>250</td>
                            <td>Лечение по несколько процентов в секунду</td>
                        </tr>
                        <tr class="npc">
                            <td>Спринт</td>
                            <td>30</td>
                            <td>150</td>
                            <td>Ускоряет героя</td>
                        </tr>
                        <tr class="special">
                            <td>Спринт</td>
                            <td>30</td>
                            <td>150</td>
                            <td>Ускоряет героя</td>
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
            font-weight: bold;
            text-align: center;
            border: none;
            padding: 10px 15px;
            background-color: rgba(0, 0, 0, 0.5);
            font-size: 14px;
        }
        .table thead tr th:first-child {
            border-radius: 8px 0 0 8px;
        }
        .table thead tr th:last-child {
            border-radius: 0 8px 8px 0;
        }
        .table tbody td {
            text-align: left;
            border: none;
            padding: 10px 15px;
            font-size: 14px;
            vertical-align: top;
        }
        .table tbody tr td:first-child {
            border-radius: 8px 0 0 8px;
        }
        .table tbody tr td:last-child {
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
     } 
  }
  .event__page::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>