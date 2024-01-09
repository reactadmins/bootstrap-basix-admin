import { useState } from "react";
import PersonalDetails from "./Page/PersonalDetails";
import AdditionalInfo from "./Page/AdditionalInfo";
import StepWizardStyle from "../../../assets/scss/StepWizard.module.scss";

const StepSquarWizard = () => {
    const [stepCounter, setStepCounter] = useState(1);

    const arrayList = [
        {
            id: 1,
            icon: "fa-solid fa-user",
            name: "Personal details",
        },
        {
            id: 2,
            icon: "fa-solid fa-gear",
            name: "Additional Info",
        },
        {
            id: 3,
            icon: "fa-solid fa-check",
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
                        backgroundColor: "rgb(52, 152, 219)",
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
                                                ? "3px solid rgb(52, 152, 219)"
                                                : ""
                                        }`,
                                        backgroundColor: `${
                                            stepCounter === index + 1
                                                ? "rgb(52, 152, 219)"
                                                : "#fff"
                                        }`,
                                        color: `${
                                            stepCounter === index + 1
                                                ? "#fff"
                                                : "#cccccc"
                                        }`,
                                    }}
                                >
                                    <i
                                        className={`${items.icon}`}
                                        style={{ fontSize: "24px" }}
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <span
                            style={{
                                color: `${
                                    stepCounter === index + 1
                                        ? "rgb(52, 152, 219)"
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
                            backgroundColor: "rgb(52, 152, 219)",
                            color: "#fff",
                            border: "rgb(52, 152, 219)",
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
                                ? "rgb(52, 152, 219)"
                                : "#43a047"
                        }`,
                        color: "#fff",
                        border: "rgb(52, 152, 219)",
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

export default StepSquarWizard;

