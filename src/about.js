import React, { Component } from 'react';
import { Card, Button, Row, Col} from 'react-bootstrap';
import "./css/about.css"

export default class About extends Component {
    render () {
        return (
            <>
            <Button size="sm" variant="danger" href="/">Retour à l'accueil</Button>
            <h1 style={{ textAlign: "center", color: "white" }}>Crédits</h1>
            <div style={{padding:70, paddingTop: 30}}>
            <Row>
                <Col>
                    <Card className="cardMember" style={{width: 250}}>
                    <Card.Img variant="top" src="/images/jean_phe.jpg" />
                    <Card.Body>
                        <Card.Title>Jean Phé</Card.Title>
                        <Card.Text>
                        Visez l'excellence.
                        </Card.Text>
                        <Button variant="secondary" block size="sm" target="_blank" href="https://www.linkedin.com/in/jean-thavorak-phe-a648b1174">En Savoir plus</Button>
                    </Card.Body>
                    </Card>;
                </Col>

                <Col>
                    <Card className="cardMember" style={{width: 250}}>
                    <Card.Img variant="top" src="/images/eyermann.png" />
                    <Card.Body>
                        <Card.Title>Thomas Eyermann</Card.Title>
                        <Card.Text>
                            Ne rien faire, mais le faire bien.
                        </Card.Text>
                    </Card.Body>
                    </Card>;
                </Col>
                <Col>
                    <Card className="cardMember" style={{width: 250}}>
                    <Card.Img variant="top" src="/images/quentin.png" style={{height:250, width : 250}}/>
                    <Card.Body>
                        <Card.Title>Quentin Schaeffer</Card.Title>
                        <Card.Text>
                            Il n'y a pas de projets urgents, que des projets en retard.
                        </Card.Text>
                        <Button variant="secondary" block size="sm" target="_blank" href="https://quentinschaeffer.fr">En Savoir plus</Button>
                    </Card.Body>
                    </Card>;
                </Col>
                <Col>
                    <Card className="cardMember" style={{width: 250}}>
                    <Card.Img variant="top" src="/images/maxime.jpg" />
                    <Card.Body>
                        <Card.Title>Maxime Princelle</Card.Title>
                        <Card.Text>
                        Les meilleures choses qui arrivent dans le monde de l’entreprise ne sont pas le résultat du travail d’un seul homme. C’est le travail de toute une équipe.
                        </Card.Text>
                        <Button variant="secondary" block size="sm" target="_blank" href="https://princelle.org/">En Savoir plus</Button>
                    </Card.Body>
                    </Card>;
                </Col>
            </Row>
            </div>
            </>
        )
    }

}
