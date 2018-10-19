import React from 'react';
import {withRouter} from 'react-router';

const style = {
  app_header: {
    'backgroundColor': '#222',
    'height': '150px',
    'padding': '20px',
    'marginBottom': '8px',
    'color': 'white'
  }
};

class Header extends React.Component {

  render() {
    const {location, articles} = this.props;
    let title = 'Добро пожаловать в Журнал "Мурзилка"';

    const artIndex = location.pathname.indexOf('/article/');

    if (artIndex > -1 && articles && articles.length) {
      const queryInd = location.pathname.indexOf('?');

      let artId;

      if (queryInd > -1) {
        artId = location.pathname.substr(artIndex + 9, queryInd - artIndex + 9);
      } else {
        artId = location.pathname.substr(artIndex + 9);
      }

      title = `Автор статьи: ${articles.find(({id}) => id === artId).author}`;
    }

    return (
      <div style={style.app_header}>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default withRouter(Header);