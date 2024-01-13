import { useState } from "react";
import PersonalDetails from "./Page/PersonalDetails";
import AdditionalInfo from "./Page/AdditionalInfo";
import stepWizardStyle from "../../../assets/scss/StepSquarWizard.module.scss";

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
            className={`${stepWizardStyle.wizard_wrapper} position-relative mt-5 px-3`}
        >
            <div className="row">
                <div
                    className={`position-absolute ${stepWizardStyle.wizard_progress}`}
                    style={{
                        width: `${
                            stepCounter === 1
                                ? "18%"
                                : stepCounter === 2
                                ? "50%"
                                : stepCounter === 3
                                ? "85%"
                                : ""
                        }`,
                    }}
                ></div>
                {arrayList.map((items, index) => (
                    <div className="col-4 text-center p-0" key={items.id}>
                        <div className={stepWizardStyle.step_block}>
                            <div
                                className={stepWizardStyle.step_wrapper}
                                onClick={() => updateStep(index + 1)}
                            >
                                <div
                                    className={`${
                                        stepWizardStyle.wizard_icon
                                    } ${
                                        stepCounter >= index + 1
                                            ? stepWizardStyle.active
                                            : ""
                                    } mx-auto position-relative`}
                                >
                                    <i
                                        className={`${items.icon}`}
                                        style={{ fontSize: "24px" }}
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <span
                            className={`${stepWizardStyle.step_title} ${
                                stepCounter >= index + 1
                                    ? stepWizardStyle.step_title_active
                                    : ""
                            }`}
                        >
                            {items.name}
                        </span>
                    </div>
                ))}
            </div>
            <div className={stepWizardStyle.step_content}>
                {stepCounter === 1 && <PersonalDetails />}
                {stepCounter === 2 && <AdditionalInfo />}
                {stepCounter === 3 && (
                    <span className={stepWizardStyle.step_content_title}>
                        Congratulations This is the Final Step
                    </span>
                )}
            </div>
            <div
                className={`${stepWizardStyle.step_btn_wrapper} mb-4`}
                style={{ padding: "0 20px" }}
            >
                {stepCounter > 1 && stepCounter < arrayList.length && (
                    <button onClick={() => updateStep(stepCounter - 1)}>
                        Back
                    </button>
                )}
                <button
                    className="float-end"
                    style={{
                        backgroundColor: `${
                            stepCounter < arrayList.length
                                ? "rgb(52, 152, 219)"
                                : "#43a047"
                        }`,
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

