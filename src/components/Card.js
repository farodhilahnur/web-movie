import { useNavigate } from "react-router-dom";
export default function Blog(props) {
  const navigate = useNavigate()
  const onDetailMovie = () => {
    console.log(props.detail, 'detail')
    navigate(props.detail)
  }
  return (
    <div style={{ margin: '5px', marginBottom: '20px' }}>
      <img className="card-image" src={props.image} alt='asdsad' onClick={onDetailMovie}></img>
      <div class=" mt-3 " style={{ paddingLeft: '12px' }}>
        <h6 className="title-card" onClick={onDetailMovie}>{props.title}</h6>
        <span className="text-sm">{props.genre}</span>
        {/* <p class="card-text">{props.text}</p> */}
        {/* <a href={props.detail} class="btn btn-primary">Lihat</a> */}
      </div>
    </div>
  );
};