import { useState } from "react";
import PersonalDetails from "./Page/PersonalDetails";
import AdditionalInfo from "./Page/AdditionalInfo";
import StepWizardStyle from "../../../assets/scss/StepWizard.module.scss";

const StepCircleWizard = () => {
    const [stepCounter, setStepCounter] = useState(1);

    const arrayList = [
        {
            id: 1,
            name: "Personal details",
        },
        {
            id: 2,
            name: "Additional Info",
        },
        {
            id: 3,
            name: "Last step",
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
                <div
                    className="position-absolute"
                    style={{
                        width: `${
                            stepCounter === 1
                                ? "19%"
                                : stepCounter === 2
                                ? "50%"
                                : stepCounter === 3
                                ? "85%"
                                : ""
                        }`,
                        height: "4px",
                        top: "35px",
                        backgroundColor: "rgb(231, 76, 60)",
                    }}
                ></div>
                {arrayList.map((items, index) => (
                    <div className="col-4 text-center p-0" key={items.id}>
                        <div className={StepWizardStyle.step_block}>
                            <div
                                className={StepWizardStyle.step_wrapper}
                                onClick={() => updateStep(index + 1)}
                            >
                                <div
                                    className={`${StepWizardStyle.wizard_icon} mx-auto position-relative`}
                                    style={{
                                        border: `${
                                            stepCounter >= index + 1
                                                ? "3px solid rgb(231, 76, 60)"
                                                : ""
                                        }`,
                                        backgroundColor: `${
                                            stepCounter === index + 1
                                                ? "rgb(231, 76, 60)"
                                                : "#fff"
                                        }`,
                                        color: `${
                                            stepCounter === index + 1
                                                ? "#fff"
                                                : "#cccccc"
                                        }`,
                                        borderRadius: "50%",
                                    }}
                                >
                                    <span>{items.id}</span>
                                </div>
                            </div>
                        </div>
                        <span
                            style={{
                                color: `${
                                    stepCounter === index + 1
                                        ? "rgb(231, 76, 60)"
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
                {stepCounter === 2 && <AdditionalInfo />}
                {stepCounter === 3 && (
                    <span className="py-2 mb-3">
                        Congratulations This is the Final Step
                    </span>
                )}
            </div>
            <div
                className={`${StepWizardStyle.step_btn_wrapper} mb-4`}
                style={{ padding: "0 20px" }}
            >
                {stepCounter > 1 && (
                    <button
                        style={{
                            minWidth: "140px",
                            fontSize: "14px",
                            fontWeight: "600",
                            padding: "8px 12px",
                            backgroundColor: "rgb(231, 76, 60)",
                            color: "#fff",
                            border: "rgb(231, 76, 60)",
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
                        backgroundColor: "rgb(231, 76, 60)",
                        color: "#fff",
                        border: "rgb(231, 76, 60)",
                        borderRadius: "4px",
                    }}
                    onClick={() => updateStep(stepCounter + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default StepCircleWizard;

