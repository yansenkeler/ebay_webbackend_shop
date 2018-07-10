import React from "react";
import Layout from "@icedesign/layout";
import { Nav, Breadcrumb, Dropdown, Menu, Icon } from "@icedesign/base";
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import BaseEdit from "../BaseEdit";
import "./MemberAsideLayout.scss";
import FoundationSymbol from 'foundation-symbol';


// const { Item, SubNav } = Nav;

@withRouter
class MemberAsideLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: "0",
            openKey: [],
            dropDownKey: "0",
            isOpen: false
        };
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onDropClick = this.onDropClick.bind(this);
        this.findNavKey = this.findNavKey.bind(this);
        this.onMenuOpen = this.onMenuOpen.bind(this);
    }
    onMenuOpen(key, e){
        this.setState({
            openKey: key
        });
    }
    onMenuClick(key, e) {
        let arr = key.split(",");
        if(arr.length===1){
            this.setState({
                selectedKey: key,
            });
        }else{
            this.setState({
                selectedKey: key,
            });
        }
        
    }
    onDropClick(key, e) {
        this.setState({
            dropDownKey: key
        });
    }
    findNavKey(menus, path) {
        for (let i = 0; i < menus.length; i++) {
            let menu = menus[i];
            let p = "";
            if (menu.children) {
                for (let j = 0; j < menu.children.length; j++) {
                    let m = menu.children[j];
                    p += m.path ? m.path : "";
                    if (path.indexOf(p) !== -1) {
                        return [i, j];
                    }
                }
            } else {
                p += menu.path ? menu.path : "";
                if (path.indexOf(p) !== -1) {
                    return [i];
                }
            }
        }
        return [7, 0];
    }
    componentDidMount(){

    }
    render() {
        let { match } = this.props,
            pathname = match.url,
            menuConfig = this.props.navs,
            members = this.props.dropmenus,
            keyArr = this.state.selectedKey.split(","),
            menuName = menuConfig,
	        navKey = this.props.location.pathname,
            initKey = this.findNavKey(menuConfig, navKey),
            defaultSelectedKey1 = this.state.selectedKey,
            defaultOpenKey = [];
        
        if(initKey.length>1){
            defaultSelectedKey1 = initKey.join(",");
            defaultOpenKey = [initKey[0].toString()];
        }else{
            defaultSelectedKey1 = initKey.join(",");
        }
        for (let i = 0; i < keyArr.length; i++) {
            if (i < keyArr.length - 1) {
                menuName = menuName[parseInt(keyArr[i])].children;
            } else {
                menuName = menuName[parseInt(keyArr[i])].name;
            }
        }
        let dropdownName = members[parseInt(this.state.dropDownKey)].name;
        let dropdownDom = (
            <Dropdown
                trigger={
                    <a
                        style={{ color: (this.state.isOpen ? "black" : "dodgerblue") }}
                    >
                        {dropdownName}&nbsp;&nbsp;<Icon size="xs" type={this.state.isOpen ? "arrow-down" : "arrow-right"} />
                        &nbsp;&nbsp;
                    </a>
                }
                triggerType="click"
                beforeOpen={() => { this.setState({ isOpen: true }) }}
                beforeClose={() => { this.setState({ isOpen: false }) }}
            >
                <Menu>
                    {members.map((m, index) => {
                        return (
                            <Menu.Item
                                key={index.toString()}
                                onClick={this.onDropClick}
                            >
                                <Link to={`${this.props.match.url}`}>{m.name}</Link>
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Dropdown>
        );
        let navDom = (
            <Menu 
                prefixCls="ice-menu"
                direction="ver" 
                openMode="multiple" 
                openKeys={this.state.openKey}
                selectedKeys={[this.state.selectedKey]}
                defaultSelectedKeys={["1"]}
                onOpen={this.onMenuOpen}
                defaultOpenKeys={defaultOpenKey}
                indentSize={0}
                selectMode="single"
            >
                {menuConfig.map((menu, index1) => {
                    if (menu.children) {
                        return (
                            <Menu.SubMenu 
                                key={index1.toString()} 
                                label={menu.name} 
                            >
                                {menu.children.map((child, index2) => {
                                    return (
                                        <Menu.Item
                                            key={index1 + "," + index2}
                                            onClick={this.onMenuClick}
                                        >
                                            <Link to={`${pathname}${child.path}`}>{child.name}</Link>
                                        </Menu.Item>
                                    );
                                })}
                            </Menu.SubMenu>
                        );
                    } else {
                        return (
                            <Menu.Item key={index1.toString()} onClick={this.onMenuClick}>
                                <Link to={pathname + menu.path}>{menu.name}</Link>
                            </Menu.Item>
                        );
                    }
                })}
            </Menu>
        );
        return (
            <Layout fixable={true} >
                <Layout.Header className="header">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item>
                            {dropdownDom}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {menuName}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Layout.Header>
                <Layout.Section>
                    <Layout.Aside scrollable={true} className="layout-aside">
                        {navDom}
                    </Layout.Aside>
                    <Layout.Main scrollable={true} >
                        {this.props.children}
                    </Layout.Main>
                </Layout.Section>
            </Layout>
        );
    }
}
export default MemberAsideLayout;