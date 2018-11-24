import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const API = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=15c0fc9494e74d28af22b4237d050ddf';

class NewsList1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ news: data.articles }));
  }

  render() {
    const { news } = this.state;

    return (
      <Row>
        {news ? news.map((article, i) =>
        <Col sm="4" key={i}>
          <Card body>
            <CardImg top width="100%" src={article.urlToImage} alt="Card image cap" />
            <CardTitle>{article.title}</CardTitle>
            <CardText>{article.description}</CardText>
            <CardText>{article.content}</CardText>
            <Button href={article.url}>Read More</Button>
          </Card>
        </Col>
          )
          : null
        }
      </Row>
    );
  }

}

export default NewsList1;
