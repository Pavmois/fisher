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
                            <td>Люмос</td>
                            <td>60</td>
                            <td>44</td>
                            <td>Ускоряет героя</td>
                        </tr>
                        <tr class="special">
                            <td>Минимализм</td>
                            <td>60</td>
                            <td>93</td>
                            <td>Герой превращается в лилипута</td>
                        </tr>
                        <tr class="special">
                            <td>Факир</td>
                            <td>10</td>
                            <td>155</td>
                            <td>Безымнный превращается в факира</td>
                        </tr>
                        <tr class="special">
                            <td>POV</td>
                            <td>60</td>
                            <td>170</td>
                            <td>Вид от первого лица</td>
                        </tr>
                        <tr class="special">
                            <td>гигантизм</td>
                            <td>60</td>
                            <td>193</td>
                            <td>Герой превращается в гиганта</td>
                        </tr>
                        <tr class="special">
                            <td>Туман</td>
                            <td>60</td>
                            <td>200</td>
                            <td>Напустить густой туман</td>
                        </tr>
                        <tr class="special">
                            <td>Карусель</td>
                            <td>30</td>
                            <td>202</td>
                            <td>Камера начинает крутиться как карусель</td>
                        </tr>
                        <tr class="special">
                            <td>Ускорить время</td>
                            <td>60</td>
                            <td>234</td>
                            <td>Ускорение времени вокруг героя</td>
                        </tr>
                        <tr class="special">
                            <td>Боди позитив</td>
                            <td>120</td>
                            <td>260</td>
                            <td>Безымянный в меру упитанный</td>
                        </tr>
                        <tr class="special">
                            <td>Тряхнуть</td>
                            <td>10</td>
                            <td>266</td>
                            <td>Камера сильно трясётся</td>
                        </tr>
                        <tr class="special">
                            <td>Стриптиз</td>
                            <td>30</td>
                            <td>300</td>
                            <td>Вызов танцовщицы</td>
                        </tr>
                        <tr class="special">
                            <td>Флэш</td>
                            <td>60</td>
                            <td>432</td>
                            <td>Замедление времени вокруг героя</td>
                        </tr>
                        <tr class="special">
                            <td>Танец</td>
                            <td>35</td>
                            <td>501</td>
                            <td>Герой танцует</td>
                        </tr>
                        <tr class="special">
                            <td>Перевернуть камеру</td>
                            <td>60</td>
                            <td>696</td>
                            <td>Камера инверсируется</td>
                        </tr>
                        
                        <!-- Триггер  -->
                        <tr class="trigger">
                            <td>Мясной жук</td>
                            <td>0</td>
                            <td>33</td>
                            <td>Призывает мясного жука</td>
                        </tr>
                        <tr class="trigger">
                            <td>Кротокрыс</td>
                            <td>0</td>
                            <td>60</td>
                            <td>Призывает кротокрыса</td>
                        </tr>
                        <tr class="trigger">
                            <td>Падальщик</td>
                            <td>0</td>
                            <td>68</td>
                            <td>Призывает падальщика</td>
                        </tr>
                        <tr class="trigger">
                            <td>Кровавая муха</td>
                            <td>0</td>
                            <td>70</td>
                            <td>Призывает кровавую муху</td>
                        </tr>
                        <tr class="trigger">
                            <td>Волк</td>
                            <td>0</td>
                            <td>99</td>
                            <td>Призывает волка</td>
                        </tr>
                        <tr class="trigger">
                            <td>Дождливая погода</td>
                            <td>0</td>
                            <td>111</td>
                            <td>Вызывает дождь</td>
                        </tr>
                        <tr class="trigger">
                            <td>Солнечная погода</td>
                            <td>0</td>
                            <td>121</td>
                            <td>Заканчивает дождь</td>
                        </tr>
                        <tr class="trigger">
                            <td>Варан</td>
                            <td>0</td>
                            <td>128</td>
                            <td>Призывает варана</td>
                        </tr>
                        <tr class="trigger">
                            <td>Кусь</td>
                            <td>0</td>
                            <td>132</td>
                            <td>Антиабуз - пни героя, чтобы он улетел с насиженного места</td>
                        </tr>
                        <tr class="trigger">
                            <td>Бочка</td>
                            <td>0</td>
                            <td>144</td>
                            <td>Подсади героя - заспавни под ним бочку</td>
                        </tr>
                        <tr class="trigger">
                            <td>Ползун</td>
                            <td>0</td>
                            <td>157</td>
                            <td>Призыв ползуна</td>
                        </tr>
                        <tr class="trigger">
                            <td>Луркер</td>
                            <td>0</td>
                            <td>217</td>
                            <td>Призыв луркера</td>
                        </tr>
                        <tr class="trigger">
                            <td>Ночь</td>
                            <td>0</td>
                            <td>224</td>
                            <td>Перемотать время до ночи</td>
                        </tr>
                        <tr class="trigger">
                            <td>День</td>
                            <td>0</td>
                            <td>248</td>
                            <td>Перемотать время до дня</td>
                        </tr>
                        <tr class="trigger">
                            <td>Гончая</td>
                            <td>0</td>
                            <td>292</td>
                            <td>Призывает гончую</td>
                        </tr>
                        <tr class="trigger">
                            <td>Гарпия</td>
                            <td>0</td>
                            <td>320</td>
                            <td>Призывает гарпию</td>
                        </tr>
                        <tr class="trigger">
                            <td>Глорх</td>
                            <td>0</td>
                            <td>369</td>
                            <td>Призывает глорха</td>
                        </tr>
                        <tr class="trigger">
                            <td>Скелет</td>
                            <td>0</td>
                            <td>444</td>
                            <td>Призывает скелета</td>
                        </tr>
                        <tr class="trigger">
                            <td>Зомби</td>
                            <td>0</td>
                            <td>500</td>
                            <td>Призывает зомби</td>
                        </tr>
                        <tr class="trigger">
                            <td>Орк-скаут</td>
                            <td>0</td>
                            <td>888</td>
                            <td>Призывает орка-скаута</td>
                        </tr>
                        <tr class="trigger">
                            <td>Орк-шамана</td>
                            <td>0</td>
                            <td>999</td>
                            <td>Призывает орка-шамана</td>
                        </tr>
                        <tr class="trigger">
                            <td>Демон</td>
                            <td>0</td>
                            <td>1010</td>
                            <td>Призывает демона</td>
                        </tr>
                        <tr class="trigger">
                            <td>Орк-воин</td>
                            <td>0</td>
                            <td>1111</td>
                            <td>Призывает орка-воина</td>
                        </tr>
                        <tr class="trigger">
                            <td>Голем</td>
                            <td>0</td>
                            <td>1333</td>
                            <td>Призывает голема</td>
                        </tr>
                        <tr class="trigger">
                            <td>Тролль</td>
                            <td>0</td>
                            <td>1500</td>
                            <td>Призывает тролля</td>
                        </tr>
                        <tr class="trigger">
                            <td>Лорд Демонов</td>
                            <td>0</td>
                            <td>1666</td>
                            <td>Призывает Лорда Демонов</td>
                        </tr>
                        <tr class="trigger">
                            <td>Смерть</td>
                            <td>0</td>
                            <td>2000</td>
                            <td>Немедленная смерть</td>
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
            background: #bb4123;
        }
     } 
  }
  .event__page::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>