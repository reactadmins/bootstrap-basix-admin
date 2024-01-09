import { useState } from "react";
import PersonalDetails from "./Page/PersonalDetails";
import AdditionalInfo from "./Page/AdditionalInfo";
import LoggedIn from "./Page/LoggedIn";
import StepWizardStyle from "../../../assets/scss/StepWizard.module.scss";

const StepTabWizard = () => {
    const [stepCounter, setStepCounter] = useState(1);

    const arrayList = [
        {
            id: 1,
            icon: "fa-solid fa-user",
            name: "Personal details",
        },
        {
            id: 2,
            icon: "fa-solid fa-user",
            name: "Is Logged In?",
        },
        {
            id: 3,
            icon: "fa-solid fa-gear",
            name: "Additional Info",
        },
        {
            id: 4,
            icon: "fa-solid fa-map",
            name: "Final step",
        },
    ];

    const updateStep = (step) => {
        if (step > 0 && step <= arrayList.length) {
            setStepCounter(step);
        }
    };
    return (
        <div
            className={`${StepWizardStyle.wizard_wrapper} position-relative mt-5 px-3`}
        >
            <div className="row">
                <div className="text-center" style={{ padding: "15px" }}>
                    <h3
                        className="m-0"
                        style={{
                            fontSize: "1.1rem",
                            color: "#252422",
                            fontWeight: "300",
                        }}
                    >
                        Awesome Wizard
                    </h3>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#9a9a9a",
                            fontWeight: "400",
                        }}
                    >
                        Split a complicated flow in multiple steps
                    </p>
                </div>
                {arrayList.map((items, index) => (
                    <div className="col-3 text-center p-0" key={items.id}>
                        <div
                            className={StepWizardStyle.step_block}
                            style={{
                                backgroundColor: `${
                                    stepCounter === index + 1
                                        ? "rgb(230, 126, 34)"
                                        : "#F3F2EE"
                                }`,
                                padding: "8px",
                                color: `${
                                    stepCounter === index + 1
                                        ? "#fff"
                                        : "rgb(204, 204, 204)"
                                }`,
                            }}
                        >
                            <div
                                className={StepWizardStyle.step_wrapper}
                                onClick={() => updateStep(index + 1)}
                            >
                                <div className="mx-auto position-relative">
                                    <i
                                        className={`${items.icon}`}
                                        style={{ fontSize: "23px" }}
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <span
                            style={{
                                color: `${
                                    stepCounter === index + 1
                                        ? "rgb(230, 126, 34)"
                                        : "rgba(0, 0, 0, 0.2)"
                                }`,
                                fontSize: "17px",
                            }}
                        >
                            {items.name}
                        </span>
                    </div>
                ))}
            </div>
            <div className={StepWizardStyle.step_content}>
                {stepCounter === 1 && <PersonalDetails />}
                {stepCounter === 2 && <LoggedIn />}
                {stepCounter === 3 && <AdditionalInfo />}
                {stepCounter === 4 && (
                    <span>Congratulations This is the Final Step</span>
                )}
            </div>
            <div
                className={`${StepWizardStyle.step_btn_wrapper} mb-4`}
                style={{ padding: "0 20px" }}
            >
                {stepCounter > 1 && stepCounter < arrayList.length && (
                    <button
                        style={{
                            minWidth: "140px",
                            fontSize: "14px",
                            fontWeight: "600",
                            padding: "8px 12px",
                            backgroundColor: "rgb(230, 126, 34)",
                            color: "#fff",
                            border: "rgb(230, 126, 34)",
                            borderRadius: "4px",
                        }}
                        onClick={() => updateStep(stepCounter - 1)}
                    >
                        Back
                    </button>
                )}
                <button
                    className="float-end"
                    style={{
                        minWidth: "140px",
                        fontSize: "14px",
                        fontWeight: "600",
                        padding: "8px 12px",
                        backgroundColor: `${
                            stepCounter < arrayList.length
                                ? "rgb(230, 126, 34)"
                                : "rgb(67, 160, 71)"
                        }`,
                        color: "#fff",
                        border: "rgb(230, 126, 34)",
                        borderRadius: "4px",
                    }}
                    onClick={() => updateStep(stepCounter + 1)}
                >
                    {stepCounter < arrayList.length ? "Next" : "Done"}
                </button>
            </div>
        </div>
    );
};

export default StepTabWizard;

