export default function Blog (props) {

  return (
    <div class="card" style={{margin:'5px'}}>
      <img src={props.image} alt='asdsad'></img>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <a href={props.detail} class="btn btn-primary">Lihat</a>
      </div>
    </div>
  );
};