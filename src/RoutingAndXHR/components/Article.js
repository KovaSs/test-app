import React from 'react';
import {Link} from 'react-router-dom';

import withFetcher from '../withFetcher'

const style = {
  'article': {
    'backgroundColor': '#bdbdbd',
    'marginRight': 'auto',
    'marginLeft': 'auto',
    'marginTop': '20px',
    'paddingTop': '40px',
    'paddingBottom': '40px',
    'width': '70%'
  },
  'title': {
    'fontSize': '24px',
    'textAlign': 'center'
  },
  'author': {
    'marginTop': '12px',
    'fontSize': '18px',
    'fontStyle': 'italic'
  },
  'text': {
    'marginTop': '12px',
    'wordWrap': 'break-word',
    'fontSize': '16px'
  },
  'comments': {
    'display': 'flex',
    'flexDirection': 'column',
    'fontSize': '12px'
  },
  'comment': {
    'marginTop': '12px',
    'width': '240px'
  }
};

class Comments extends React.Component {
  render(){
    const {comments} = this.props

    if(!comments){
      return (
        <div>
          Loading comments...
        </div>
      )
    }

    return (
      <div style={style.comments}>
        {
          comments.map((comment, index) => (<div style={style.comment} key={index}>
            <div>{comment.author}</div>
            <div>{comment.text}</div>
          </div>))
        }
      </div>
    )
  }
}

const Article = ({match, articles}) => {

  if(!articles || !articles.length){
    return (
      <div style={style.article}> Загрузка </div>
    )
  }

  let article;
  
  if(match.params.id){
    article = articles.find(({id}) => id === match.params.id);
  } else if(articles.length) {
    article = articles[0];
  }
  
  const {title, author, text, id} = article;

  const CommentsComponent = withFetcher({
    url: `/api/articles/${id}/comments`,
    collName: 'comments'
  })(Comments)

  return (
    <div style={style.article}>
      <Link to="/">Назад ко всем статьям</Link>
      <div style={style.title}>{title}</div>
      <div style={style.author}>{author}</div>
      <div style={style.text}>{text}</div>
      <CommentsComponent/>
    </div>
  );
};

export default Article