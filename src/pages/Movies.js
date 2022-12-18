import React, { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header"
import Blog from '../components/Card'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Movies() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const onSearchPage = () => {
        navigate(`/movies?search=${search}`)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearchPage()

        }
    }

    useEffect(() => {
        getMovies()
    }, [])
    const getMovies = () => {
        axios.get('https://6311f91ef5cba498da8988fd.mockapi.io/api/v1/movies')
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
                <div >
                    <div className='carousel-container flex'>
                        <div className='flex text-white justify-center pl-16 flex-col	'>
                            <h1 className='font-bold'>Welcome !</h1>
                            <div className='text-lg'>Explore more movies and Let's Enjoy it</div>
                            <div className='d-flex flex-row items-center mt-4'>
                                <input className=' h-8 rounded-2xl w-96 pl-4 mr-3' style={{ color: 'black', display: 'flex' }} placeholder="Search for Movies ..." onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
                                <Button style={{ borderRadius: '80px', height: '30px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} onClick={onSearchPage}>Search</Button>

                            </div>
                        </div>

                    </div>
                    <div className='mt-5 text-2xl font-semibold'>
                        Popular on This Week
                    </div>
                    <Row xs={5} className="mt-2">
                        {data?.map((item) => (
                            <Col xl="2">
                                <Blog
                                    image={item.picture}
                                    title={item.title}
                                    subtitle={item.original_language}
                                    text={item.overview}
                                    detail={`/movie/${item.id}`}
                                    genre={item.genre}

                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

        </>
    )
}