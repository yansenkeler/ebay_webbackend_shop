import React, {Component} from 'react';
import {Route, Link, withRouter, Redirect} from 'react-router-dom';
import MemberAsideLayout from './components/MemberAsideLayout';
import BaseEdit from './components/BaseEdit';
import { memberMenuConfig, membersData, baseeditTabs, getCardPreviewRefs } from "./dataConfig";

@withRouter
class Member extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	
	render() {
		const navData1 = memberMenuConfig(),
			dropdownData1 = membersData(),
			navData2 = baseeditTabs(),
			cardPreviewRefs = getCardPreviewRefs();
		let { match } = this.props;
		let routes = [];
		navData1.map((item, index) => {
			if(item.path){
				return (
					<Route
						path={`${match.url}${item.path}`}
						render={(props) => React.createElement(item.component, props)}
					/>
				);
			}else{
				item.children.map((iitem, iindex) => {
					if(iitem.path){
						return (
							<Route
								path={`${match.url}${iitem.path}`}
								render={(props) => React.createElement(iitem.component, props)}
							/>
						);
					}
				});
			}
		});
		return (
			<div>
				<MemberAsideLayout
					navs={navData1}
					dropmenus={dropdownData1}
				>
					{/*{routes}*/}
					<Route path={`${match.url}/edit/base`} render={(props) => {
						return (
							<BaseEdit
								{...props}
								tabConfig={navData2}
								previewRefs={cardPreviewRefs}
							/>
						);
					}}/>
					{/* <Redirect from={`${match.url}`} to={`${match.url}/membersAdvance`} exact/> */}
				</MemberAsideLayout>
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

export default Member;
