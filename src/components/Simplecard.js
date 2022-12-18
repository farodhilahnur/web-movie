import {
  Card,
  Button,
} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function SimpleCard(props) {
  return (
    <Link to={`/detail`} className="normal-text">
  <Card style={{marginBottom:'30px', marginTop:'50px'}}>
      <Card.Img alt="Card image cap" src={props.image} class='img-kategori' />
      <Card.Body>
        <Card.Text tag="h5" className="mb-2 text-muted">{props.title}</Card.Text>
      </Card.Body>
    </Card>
</Link>
    
  );
};