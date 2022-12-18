import { useEffect, useState } from "react"
import Header from "../components/Header"
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { Row, Col } from "react-bootstrap";
import Blog from '../components/Card'

export default function Search(props) {
    const { search } = useLocation();
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [sort, setSort] = useState('asc')
    const [genre, setGenre] = useState('all')


    useEffect(() => {
        const params = new URLSearchParams(search);
        const queryParams = params.get('search');
        setQuery(queryParams);
        getMovies(sort, genre, queryParams)
    }, [])

    const onChangeSort = (e) => {
        setSort(e.target.value)
        getMovies(e.target.value, genre)
    }

    const onChangeGenre = (e) => {
        setGenre(e.target.value)
        getMovies(sort, e.target.value)
    }

    const getMovies = (params_sort, params_genre, query) => {
        console.log(query, 'query')
        console.log(params_genre == 'all', 'params')
        console.log(params_genre, 'params')

        var addQuery = '';

        if (query) {
            addQuery += `&title=${query}`
        } else {
            if (params_genre == 'all') {
                addQuery = ''

            } else {

                addQuery += `&genre=${params_genre || genre}`

            }
        }


        axios.get(`https://6311f91ef5cba498da8988fd.mockapi.io/api/v1/movies?sortBy=title&order=${params_sort || sort}${addQuery}`)
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
            <div className="container" style={{ color: 'black', paddingTop: '70px' }}>
                {
                    query ? (<div></div>) : (<div className="d-flex flex-row justify-between mt-5">
                        <div >
                            <label>Kategori</label>
                            <select class="form-select mt-2" aria-label="Default select example" onChange={onChangeGenre} value={genre}>
                                <option value="all">All</option>
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                                <option value="cartoon">Cartoon</option>
                                <option value="crime">Crime</option>
                                <option value="drama">Drama</option>
                                <option value="family">Family</option>
                                <option value="horror">Horror</option>
                            </select>
                        </div>
                        <div className="d-flex items-end flex-col">
                            <label>Sort</label>
                            <select onChange={onChangeSort} class="form-select mt-2" aria-label="Default select example" value={sort}>
                                <option value="asc">A-Z</option>
                                <option value="desc">Z-A</option>
                            </select>
                        </div>

                    </div>)
                }
                <div className="mt-4">
                    {
                        data && data.length == 0 ? (
                            <div className="text-center">
                                Data Tidak Ditemukan
                            </div>
                        ) : (<Row xs={5} className="mt-2">
                            {data?.map((item) => (
                                <Col xl="2">
                                    <Blog
                                        image={item.picture}
                                        title={item.title}
                                        subtitle={item.original_language}
                                        text={item.overview}
                                        genre={item.genre}
                                        detail={`/movie/${item.id}`}
                                    />
                                </Col>
                            ))}
                        </Row>)
                    }

                </div>
            </div>
        </>
    )
}