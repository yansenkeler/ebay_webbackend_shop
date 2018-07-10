import DiyBusiness from "./components/DiyBussinessView";
import CenterBtn from "./components/CenterBtnView";
import MemberInfo from "./components/MemberInfoView";
import CardBaseInfo from "./components/CardBaseInfo";
import CardDetail from "./components/CardDetail";

const memberMenuConfig = () => [
	{index: 0, name: '会员', path: '/membersAdvance', component: ""},
	{index: 1, name: '积分商城', path: '/pointCard/list', component: ""},
	{index: 2, name: '储值卡', path: '/storedCard/summary', component: ""},
	{index: 3, name: '计次卡', path: '/jici/list', component: ""},
	{index: 4, name: '会员等级', path: '/memberLevels', component: ""},
	{index: 5, name: '渠道二维码', path: '/channel/list', component: ""},
	{index: 6, name: '统计报表', children: [
			{index: 0, name: '积分报表', path: '/bonus/stat/[20180701,20180705]', component: ""},
			{index: 1, name: '推广报表', path: '/recommend/reports/performance/[1,10,20180701,20180705,true]', component: ""},
		]
	},
	{index: 7, name: '配置', children: [
			{index: 0, name: '基础设置', path: '/edit/base', component: "BaseEdit"},
			{index: 1, name: '开卡信息', path: '/activateUserForm', component: ""},
			{index: 2, name: '付费开卡', path: '/activateBuy', component: ""},
			{index: 3, name: '开卡赠券', path: '/activatePush', component: ""},
			{index: 4, name: '跟随推荐', path: '/activateRecommend', component: ""},
			{index: 5, name: '支付即会员', path: '/payGiftCard', component: ""},
			{index: 6, name: '分享设置', path: '/shareConfig'},
		]
	},
];


const membersData = () => [
	{name: "优享会员卡"},
	{name: "三里香餐厅",},
	{name: "美食卡",},
	{name: "收单宝平台会员卡"}
];

const baseeditTabs = () => [
	{tab: "基本信息", key: "baseinfo", path: "/baseinfo", component: CardBaseInfo},
	{tab: "自定义会员信息类目", key: "diycategory", path: "/diycategory", component: MemberInfo},
	{tab: "中心按钮", key: "centerbtns", path: "/centerbtns", component: CenterBtn},
	{tab: "自定义/营销入口", key: "sall", path: "/sall", component: DiyBusiness},
	{tab: "会员卡详情", key: "detail", path: "/detail", component: CardDetail}
];

const getCardPreviewRefs = () => [
	{
		ref: "baseinfo",
	},
	{
		ref: "diycategory$1"
	},
	{
		ref: "diycategory$2"
	},
	{
		ref: "diycategory$3"
	},
	{
		ref: "centerbtns"
	},
	{
		ref: "sall$1"
	},
	{
		ref: "sall$2"
	},
	{
		ref: "sall$3"
	},
	{
		ref: "sall$4"
	},
	{
		ref: "detail"
	}
];

export { memberMenuConfig, membersData, baseeditTabs, getCardPreviewRefs };