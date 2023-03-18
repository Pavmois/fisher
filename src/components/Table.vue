<template>
    <table class="table">
        <thead>
            <tr>
                <th>Цена руб.</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <!-- Усиления -->
            <tr class="baff">
                <td>55</td>
                <td>Лечение Безымянного</td>
            </tr>
            <tr class="baff">
                <td>77</td>
                <td>Бессмертие на 1 мин.</td>
            </tr>
            <tr class="baff">
                <td>88</td>
                <td>Скорость падения снижена</td>
            </tr>
            <tr class="baff">
                <td>123</td>
                <td>Увеличена скорость бега</td>
            </tr>
            <tr class="baff">
                <td>211</td>
                <td>Увеличена сила и ловкость</td>
            </tr>

            <!-- Ослабления -->
            <tr class="debaff">
                <td>101</td>
                <td>Поджог Безымянного</td>
            </tr>
            <tr class="debaff">
                <td>222</td>
                <td>Уменьшение силы и ловкости</td>
            </tr>
            <tr class="debaff">
                <td>255</td>
                <td>Пьяный Безымянный</td>
            </tr>

            <!-- Вызов неписи  -->
            <tr class="npc">
                <td>333</td>
                <td>Задай вопрос в донате, нейросеть его обработает и пришлёт в игре Оракула с ответом!</td>
            </tr>
            <tr class="npc">
                <td>345</td>
                <td>Отправь рандомный подарок герою курьером</td>
            </tr>
            <tr class="npc">
                <td>404</td>
                <td>Напишите в донате совет, нейросеть сгенерирует несколько фраз на его основе и отправит назойливого советчика преследовать героя
                </td>
            </tr>
            <tr class="npc">
                <td>555</td>
                <td>Придумай персонажа, опиши его. Он придёт на помощь герою и расскажет свою историю, доработанную с помощью
                    нейросети!
                </td>
            </tr>
            <tr class="npc">
                <td>666</td>
                <td>Найми убийцу и отправь его за героем!</td>
            </tr>

            <!-- Особые события -->
            <tr class="special">
                <td>44</td>
                <td>Ускоряет героя</td>
            </tr>
            <tr class="special">
                <td>93</td>
                <td>Герой превращается в лилипута</td>
            </tr>
            <tr class="special">
                <td>155</td>
                <td>Безымнный превращается в факира</td>
            </tr>
            <tr class="special">
                <td>170</td>
                <td>Вид от первого лица</td>
            </tr>
            <tr class="special">
                <td>193</td>
                <td>Герой превращается в гиганта</td>
            </tr>
            <tr class="special">
                <td>200</td>
                <td>Напустить густой туман</td>
            </tr>
            <tr class="special">
                <td>202</td>
                <td>Камера начинает крутиться как карусель</td>
            </tr>
            <tr class="special">
                <td>234</td>
                <td>Ускорение времени вокруг героя</td>
            </tr>
            <tr class="special">
                <td>260</td>
                <td>Безымянный в меру упитанный</td>
            </tr>
            <tr class="special">
                <td>266</td>
                <td>Камера сильно трясётся</td>
            </tr>
            <tr class="special">
                <td>300</td>
                <td>Вызов танцовщицы</td>
            </tr>
            <tr class="special">
                <td>432</td>
                <td>Замедление времени вокруг героя</td>
            </tr>
            <tr class="special">
                <td>501</td>
                <td>Герой танцует</td>
            </tr>
            <tr class="special">
                <td>696</td>
                <td>Камера инверсируется</td>
            </tr>
            
            <!-- Триггер  -->
            <tr class="trigger">
                <td>33</td>
                <td>Призывает мясного жука</td>
            </tr>
            <tr class="trigger">
                <td>62</td>
                <td>Призывает кротокрыса</td>
            </tr>
            <tr class="trigger">
                <td>68</td>
                <td>Призывает падальщика</td>
            </tr>
            <tr class="trigger">
                <td>70</td>
                <td>Призывает кровавую муху</td>
            </tr>
            <tr class="trigger">
                <td>99</td>
                <td>Призывает волка</td>
            </tr>
            <tr class="trigger">
                <td>111</td>
                <td>Вызывает дождь</td>
            </tr>
            <tr class="trigger">
                <td>121</td>
                <td>Заканчивает дождь</td>
            </tr>
            <tr class="trigger">
                <td>128</td>
                <td>Призывает варана</td>
            </tr>
            <tr class="trigger">
                <td>132</td>
                <td>Антиабуз - пни героя, чтобы он улетел с насиженного места</td>
            </tr>
            <tr class="trigger">
                <td>144</td>
                <td>Подсади героя - заспавни под ним бочку</td>
            </tr>
            <tr class="trigger">
                <td>157</td>
                <td>Призыв ползуна</td>
            </tr>
            <tr class="trigger">
                <td>217</td>
                <td>Призыв луркера</td>
            </tr>
            <tr class="trigger">
                <td>224</td>
                <td>Перемотать время до ночи</td>
            </tr>
            <tr class="trigger">
                <td>248</td>
                <td>Перемотать время до дня</td>
            </tr>
            <tr class="trigger">
                <td>292</td>
                <td>Призывает гончую</td>
            </tr>
            <tr class="trigger">
                <td>320</td>
                <td>Призывает гарпию</td>
            </tr>
            <tr class="trigger">
                <td>369</td>
                <td>Призывает глорха</td>
            </tr>
            <tr class="trigger">
                <td>444</td>
                <td>Призывает скелета</td>
            </tr>
            <tr class="trigger">
                <td>500</td>
                <td>Призывает зомби</td>
            </tr>
            <tr class="trigger">
                <td>888</td>
                <td>Призывает орка-скаута</td>
            </tr>
            <tr class="trigger">
                <td>999</td>
                <td>Призывает орка-шамана</td>
            </tr>
            <tr class="trigger">
                <td>1010</td>
                <td>Призывает демона</td>
            </tr>
            <tr class="trigger">
                <td>1111</td>
                <td>Призывает орка-воина</td>
            </tr>
            <tr class="trigger">
                <td>1333</td>
                <td>Призывает голема</td>
            </tr>
            <tr class="trigger">
                <td>1500</td>
                <td>Призывает тролля</td>
            </tr>
            <tr class="trigger">
                <td>1666</td>
                <td>Призывает Лорда Демонов</td>
            </tr>
            <tr class="trigger">
                <td>2000</td>
                <td>Немедленная смерть</td>
            </tr>

        </tbody>
    </table>
</template>
<script>
export default {
    name: 'Table',
}
</script>
<style lang="scss" scoped>
        .table {
            margin: auto;
            width: 60%;
            border: none;
            margin-bottom: 20px;
            margin-top: 30px;
            @media (max-width: 768px) {
              width: 100%;
            }
        }
        .table thead th {
            font-weight: 400;
            text-align: center;
            border: none;
            padding: 10px 15px;
            background-color: rgba(0, 0, 0, 0.5);
            font-size: 20px;
            @media (max-width: 500px) {
              font-size: 18px;
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
        }
        .table tbody tr td:first-child {
            border-radius: 8px 0 0 8px;
        }
        .table tbody tr td:last-child {
            text-align: left;
            border-radius: 0 8px 8px 0;
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
</style>