import React from 'react'
import mount from "./tools/mount"
import Error from "./components/Error/Error"
import store from './store'
import VkSdk from "@happysanta/vk-sdk"
import {Provider} from "react-redux"
import L from "./lang/L"
import DesktopContainer from "./containers/DesktopContainer/DesktopContainer"
import MobileContainer from "./containers/MobileContainer/MobileContainer"
import './style/index.css'
import {initCoverList} from "./modules/CoverList"
import {initGameList} from "./modules/GameList"
import {initGameInfoList} from "./modules/GameInfoList"
import {initVideoList} from "./modules/VideoList"
import {initAdditionList} from "./modules/AdditionList"
import {initRequirementList} from "./modules/RequirementList"
import {initLaw} from "./modules/LawModule"
import {initCommunityList} from "./modules/CommunityList"
import {initHistory, setPageParams} from "./modules/Page"

VkSdk.init()
	.then(iFrameParams => L.init(iFrameParams.getLangCode()))
	.then(() => {

		// В настройках приложения должно быть указано, что веб версия лежит на
		// domain/app
		// а мобильная на domain/mobile. Иначе этот признак не будет работать.
		let isMobile = window.location.pathname.indexOf('/mobile') === 0

		initData()
		initHistory(store)
		store.dispatch(setPageParams({display_name: store.getState().GameList.title}))

		mount(<Provider store={store}>
			{isMobile ? <MobileContainer/> : <DesktopContainer/>}
		</Provider>)

	})
	.catch(e => {
		mount(<Error error={e}/>)
	})

