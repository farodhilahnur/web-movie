import React, { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header"
import Blog from '../components/Card'
import axios from 'axios'

export default function Movies() {
    const [data, setData] = useState([]);


    useEffect(() => {
        getMovies()
    }, [])
    const getMovies = () => {
        axios.get('https://639eec4f5eb8889197efde56.mockapi.io/list')
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <>
            <Header></Header>
            <div class='container'>
                <div style={{ marginTop: '40px' }}>
                <Row xs={5}>
                    {data?.map((item) => (
                        <Col xl="3">
                        <Blog
                            image={item.picture}
                            title={item.title}
                            subtitle={item.original_language}
                            text={item.overview}
                            detail={`/movie/${item.id}` }
                        />
                    </Col>
                    ))}
                </Row>
                </div>
            </div>

        </>
    )
}