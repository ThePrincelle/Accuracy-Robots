import React, { Component } from 'react';
import { Card, Button, Row, Col} from 'react-bootstrap';

export default class About extends Component {
    render () {
        return (
            <div style={{padding:200}}>
            <Row>
                <Col>
                    <Card style={{width: 200}}>
                    <Card.Img variant="top" src="/images/jean_phe.jpg" />
                    <Card.Body>
                        <Card.Title>Jean Phé</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    </Card>;
                </Col>

                <Col>
                    <Card style={{width: 200}}>
                    <Card.Img variant="top" src="/images/eyermann.png" />
                    <Card.Body>
                        <Card.Title>Thomas Eyermann</Card.Title>
                        <Card.Text>
                            Ne rien faire, mais le faire bien
                        </Card.Text>
                    </Card.Body>
                    </Card>;
                </Col>
                <Col>
                    <Card style={{width: 200}}>
                    <Card.Img variant="top" src="/images/quentin.png" style={{height:200, width : 200}}/>
                    <Card.Body>
                        <Card.Title>Quentin Schaeffer</Card.Title>
                        <Card.Text>
                            Il n'y a pas de projets urgents, que des projets en retard
                        </Card.Text>
                        <Button variant="primary" href="https://quentinschaeffer.fr">En Savoir plus</Button>
                    </Card.Body>
                    </Card>;
                </Col>
                <Col>
                    <Card style={{width: 200}}>
                    <Card.Img variant="top" src="/images/maxime.jpg" />
                    <Card.Body>
                        <Card.Title>Maxime Princelle</Card.Title>
                        <Card.Text>
                        Les meilleures choses qui arrivent dans le monde de l’entreprise ne sont pas le résultat du travail d’un seul homme. C’est le travail de toute une équipe.
                        </Card.Text>
                        <Button variant="primary" href="https://princelle.org/">En Savoir plus</Button>
                    </Card.Body>
                    </Card>;
                </Col>
                
                
            </Row>
            </div>
        )
    }

}