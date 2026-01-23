import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const CardItem = ({ title, img, slide }) => {
  return (
    <Card style={{ width: '18rem' }}  className={`flex border-0 custom-card ${slide === "horizontal" ? "slide-horizontal" : ""}`}>
      <div className="image-wrapper">
        <Card.Img
          variant="top"
          className={`slide-img ${slide === "horizontal" ? "horizontal" : ""}`}
          src={img}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
