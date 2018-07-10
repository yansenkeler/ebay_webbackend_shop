import React, {Component} from 'react';
import CardPreview from '../CardPreview';
import {Tab} from "@icedesign/base";
import {Route} from 'react-router-dom';
import cx from "classnames";
import "./BaseEdit.scss";

const TabPane = Tab.TabPane;

class BaseEdit extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			tabIndex: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleCardPreviewClick = this.handleCardPreviewClick.bind(this);
	}
	
	handleChange(key) {
	
	};
	
	handleClick(key) {
		this.setState({
			tabIndex: key
		});
		this.refs.cardpreview.handleMouseClick(null, [key]);
	};
	handleCardPreviewClick(ref){
		const tabKey = ref[0].split("$")[0];
		this.setState({
			tabIndex: tabKey
		});
	}
	render() {
		let { match, tabConfig, previewRefs } = this.props;
		tabConfig.map((t) => {
			t.content = React.createElement(t.component);
			return t;
		});
		return (
			<div style={styles.mainview}>
				<CardPreview ref="cardpreview" handleClick={this.handleCardPreviewClick} moduleRefs={previewRefs}/>
				<div style={{width: '20px'}}/>
				<Tab
					onChange={(res) => this.handleChange(res)}
					size="small"
					style={{flex: 1}}
					activeKey={this.state.tabIndex}
					className={cx("base-edit-tab")}
				>
					{tabConfig.map((item, index) => (
						<TabPane
							key={item.key}
							tab={item.tab}
							onClick={(key) => this.handleClick(key)}
						>
							{item.content}
						</TabPane>
					))}
				</Tab>
			</div>
		);
	}
}

const styles = {
	mainview: {
		display: 'flex',
		flexDirection: 'row',
		minHeight: 500,
	}
};

export default BaseEdit;