function initData() {
	let coverListMock = [
		{url: 'https://games-showcase.vkforms.ru/cover_1.jpeg'},
		{url: 'https://games-showcase.vkforms.ru/cover_2.jpeg'},
		{url: 'https://games-showcase.vkforms.ru/cover_3.jpeg'},
	]
	store.dispatch(initCoverList(coverListMock))
	let gameListMock = [
		{
			name: 'PLAYERUNKNOWN\\\'S BATTLEGROUNDS',
			description: 'Игра',
			price: 1999,
			discount: 15,
			image_url: 'https://pp.userapi.com/c836125/v836125754/6661d/nOaF3744Mak.jpg',
			button_text: 'Купить игру',
			button_text_mobile: 'Купить',
		},
		{
			name: 'ONE ROW TITLE',
			description: 'Игра',
			price: 1999,
			image_url: 'https://pp.userapi.com/c836125/v836125754/6661d/nOaF3744Mak.jpg',
			button_text: 'Купить игру',
			button_text_mobile: 'Купить',
		},
		{
			name: 'PLAYERUNKNOWN\\\'S BATTLEGROUNDS',
			description: 'Игра',
			price: 1999,
			discount: 15,
			image_url: 'https://pp.userapi.com/c836125/v836125754/6661d/nOaF3744Mak.jpg',
			button_text: 'Купить игру',
			button_text_mobile: 'Купить',
		},
	]
	let gameTitle = 'Far Cry 5'
	let shareText = 'PLAYERUNKNOWN\\\'S BATTLEGROUNDS - отличная игра'
	let shareImageUrl = 'https://pp.userapi.com/c836125/v836125754/6661d/nOaF3744Mak.jpg'
	let gameDescription = 'Округ Хоуп в штате Монтана захвачен фанатиками культа Врата Эдема. Дайте отпор Иосифу Сиду и его братьям. Разожгите огонь сопротивления.'
	store.dispatch(initGameList(gameTitle, gameDescription, gameListMock, shareText, shareImageUrl))
	let infoTitle = 'Информация об игре'
	let infoListMock = [
		{title: 'Жанр', description: 'Выживание, шутер, экшен'},
		{title: 'Дата выхода', description: '17 декабря 2017'},
		{title: 'Разработчик', description: 'PUBG Corporation'},
		{title: 'Издатель', description: 'PUBG Corporation'},
	]
	store.dispatch(initGameInfoList(infoTitle, infoListMock))
	let videoListTitle = 'Видео об игре'
	let videoListMock = [
		{
			url: 'https://vk.com/video-128033123_456242381',
			preview_image_url: 'https://sun9-3.userapi.com/c848520/v848520263/27e52/GgwaqxXSbdQ.jpg',
			title: 'Полуфиналы: как это было',
			duration: 32,
		},
		{
			url: 'https://vk.com/video?z=video-24136539_456255850%2Fpl_cat_football_2018_block',
			preview_image_url: 'https://sun9-6.userapi.com/c824200/v824200701/17a070/I0pcoBNFwm8.jpg',
			title: 'ВСЕ ГОЛЫ ДНЯ НА ЧМ 2018/ОБЗОР МАТЧЕЙ. СБОРНАЯ МИРА ОТ 11 ИЮЛЯ',
			duration: 3071,
		},
		{
			url: 'https://vk.com/video?z=video-24136539_456255870%2Fpl_cat_football_2018_block',
			preview_image_url: 'https://sun9-7.userapi.com/c834401/v834401976/1886f4/RufYpF5YY1Q.jpg',
			title: 'ХОРВАТИЯ - АНГЛИЯ! 1:1! ВТОРОЙ ТАЙМ',
			duration: 97,
		},
		{
			url: 'https://vk.com/video?z=video-24136539_456255870%2Fpl_cat_football_2018_block',
			preview_image_url: 'https://sun9-7.userapi.com/c834401/v834401976/1886f4/RufYpF5YY1Q.jpg',
			title: 'ХОРВАТИЯ - АНГЛИЯ! 1:1! ВТОРОЙ ТАЙМ',
			duration: 97,
		},
		{
			url: 'https://vk.com/video?z=video-24136539_456255870%2Fpl_cat_football_2018_block',
			preview_image_url: 'https://sun9-7.userapi.com/c834401/v834401976/1886f4/RufYpF5YY1Q.jpg',
			title: 'ХОРВАТИЯ - АНГЛИЯ! 1:1! ВТОРОЙ ТАЙМ',
			duration: 97,
		},
	]
	store.dispatch(initVideoList(videoListTitle, videoListMock))
	let additionListTitle = 'Дополнения'
	let additionListMock = [
		{image_url: 'https://loremflickr.com/272/272', title: 'Speed & Momentum Crate', price: 635, url: 'https://vk.com/id0'},
		{image_url: 'https://unsplash.it/272?random', title: 'Ghosted Crate', price: 635, url: 'https://vk.com/id0'},
		{image_url: 'https://picsum.photos/272?random', title: 'Bengal Tiger', price: 319, url: 'https://vk.com/id0'},
		{image_url: 'https://loremflickr.com/272/272', title: 'Speed & Momentum Crate', price: 635, url: 'https://vk.com/id0'},
		{image_url: 'https://unsplash.it/272?random', title: 'Ghosted Crate', price: 635, url: 'https://vk.com/id0'},
		{image_url: 'https://picsum.photos/272?random', title: 'Bengal Tiger', price: 319, url: 'https://vk.com/id0'},
		{image_url: 'https://loremflickr.com/272/272', title: 'Speed & Momentum Crate', price: 635, url: 'https://vk.com/id0'},
		{image_url: 'https://unsplash.it/272?random', title: 'Ghosted Crate', price: 635, url: 'https://vk.com/id0'},
		{image_url: 'https://picsum.photos/272?random', title: 'Bengal Tiger', price: 319, url: 'https://vk.com/id0'},
	]
	store.dispatch(initAdditionList(additionListTitle, additionListMock))
	let requirementListTitle = 'Системные требования'
	let requirementListMock = [
		{
			title: 'Минимальные:',
			description: 'ОС: 64-bit Windows 7, Windows 8.1, Windows 10\n' +
			'Процессор: Intel Core i5-4430 / AMD FX-6300\n' +
			'Оперативная память: 8 GB ОЗУ'
		},
		{
			title: 'Рекомендованные:',
			description: 'ОС: 64-bit Windows 7, Windows 8.1, Windows 10\n' +
			'Процессор: Intel Core i5-6600K / AMD Ryzen 5 1600',
		},
		{
			title: 'Средние:',
			description: 'ОС: 64-bit Windows 7, Windows 8.1, Windows 10\n' +
			'Процессор: Intel Core i5-6600K / AMD Ryzen 5 1600',
		},
	]
	store.dispatch(initRequirementList(requirementListTitle, requirementListMock))
	let law = {
		text: '© 2017 PUBG CORPORATION ALL RIGHTS RESERVED \n' +
		'PLAYERUNKNOWN\'S BATTLEGROUNDS and PUBG are registered trademarks, trademarks or service marks of PUBG',
	}
	store.dispatch(initLaw(law))
	let communityTitle = 'Сообщества игры'
	let communityListMock = [
		{
			url: 'https://vk.com/pubg',
			title: 'PUBG Mail.Ru',
			description: 'Русскоязычная версия',
			image_url: 'https://pp.userapi.com/c836125/v836125754/6661d/nOaF3744Mak.jpg',
		},
		{
			url: 'https://vk.com/playpubg',
			title: 'PLAYERUNKNOWN\'S BATTLEGROUNDS',
			description: 'Официальное сообщество',
			image_url: 'https://pp.userapi.com/c837630/v837630554/49368/r_CWGsLkddI.jpg',
		},
		{
			url: 'https://vk.com/pubgmobile',
			title: 'PUBG MOBILE',
			description: 'Мобильная версия',
			image_url: 'https://pp.userapi.com/c834102/v834102940/fe3bf/j9zrSA9xD0Y.jpg',
		},
	]
	store.dispatch(initCommunityList(communityTitle, communityListMock))
}
