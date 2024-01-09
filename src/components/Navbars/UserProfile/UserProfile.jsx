import { Nav } from "react-bootstrap";
import UserProfileStyle from "../../../assets/scss/UesrProfile.module.scss";

const UserProfile = ({ isThemeDirection }) => {
    return (
        <div
            className={UserProfileStyle.user_menu}
            data={!isThemeDirection ? "false" : "true"}
        >
            <Nav className={`p-0 flex-column ${UserProfileStyle.navbar_nav}`}>
                <Nav.Link href="#" className={UserProfileStyle.nav_link}>
                    <i className="fa fa-user"></i>
                    <span>My Profile</span>
                </Nav.Link>
                <Nav.Link href="#" className={UserProfileStyle.nav_link}>
                    <i className="fa-solid fa-bell"></i>
                    <span>Notifications</span>
                    <span className={`${UserProfileStyle.count} bg-danger`}>
                        13
                    </span>
                </Nav.Link>
                <Nav.Link href="#" className={UserProfileStyle.nav_link}>
                    <i className="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </Nav.Link>
                <Nav.Link href="#" className={UserProfileStyle.nav_link}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span>Logout</span>
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default UserProfile;

