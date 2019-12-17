import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Game from '@vkontakte/icons/dist/28/game';
import { platform, IOS, Search } from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';


import persik from '../img/persik.png';
import './Persik.css';

const osName = platform();

const Persik1 = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>
    Сервера
    </PanelHeader>
      <Search />    
		<Tabbar>
          <TabbarItem
            onClick={go}
            data-to="home"
          ><Icon28MarketOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon28HelpOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik1"
          ><Icon28Game fill="#0000FF" /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik3"
          ><Icon28ArticleOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik2"
          ><Icon28SettingsOutline /></TabbarItem>
        </Tabbar>

        <Group title="Каталог серверов">
        <Div>
        <center>
        <h3>Название сервера</h3>
        <br/>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <br/>
        Айпи: <b>тут будет айпи</b><br/>
        Описание: <i>Тут будет описание</i>
        <Separator style={{ margin: '12px 0' }} />
        <h3>Название сервера</h3>
        <br/>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <br/>
        Айпи: <b>тут будет айпи</b><br/>
        Описание: <i>Тут будет описание</i>
        <Separator style={{ margin: '12px 0' }} />
        <h3>Название сервера</h3>
        <br/>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <br/>
        Айпи: <b>тут будет айпи</b><br/>
        Описание: <i>Тут будет описание</i>
        <Separator style={{ margin: '12px 0' }} />
        <h3>Название сервера</h3>
        <br/>
        <img src="https://5play.ru/uploads/posts/2019-07/1562315043_1.webp" width="270" />
        <br/>
        Айпи: <b>тут будет айпи</b><br/>
        Описание: <i>Тут будет описание</i>
        <Separator style={{ margin: '12px 0' }} />
        </center>
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
