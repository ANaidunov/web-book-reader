import React from 'react';
import './SettingsToolbar.css'
import '../FontAwesome/FontAwesome.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SettingsToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeIcon: "moon",
    };
  };

  render() {
    return (
        <div id="left-toolbar-container">
          <div id="settings-toolbar" theme={this.props.theme}>
                <FontAwesomeIcon id="increase-font-icon" icon="plus-square" className="toolbar-button" theme={this.props.theme} 
                  onClick={() => {this.props.updateFontSize(2)}}
                />
                <FontAwesomeIcon id="decrease-font-icon" icon="minus-square" className="toolbar-button" theme={this.props.theme}
                  onClick={() => {this.props.updateFontSize(-2)}}
                 />
                <FontAwesomeIcon id="theme-icon" icon={this.state.themeIcon} className="toolbar-button" theme={this.props.theme} onClick={() => {this.themeSwitchClick(); this.props.changeTheme();}}/>
                <FontAwesomeIcon id="sync-switch-icon" icon="sync" className="toolbar-button" theme={this.props.theme} />
          </div>
        </div>
    );
  }

  themeSwitchClick() {
    let themeIcon = this.state.themeIcon;
    if (themeIcon === "moon") {
      themeIcon = 'sun';
    } else {
      themeIcon = 'moon';
    };
    this.setState({
      themeIcon: themeIcon,
    });
  }
};




