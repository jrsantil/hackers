import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GithubCard({ image_url, repo_title, repo_url }) {
  return (
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{repo_title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><a href={repo_url}>Github link</a></Button>
      </Card.Body>
    </Card>
  );
}


export default GithubCard;