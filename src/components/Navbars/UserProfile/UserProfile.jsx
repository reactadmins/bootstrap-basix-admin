import { Nav } from "react-bootstrap";
import styles from "@/assets/scss/UesrProfile.module.scss";

const UserProfile = () => {
    return (
        <div className={styles.user_menu}>
            <Nav className="p-0 flex-column">
                <Nav.Link href="#" className={styles.menu}>
                    <i className="fa fa-user"></i>
                    <span>My Profile</span>
                </Nav.Link>
                <Nav.Link href="#" className={styles.menu}>
                    <i className="fa-solid fa-bell"></i>
                    <span>Notifications</span>
                    <span className={`${styles.count} bg-danger`}>13</span>
                </Nav.Link>
                <Nav.Link href="#" className={styles.menu}>
                    <i className="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </Nav.Link>
                <Nav.Link href="#" className={styles.menu}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span>Logout</span>
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default UserProfile;

