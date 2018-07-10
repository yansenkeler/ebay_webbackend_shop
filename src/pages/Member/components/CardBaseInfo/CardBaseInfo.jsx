/**
 * Created by xmgong on 2018/6/26.
 * 基本信息
 */
import React, {Component} from 'react';
import IcePanel from '@icedesign/panel';
import { Button, Form, Input, Grid, Upload } from "@icedesign/base";
import {
	FormBinderWrapper as IceFormBinderWrapper,
	FormBinder as IceFormBinder,
	FormError as IceFormError,
} from '@icedesign/form-binder';
import FormBinderFiled from "../FormBinderFiled";

const {Row, Col} = Grid;

class CardBaseInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formdata: {}
		};
		this.handleFormChange = this.handleFormChange.bind(this);
		this.onImageUploadStart = this.onImageUploadStart.bind(this);
	}
	
	handleFormChange(value) {
		console.log(value);
	}
    onImageUploadStart(file){
		console.log(file);
	}
	render() {
		const {match} = this.props;
		return (
			<div>
				<IcePanel status="info">
					<IcePanel.Header>
						基本信息
					</IcePanel.Header>
					<IcePanel.Body>
						<IceFormBinderWrapper value={this.state.formdata} onChange={this.handleFormChange}>
							<div>
								<FormBinderFiled
									labelName="cardid"
									bindName="cardid"
								>
									<div style={{margin: "auto"}}>pmmFtwmq4Pdgh7xCOv7Cgaw0pkwQ</div>
								</FormBinderFiled>
								<FormBinderFiled
									labelName="卡券封面"
									bindName="cardcover"
								>
									<Upload.Core
										action="//next-upload.shuttle.alibaba.net/upload" // 该接口仅作测试使用，业务请勿使用
										accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
										onStart={this.onImageUploadStart}
									>
										<div>请参照<a href="">图片规范</a>上传</div>
										<Button type="primary">上传文件</Button>
										<div>
                                            <img src="" />
										</div>
									</Upload.Core>
								</FormBinderFiled>
								<FormBinderFiled
									labelName="会员卡标题"
									bindName="cardtitle"
								>
									<Input placeholder="input card title"/>
									<span>建议会员卡标题包含商户名或服务内容，如**会员尊享卡</span>
								</FormBinderFiled>
							</div>
						</IceFormBinderWrapper>
					</IcePanel.Body>
					<IcePanel.Footer>
						<Button type="primary">保存</Button>
					</IcePanel.Footer>
				</IcePanel>
			</div>
		);
	}
}

export default CardBaseInfo;