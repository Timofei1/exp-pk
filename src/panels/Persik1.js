import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import {platform, IOS, HeaderButton, Separator} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import persik from '../img/persik.png';
import persik1 from '../img/persik1.png';

const osname = platform();

const Persik1 = ({go, id, fetchedUser}) => (


<Panel id={id}>
		<PanelHeader
        left={<HeaderButton onClick={go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
         
           Правила беседы</PanelHeader>
		 <Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28ArticleOutline fill="#0000FF" /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon28HelpOutline /></TabbarItem>
        </Tabbar>
        
        <Group>
          <Div>
          <center><img src={persik1} alt="Persik The Cat" width="100%"/></center>
          <h3>📔 У каждой официальной беседы есть свои правила, они нужны для поддержания порядка, с них и начнем:</h3>

1.Мы не оскорбляем друг друга, наказание — <b>пред;</b><br/>
2.Мы не используем нецензурную лексику, наказание — <b>пред;</b><br/>
3.Мы не флудим, наказание — <b>пред;</b><br/>
4.Мы не используем особые хештеги не по назначению, наказание — <b>пред;</b><br/>
5.Мы не ставим фото группы эксперта на аватарку, наказание — <b>кик;</b><br/>
6.Мы не просим ставить стрелочки на посты, наказание — <b>бан;</b><br/>
7.Неадекватное, агрессивное поведение, наказание — <b>бан;</b><br/>
8.Мы не скидываем ссылки на левые паблики и сайты, а также приглашения в свои чаты / беседы, наказание — <b>пред;</b><br/>
9.Выдача себя за Администрацию в любой форме, наказание — <b>бан/кик (определяет Администратор);</b><br/>
10.Мы не нарушаем правил сайта, наказание — <b>определяет Администратор.</b><br/><br/>
<center><img src={persik} alt="Persik The Cat" width="100%"/></center>
<Separator style={{ margin: '12px 0' }} />
<h3>🔍 Определения:</h3>
<Div style={{ background: '#edeef0' }}>
• Пред / Кик / Бан — предупреждение / исключение из беседы / исключение из экспертов.<br/><br/>
• Апвоут — Ваша положительная оценка — стрелка вверх.<br/><br/>
• Даунвоут — Ваша отрицательная оценка — стрелка вниз.<br/><br/>
• Ачивка — достижение, которое дают эксперту в его карточку.<br/><br/>
• Буст, бустить — накрутка апвоутов в корыстных целях или по чьей-то просьбе.<br/><br/>
• Флуд — размещение однотипной информации, одной повторяющейся фразы, одинаковых графических файлов или просто коротких бессмысленных сообщений.<br/><br/>
• Спам — сообщения, которые не содержат смысла в беседе с оттенком нежелательного, зачастую, рекламного характера.<br/><br/>
</Div>
<Separator style={{ margin: '12px 0' }} />
<h3>🔔 Дополнительно:</h3>
<b>⚠</b> <i>Все нарушители правил будут <b>исключаться</b> из бесед. В последующем — <b>и из экспертов;</b></i><br/>
<b>⚠</b> <i>После получения <b>преда</b> следует <b>кик</b> из беседы;</i><br/>
<b>⚠</b> <i>За исключительный флуд, за флуд с провокацией и оскорблениями — <b>бан.</b></i><br/>
<Separator style={{ margin: '12px 0' }} />
<h3>✉ Особые хештеги:</h3>
<b>☑</b> <i><b>#help</b> — если у Вас есть вопрос лично к Администратору по работе и вы не получили ответ в чате.</i><br/>
<b>☑</b> <i><b>#warn</b> — если Вы видите <b>ГРУБОЕ</b> нарушение правил в чате.</i><br/><br/>
<i>Администратор будет просматривать всё с этим хэштегом, прикрепляйте к нему сообщение или скриншот с нарушением.</i>
<Separator style={{ margin: '12px 0' }} />
<Button size="xl" onClick={go} data-to="persik2">Далее</Button>
<br/>
<br/>
          </Div>
        </Group>

	</Panel>
);



Persik1.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),

};

export default Persik1;