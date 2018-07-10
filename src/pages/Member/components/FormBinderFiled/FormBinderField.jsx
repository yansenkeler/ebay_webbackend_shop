import React from "react";
import "./FormBinderField.scss";
import { Grid } from "@icedesign/base";
import {
	FormBinder as IceFormBinder
} from "@icedesign/form-binder";

const { Col, Row } = Grid;

class FormBinderField extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<Row justify="end">
				<Col span="20">
					<IceFormBinder name={this.props.bindName}>
						<div className="field-group">
							<div className="field-name">{this.props.labelName}</div>
							<div className="field-value">
								{this.props.children}
							</div>
						</div>
					</IceFormBinder>
				</Col>
			</Row>
		);
	}
}

export default FormBinderField;