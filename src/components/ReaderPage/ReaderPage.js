import React from 'react';
import './ReaderPage.css';
import BookPage from '../BookPage/BookPage';
import SettingsToolbar from '../SettingsToolbar/SettingsToolbar';

export default class ReaderPage extends React.Component {
  state = {
    fontSize: '20px',
    theme: 'light',
  };

  render() {
    return (
      <div id='reader-page'>
        <SettingsToolbar updateFontSize={this.updateFontSize} changeTheme={this.changeTheme} theme={this.state.theme} />
        <BookPage theme={this.state.theme} />
      </div>
    );
  }

  updateFontSize = (value) => {
    let bookPage = document.getElementById('book-page');

    let fontSizeString = this.state.fontSize;
    let fontSize = +fontSizeString.slice(0, -2) + value;

    if (fontSize > 0) {
      bookPage.style.fontSize = fontSize + 'px';
      this.setState({ fontSize: fontSize + 'px' });
    }
  }

  changeTheme = () => {
    let theme = this.state.theme;
    if (theme === "light") {
      theme = 'dark';
      document.body.style.backgroundColor = "rgb(54, 54, 54)";
     
    } else {
      theme = 'light';
      document.body.style.backgroundColor = "rgb(231, 231, 231)";
    };
    this.setState({
      theme: theme,
    });
  }
}


