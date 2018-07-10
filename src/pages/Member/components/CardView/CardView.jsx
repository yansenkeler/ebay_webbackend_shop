import React, { Component } from 'react';
import './CardView.scss';

const backgroundImage =
    'https://img.alicdn.com/tfs/TB1zsNhXTtYBeNjy1XdXXXXyVXa-2252-1500.png';



export default class CardView extends Component {
    constructor(props) {
        super(props);
    }


    render = () => {
        return (<div style={styles.cardimg}>
            <img src={require('../../../../images/bg.png')}
                style={{ width: '100%', height: '120px', borderRadius: "5px" }} />
        </div>);
    }
}


const styles = {
    cardimg: {
        width: "100%",
        height: "120px",
        margin: "20px",
        // backgroundImage: `url(${backgroundImage})`,
        // backgroundColor: '#f00',
    }
}