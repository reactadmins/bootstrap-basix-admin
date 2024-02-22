import { useState } from "react";
import PersonalDetails from "./Page/PersonalDetails";
import AdditionalInfo from "./Page/AdditionalInfo";
import LoggedIn from "./Page/LoggedIn";
import styles from "./StepTabWizard.module.scss";

const StepTabWizard = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
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
        if (step > 0 && step <= tabs.length) {
            setActiveTab(step);
        }
    };
    return (
        <div className={`${styles.wizard_wrapper} position-relative mt-5 px-3`}>
            <div className="row">
                <div className={styles.wizard_header}>
                    <h3 className="m-0 text-center">Awesome Wizard</h3>
                    <p className="text-center">Split a complicated flow in multiple steps</p>
                </div>
                {tabs.map((items, index) => (
                    <div className="col-3 text-center p-0" key={items.id}>
                        <div
                            className={`${styles.step_block} ${
                                activeTab === index + 1 ? styles.active : ""
                            }`}>
                            <div onClick={() => updateStep(index + 1)}>
                                <div className="mx-auto position-relative">
                                    <i className={`${items.icon}`}></i>
                                </div>
                            </div>
                        </div>
                        <span
                            className={`${styles.step_title} ${
                                activeTab >= index + 1 ? styles.step_title_active : ""
                            }`}>
                            {items.name}
                        </span>
                    </div>
                ))}
            </div>
            <div className={styles.step_content}>
                {activeTab === 1 && <PersonalDetails />}
                {activeTab === 2 && <LoggedIn />}
                {activeTab === 3 && <AdditionalInfo />}
                {activeTab === 4 && (
                    <span className={styles.step_content_title}>
                        Congratulations This is the Final Step
                    </span>
                )}
            </div>
            <div className={`${styles.step_btn_wrapper} mb-4`}>
                {activeTab > 1 && activeTab < tabs.length && (
                    <button onClick={() => updateStep(activeTab - 1)}>Back</button>
                )}
                <button
                    className="float-end"
                    style={{
                        backgroundColor: `${
                            activeTab < tabs.length ? "rgb(230, 126, 34)" : "rgb(67, 160, 71)"
                        }`,
                    }}
                    onClick={() => updateStep(activeTab + 1)}>
                    {activeTab < tabs.length ? "Next" : "Done"}
                </button>
            </div>
        </div>
    );
};

export default StepTabWizard;

