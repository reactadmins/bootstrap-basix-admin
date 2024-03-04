import { Fragment } from "react";
import Card from "@/components/Card/Card";
import typographyStyle from "@/assets/scss/Typography.module.scss";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import { CardBody } from "react-bootstrap";

const Typography = () => {
    const { isDark } = useDashboardDataContext();
    return (
        <Fragment>
            <Card title="Typography">
                <CardBody>
                    <div className={typographyStyle.typography}>
                        <div className={typographyStyle.typo_headers}>
                            <h1 className="fw-bolder">
                                Very Important Information H1
                            </h1>
                            <h2 className="fw-bolder">
                                Sections & Modal Names H2
                            </h2>
                            <h3 className="fw-bolder">
                                Articles & Block Headings H3
                            </h3>
                            <h4 className="fw-bolder">
                                Random Tiny Heading H4
                            </h4>
                            <h5 className="fw-bolder">
                                Random Tiny Heading H5
                            </h5>
                            <h6 className="fw-bolder">
                                Random Tiny Heading H6
                            </h6>
                        </div>
                        <div
                            className={`${typographyStyle.typo_articles} mt-5`}
                        >
                            <p className="lh-2 text-start">
                                The unique stripes of zebras make them one of
                                the animals most familiar to people. They occur
                                in a variety of habitats, such as grasslands,
                                savannas,
                                <mark className="bg-primary text-light mx-1">
                                    woodlands
                                </mark>
                                , thorny scrublands, mountains , and coastal
                                hills. However, various anthropogenic factors
                                have had a severe impact on zebra populations,
                                in particular hunting for skins and habitat
                                destruction. {"Grévy'"}s zebra and the mountain
                                <mark className="mx-1">highlighted text</mark>
                                zebra are endangered.
                            </p>
                            <br/>
                            <blockquote className="text-end">
                                <p>
                                    Blockquotes. However, various anthropogenic
                                    factors have had a severe impact on zebra
                                    populations, in particular hunting for
                                    skins.
                                </p>
                                <footer className="blockquote-footer mt-4">
                                    Jefferey Lebowski
                                </footer>
                            </blockquote>
                            <br/>
                            <p>
                                lthough zebra species may have overlapping
                                ranges, they do not interbreed. In captivity,
                                plains zebras have been crossed with mountain
                                zebras. The hybrid foals
                                <span className="bg-primary text-light">
                                    selected text
                                </span>
                                lacked a dewlap and resembled their
                            </p>
                        </div>
                        <div className={`row ${typographyStyle.lists}`}>
                            <h2 className="fw-bold mt-4">Lists</h2>
                            <div
                                className={`col-md-6 col-lg-6 col-xl-6 ${typographyStyle.unordered_list}`}
                            >
                                <h3 className="fw-bold mt-2">Unordered</h3>
                                <ul className="list-group">
                                    <li className="list-square">
                                        A wide variety of hypotheses have been
                                        proposed to account for the evolution of
                                        the striking stripes of zebras.
                                    </li>
                                    <li className="list-square">
                                        The more traditional of these (1 and 2,
                                        below) relate to camouflage.
                                    </li>
                                    <li className="list-square">
                                        The vertical striping may help the zebra
                                        hide in the grass by disrupting its
                                        outline.
                                    </li>
                                    <li className="list-square">
                                        In addition, even at moderate distances,
                                        the striking striping merges to an
                                        apparent grey.
                                        <ul
                                            className={`list-inner ${typographyStyle.list_inner}`}
                                        >
                                            <li className="list-circle">
                                                However, the camouflage has been
                                                contested with arguments that
                                                most of a {"zebra'"}s predator.
                                            </li>
                                            <li className="list-circle">
                                                Such as lions and hyenas cannot
                                                see well at a distance.
                                            </li>
                                            <li className="list-circle">
                                                More likely to have smelled or
                                                heard a zebra.
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        className={`list-square ${typographyStyle.list_square}`}
                                    >
                                        Before seeing it from a distance,
                                        especially at night.
                                    </li>
                                </ul>
                            </div>
                            <div
                                className={`col-md-6 col-lg-6 col-xl-6 ${typographyStyle.ordered_Lists}`}
                            >
                                <h3 className="fw-bold mt-2">Ordered</h3>
                                <ol>
                                    <li>
                                        A wide variety of hypotheses have been
                                        proposed to account for the evolution of
                                        the striking stripes of zebras.
                                    </li>
                                    <li>
                                        The more traditional of these (1 and 2,
                                        below) relate to camouflage.
                                    </li>
                                    <li>
                                        The vertical striping may help the zebra
                                        hide in the grass by disrupting its
                                        outline.
                                    </li>
                                    <li>
                                        In addition, even at moderate distances,
                                        the striking striping merges to an
                                        apparent grey.
                                        <ul className="list-inner">
                                            <li className="list-circle">
                                                However, the camouflage has been
                                                contested with arguments that
                                                most of a {"zebra'"}s predator.
                                            </li>
                                            <li className="list-circle">
                                                Such as lions and hyenas cannot
                                                see well at a distance.
                                            </li>
                                            <li className="list-circle">
                                                More likely to have smelled or
                                                heard a zebra.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Before seeing it from a distance,
                                        especially at night.
                                    </li>
                                </ol>
                            </div>
                            <div className={`row ${typographyStyle.misc}`}>
                                <h2 className="fw-bold mt-4">Misc</h2>
                                <div className="col-md-6 col-lg-6 col-xl-6">
                                    <h3 className="fw-bold mt-2">Address</h3>
                                    <address>
                                        <strong className="d-block">
                                            SJØNNA
                                        </strong>
                                        <span className="d-block">
                                            Nezalezhnasti Ave, 13 - 28A
                                        </span>
                                        <span className="d-block">
                                            Minsk, Belarus, 220141
                                        </span>
                                        <span className="d-block">
                                            +375 29 319-53-98
                                        </span>
                                        <b className="d-block mt-3">
                                            Vasili Savitski
                                        </b>
                                        <a
                                            href="#"
                                            className="text-decoration-none"
                                        >
                                            hello@examplemail.com
                                        </a>
                                    </address>
                                </div>
                                <div
                                    className={`col-md-6 col-lg-6 col-xl-6 ${typographyStyle.well}`}
                                >
                                    <h2 className="fw-bold mt-2">Well</h2>
                                    <div
                                        style={{
                                            backgroundColor: `${
                                                isDark
                                                    ? "var(--bg-content)"
                                                    : "#e9ecef"
                                            }`,
                                            border: `${
                                                isDark
                                                    ? "1px solid var(--border-color)"
                                                    : "0"
                                            }`,
                                        }}
                                        className="px-3 py-5 rounded"
                                    >
                                        <span>
                                            Zebras have excellent eyesight. It
                                            is believed that they can see in
                                            color. Like most ungulates, the
                                            {" zebra'"}s eyes are on the sides
                                            of its head, giving it a wide field
                                            of view.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Fragment>
    );
};

export default Typography;

