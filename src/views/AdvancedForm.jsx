import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import MaskedInput from "../components/Form/MaskedInput";
import MultipleTagSelect from "../components/Form/MultipleTagSelect";

const AdvancedForm = () => {
    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col md={12} lg={6}>
                    <MaskedInput />
                </Col>
                <Col md={12} lg={6}>
                    <MultipleTagSelect />
                </Col>
            </Row>
        </Fragment>
    );
};

export default AdvancedForm;

