import React, {Component} from 'react';
import './CardPreview.scss';
// const backgroundImage = 'https://img.alicdn.com/tps/TB1qfWuMVXXXXcEXpXXXXXXXXXX-434-254.png';
const backgroundImage = 'https://img.alicdn.com/tfs/TB1zsNhXTtYBeNjy1XdXXXXyVXa-2252-1500.png';
import OverlayComponent from "../OverlayComponent";
import { Overlay } from "@icedesign/base";
import cx from "classnames";

class CardPreview extends Component {
	constructor(props) {
		super(props);
		let initSelected = [];
		props.moduleRefs.map((ref, index) => {
			initSelected.push({
				is: index === 0,
				name: ref.ref
			});
		});
		this.state = {
			selected: initSelected          // 与每一个模块的ref对应，包裹该模块的OverComponent的ref为该ref后面添加`parent`
		};
		this.handleMouseClick = this.handleMouseClick.bind(this);
	}
	// @ref 点击的模块对应的ref数组，或者响应`BaseEdit.jsx`中tab改变而切换模块
	handleMouseClick(e, ref){
		let beforeSelected = this.state.selected;
		for (let i = 0; i < this.state.selected.length; i++) {
			let p = this.state.selected[i];
			if(ref.indexOf(p.name.split("$")[0]) !== -1 || ref.indexOf(p.name) !== -1){
				beforeSelected[i].is = true;
				this.refs[p.name+"parent"].toggleOverlay(true);
			}else{
				
				beforeSelected[i].is = false;
				this.refs[p.name+"parent"].toggleOverlay(false);
			}
		}
		this.setState((state) => ({
			selected: beforeSelected
		}));
		if(e){
			// 此时点击了预览界面上的模块要去触发`BaseEdit.jsx`中的tab
			this.props.handleClick(ref);
		}
	}
	render() {
		const { moduleRefs } = this.props;
		return (
			<div className="mainview" style={{flexDirection: 'column'}}>
				<div className="topbar">
					会员卡
				</div>
				<div className="cardview">
					{/*会员卡图片*/}
					<OverlayComponent
						handleClick={this.handleMouseClick}
						selected={this.state.selected[0].is}
						defaultActive={true}
						ref={this.state.selected[0].name+"parent"}
						className={cx("overlay-component")}
						additionClass={{"cardimgbox": true}}
					>
						<div className="cardimg" ref={this.state.selected[0].name}>
							<img src={backgroundImage}
							     style={{width: '100%', height: '140px', borderRadius: "8px"}}/>
							<div style={styles.cardinfo}>
								<div className="cardinfo_icon_view">
									<img
										src={'http://ofp54bn7a.bkt.clouddn.com/icon_example.png'}
										style={styles.cardinfo_img}
									/>
									<div className="cardinfo_info_view">
										<span className="cardinfo_info_shopname">店铺名称</span>
										<span className="cardinfo_info_cardname">店铺地址</span>
									</div>
								</div>
								<div className="cardinfo_num">
									025 8888 8888
								</div>
							</div>
						</div>
					</OverlayComponent>
					{/*会员信息*/}
					<div className="info_view">
						<OverlayComponent
							handleClick={this.handleMouseClick}
							selected={this.state.selected[1].is}
							defaultActive={false}
							ref={this.state.selected[1].name+"parent"}
							className={cx("overlay-component")}
							additionClass={{"infoviewitem": true}}
						>
							<div className="info_item_view" ref={this.state.selected[1].name}>
								<span className="info_item_key">积分</span>
								<span className="info_item_value">0</span>
							</div>
						</OverlayComponent>
						<OverlayComponent
							handleClick={this.handleMouseClick}
							selected={this.state.selected[2].is}
							defaultActive={false}
							ref={this.state.selected[2].name+"parent"}
							className={cx("overlay-component")}
							additionClass={{"infoviewitem": true}}
						>
							<div className="info_item_view" ref={this.state.selected[2].name}>
								<span className="info_item_key">余额</span>
								<span className="info_item_value">查看</span>
							</div>
						</OverlayComponent>
						<OverlayComponent
							handleClick={this.handleMouseClick}
							selected={this.state.selected[3].is}
							defaultActive={false}
							ref={this.state.selected[3].name+"parent"}
							className={cx("overlay-component")}
							additionClass={{"infoviewitem": true}}
						>
							<div className="info_item_view" ref={this.state.selected[3].name}>
								<span className="info_item_key">记次</span>
								<span className="info_item_value">查看</span>
							</div>
						</OverlayComponent>
					</div>
					
					{/*中心按钮*/}
					<OverlayComponent
						handleClick={this.handleMouseClick}
						selected={this.state.selected[4].is}
						defaultActive={false}
						ref={this.state.selected[4].name+"parent"}
						className={cx("overlay-component")}
						additionClass={{"centerbtnview": true}}
					>
						<div className="centerbtn_view" ref={this.state.selected[4].name}>
							<div className="centerbtn_btn">
								<span>存储卡买单</span>
							</div>
							<div className="subtitle">
								支持储值卡和普通微信支付
							</div>
						</div>
					</OverlayComponent>
					
					{/*其余的设置项*/}
					<OverlayComponent
						handleClick={this.handleMouseClick}
						selected={this.state.selected[5].is}
						defaultActive={false}
						ref={this.state.selected[5].name+"parent"}
						className={cx("overlay-component")}
						additionClass={{"addsettingview": true}}
					>
						<div className="cardvoucher_view addsettinglayout" ref={this.state.selected[5].name}>
							<div className="name">
								自定义入口1
							</div>
							<div className="value">
								未使用
							</div>
						</div>
					</OverlayComponent>
					
					<OverlayComponent
						handleClick={this.handleMouseClick}
						selected={this.state.selected[6].is}
						defaultActive={false}
						ref={this.state.selected[6].name+"parent"}
						className={cx("overlay-component")}
						additionClass={{"addsettingview": true}}
					>
						<div className="cardvoucher_view addsettinglayout" ref={this.state.selected[6].name}>
							<div className="name">
								自定义入口2
							</div>
							<div className="value">
								未使用
							</div>
						</div>
					</OverlayComponent>
					<OverlayComponent
						handleClick={this.handleMouseClick}
						selected={this.state.selected[7].is}
						defaultActive={false}
						ref={this.state.selected[7].name+"parent"}
						className={cx("overlay-component")}
						additionClass={{"addsettingview": true}}
					>
						<div className="cardvoucher_view addsettinglayout" ref={this.state.selected[7].name}>
							<div className="name">
								自定义入口3
							</div>
							<div className="value">
								未使用
							</div>
						</div>
					</OverlayComponent>
					<OverlayComponent
						handleClick={this.handleMouseClick}
						selected={this.state.selected[8].is}
						defaultActive={false}
						ref={this.state.selected[8].name+"parent"}
						className={cx("overlay-component")}
						additionClass={{"addsettingview": true}}
					>
						<div className="cardvoucher_view addsettinglayout" ref={this.state.selected[8].name}>
							<div className="name">
								自定义入口4
							</div>
							<div className="value">
								未使用
							</div>
						</div>
					</OverlayComponent>
					<OverlayComponent
						handleClick={this.handleMouseClick}
						selected={this.state.selected[9].is}
						defaultActive={false}
						ref={this.state.selected[9].name+"parent"}
						className={cx("overlay-component")}
						additionClass={{"addsettingview": true}}
					>
						<div className="cardvoucher_view addsettinglayout" ref={this.state.selected[9].name}>
							<div className="name">
								会员卡详情
							</div>
							<div className="value">
							</div>
						</div>
					</OverlayComponent>
					<div className="addsettingview overlay-component">
						<div className="cardvoucher_view addsettinglayout">
							<div className="name">
								适用门店
							</div>
							<div className="value">
							</div>
						</div>
					</div>
					<div className="addsettingview overlay-component">
						<div className="cardvoucher_view addsettinglayout">
							<div className="name">
								公众号
							</div>
							<div className="value">
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	cardinfo: {
		position: 'relative',
		top: '-140px',
		width: "100%",
		height: "100px",
	},
	cardinfo_img: {
		width: '40px',
		height: '40px',
		borderRadius: '20px'
	},
};

export default CardPreview;