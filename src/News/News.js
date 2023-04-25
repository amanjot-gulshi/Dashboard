import React, { useState, useEffect } from "react"
import { NEWS_API_URL, NEWS_API_KEY } from "../api"
import { Container, Col, Card, Row } from 'react-bootstrap';
import './news.css'
import NewsSearch from "./search/NewsSearch";

const News = () => {

    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);


    //Make api call to news api
    const handleOnSearchChange = (searchData) => {

        const query = searchData.label
        //Set loading boolean to true so that we know to show loading text
        setLoading(true);

        //Make news api call using axios
        const newsFetch = fetch(`${NEWS_API_URL}q=${query}&from=2023-03-25&sortBy=relevancy&apiKey=${NEWS_API_KEY}`);


        Promise.all([newsFetch])
            .then(async (response) => {
                const newsResponse = await response[0].json();
                console.log(newsResponse)

                setNewsData(newsResponse.articles);
            })
            .catch((err) => { console.log(err) });


        // console.log(resp)


        //Set loading boolean to false so that we know to show news articles
        setLoading(false);
    }

    return (
        <div className="container">
            <NewsSearch onSearchChange={handleOnSearchChange} />
            {loading ? "Loading..." : <Container className="news-container">
                <Row className='news-row'>
                    {newsData.map((newsData, index) =>
                        <Col key={index} sm="12" md="6" lg="6" xl="4" xxl="3">
                            <Card >
                                <Card.Img className="news-thumbnail" variant="top" src={newsData.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{newsData.title}</Card.Title>
                                    <Card.Subtitle>{newsData.author}</Card.Subtitle>
                                    <Card.Text>
                                        {newsData.description.substring(0, 200)}...
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
            }

        </div>
    )
}

export default News;