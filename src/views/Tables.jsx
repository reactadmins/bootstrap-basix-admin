import { Fragment, useState } from "react";
import { CardBody, Col, Pagination, Row } from "react-bootstrap";
import Card from "@/components/Card/Card";
import tableData from "@/data/tableData";
import styles from "@/assets/scss/Tables.module.scss";

const Tables = () => {
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState(10);

    return (
        <Fragment>
            <Row className="gy-4 gx-4">
                <Col sm={12}>
                    <Card title="Basic Table">
                        <CardBody>
                            <div
                                className={`table-responsive  ${styles.table_wrapper}`}
                            >
                                <table className={`table ${styles.table}`}>
                                    <thead
                                        className={`text-primary thead ${styles.thead}`}
                                    >
                                        <tr>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>City</td>
                                            <td className="text-center">
                                                Score
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody className={`tbody ${styles.tbody}`}>
                                        {tableData
                                            .slice(0, 10)
                                            .map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.city}</td>
                                                    <td className="text-center">
                                                        {item.score}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card title="Colors, Icons, Labels">
                        <CardBody>
                            <div
                                className={`table-responsive ${styles.table_wrapper}`}
                            >
                                <table className={`table ${styles.table}`}>
                                    <thead
                                        className={`text-primary thead ${styles.thead}`}
                                    >
                                        <tr>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>City</td>
                                            <td className="text-center">
                                                Score
                                            </td>
                                            <td>Status</td>
                                        </tr>
                                    </thead>
                                    <tbody className={`tbody ${styles.tbody}`}>
                                        {tableData
                                            ?.slice(0, 10)
                                            .map((item, index) => (
                                                <tr
                                                    key={index}
                                                    className={item.tableBg}
                                                >
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.city}</td>
                                                    <td className="text-center">
                                                        {item.score}
                                                    </td>
                                                    <td>
                                                        <i
                                                            className={`${item?.statusIcon} text-${item?.badge?.status}`}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                
            </Row>
        </Fragment>
    );
};

export default Tables;

