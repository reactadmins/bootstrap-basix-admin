import styles from "@/assets/scss/ProfileCard.module.scss";

const ProfileCard = ({ userName = "", image = "", children }) => {
    return (
        <div
            className={`${styles.profile_card} d-flex flex-column align-items-center justify-content-center`}
        >
            <img
                src={image}
                alt="Card image"
                className="rounded-circle inline-blocks"
            />
            <h2 className={`${styles.title} mt-2`}>{userName}</h2>
            {children}
        </div>
    );
};

export default ProfileCard;

