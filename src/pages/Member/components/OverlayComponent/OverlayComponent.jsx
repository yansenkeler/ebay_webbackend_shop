import React from "react";
import "./OverlayComponent.scss";
import { Overlay, Icon } from "@icedesign/base";
import cx from "classnames";

class OverlayComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isActive: props.defaultActive,
		};
		this.handleMouseClick = this.handleMouseClick.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
	handleMouseEnter(e){
		this.setState({
			isActive: true
		});
	}
	handleMouseLeave(e){
		this.setState({
			isActive: this.props.selected
		});
	}
	handleMouseClick(e){
		this.props.handleClick(e, [this.props.children.ref]);
		this.setState({
			isActive: true
		});
	}
	toggleOverlay(show){
		this.setState({
			isActive: show
		});
	}
	componentDidMount(){
	
	}
	render() {
		let { additionClass } = this.props;
		return (
			<div
				className={cx(Object.assign({"container": true}, additionClass))}
				onClick={this.handleMouseClick}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				{this.props.children}
				<div
					className={cx({
							"overlay": true,
							"center": true,
							"hide": !this.state.isActive,
						})}
				>
					<span><Icon type="edit" size="small"/></span>
				</div>
			</div>
		);
	}
}

export default OverlayComponent;