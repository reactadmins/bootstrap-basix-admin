import Card from "../components/Card/Card";
import { CardBody, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Modals = () => {
    const [showSmall, setShowSmall] = useState(false);
    const [showMedium, setShowMedium] = useState(false);
    const [showLarge, setShowLarge] = useState(false);
    const [showAnimated, setShowAnimated] = useState(false);

    const handleCloseSmall = () => setShowSmall(false);
    const handleShowSmall = () => setShowSmall(true);

    const handleCloseMedium = () => setShowMedium(false);
    const handleShowMedium = () => setShowMedium(true);

    const handleCloseLarge = () => setShowLarge(false);
    const handleShowLarge = () => setShowLarge(true);

    const handleCloseAnimated = () => setShowAnimated(false);
    const handleShowAnimated = () => setShowAnimated(true);

    return (
        <Container fluid className="p-0">
            <Row>
                <Col sm={12}>
                    <Card title="Modals">
                        <CardBody>
                            <div className="d-flex gap-2">
                                <Button variant="secondary" onClick={handleShowSmall}>
                                    Small
                                </Button>
                                <Modal
                                    show={showSmall}
                                    onHide={handleCloseSmall}
                                    backdrop="static"
                                    keyboard={false}
                                    size="sm">
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        I will not close if you click outside me. Do not even try to
                                        press escape key.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseSmall}>
                                            Close
                                        </Button>
                                        <Button variant="primary">Understood</Button>
                                    </Modal.Footer>
                                </Modal>

                                {/* Medium */}
                                <Button variant="secondary" onClick={handleShowMedium}>
                                    Medium
                                </Button>

                                <Modal
                                    show={showMedium}
                                    onHide={handleCloseMedium}
                                    backdrop="static"
                                    keyboard={false}
                                    size="md">
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        I will not close if you click outside me. Do not even try to
                                        press escape key.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseMedium}>
                                            Close
                                        </Button>
                                        <Button variant="primary">Understood</Button>
                                    </Modal.Footer>
                                </Modal>

                                {/* Large */}
                                <Button variant="secondary" onClick={handleShowLarge}>
                                    Large
                                </Button>

                                <Modal
                                    show={showLarge}
                                    onHide={handleCloseLarge}
                                    backdrop="static"
                                    keyboard={false}
                                    size="lg">
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        I will not close if you click outside me. Do not even try to
                                        press escape key.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseLarge}>
                                            Close
                                        </Button>
                                        <Button variant="primary">Understood</Button>
                                    </Modal.Footer>
                                </Modal>

                                {/* With out Animated */}
                                <Button variant="secondary" onClick={handleShowAnimated}>
                                    Without Animated
                                </Button>

                                <Modal
                                    show={showAnimated}
                                    onHide={handleCloseAnimated}
                                    backdrop="static"
                                    keyboard={false}
                                    animation={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        I will not close if you click outside me. Do not even try to
                                        press escape key.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseAnimated}>
                                            Close
                                        </Button>
                                        <Button variant="primary">Understood</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Modals;

