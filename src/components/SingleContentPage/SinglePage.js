import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SinglePage.css";
import Modal from 'react-bootstrap/Modal';

// import $ from "jquery";
import Header from "../Header";
import { Button } from "react-bootstrap";

const SinglePage = () => {
  const [content, setContent] = useState();
  const history = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(` 
      https://639eec4f5eb8889197efde56.mockapi.io/list/${id}`);
      // eslint-disable-next-line
      setContent(data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        history.replace("/error");
      }
    }
  };


  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [id, setContent]);
  return (
    <>
      <Header></Header>
        <>
          <div className="bg">
            {content && (
              <div className="open__modal">
                <img
                  className="poster__img"
                  src={content.picture} alt="a"/>

                <div className="open__detailsPage">
                  <h3>{content.title }</h3>
                  <h5 style={{ display: "flex", fontSize: "12px"}} className="genreList" >Genre : {content.genre }</h5>
              
                  <div className="overview">
                    <p>{content.overview}</p>
                  </div>
                  <div>
                  <Button onClick={handleShow}>Lihat Trailer</Button>
                  <Modal show={show} onHide={handleClose}>
                  <div className="modal-video">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${content.key}`} title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                    
                  </Modal>
                  </div>
                  
                </div>
              </div>
            )}   
          </div>
        </>
      
    </>
  );
};

export default SinglePage;
