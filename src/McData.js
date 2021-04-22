import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class McData extends Component {
    state = {
        address: '',
        info: {
            online: false,
            hostname: ''
        }
    }

    appChange = (e) => {
        this.setState({ address: e.target.value });
    }

    appClick = async() => {

        await fetch('https://api.mcsrvstat.us/2/mc.hypixel.net')
            .then(res => res.json())
            .then(data => {
                this.state.info.online = data.online;
                this.setState({ info: data });
            });

        console.log(this.state.info);

    }

    render() {

        const { address, info } = this.state;
        const { appChange, appClick } = this;

        return(

            <div>
                <input className="UserName" type="text" placeholder="Server Address" value={ address } onChange={ appChange } />
                <button className="SearchBtn" onClick={ appClick }>Search</button>

                <div className="hostName">Host name: { info.hostname }</div>

                {
                    info.online === true
                        // ? <span className="onColor">ㅁ</span>
                        // : <span className="offColor">ㅁ</span>
                        ? <div className="statusOn">Status: <FontAwesomeIcon icon="toggle-on" /></div>
                        : <div className="statusOff">Status: <FontAwesomeIcon icon="toggle-off" /></div>
                }

            </div>

        );
    }

}

export default McData;