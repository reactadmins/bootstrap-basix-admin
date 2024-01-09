import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CardContent from "../components/Card/CardContent";
import StepCircleWizard from "../components/Form/StepWizards/StepCircleWizard";
import StepSquarWizard from "../components/Form/StepWizards/StepSquarWizard";
import StepTabWizard from "../components/Form/StepWizards/StepTabWizard";

const WizardForm = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col md={12}>
                    <CardContent
                        title="Basic Wizard - Circle"
                        CardBody={<StepCircleWizard />}
                    />
                </Col>
                <Col md={12}>
                    <CardContent
                        title="Square Wizard"
                        CardBody={<StepSquarWizard />}
                    />
                </Col>
                <Col md={12}>
                    <CardContent
                        title="Tab Wizard: Custom button and title text"
                        CardBody={<StepTabWizard />}
                    />
                </Col>
            </Row>
        </Fragment>
    );
};

export default WizardForm;

