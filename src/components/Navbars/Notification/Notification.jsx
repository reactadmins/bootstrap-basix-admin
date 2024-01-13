import notificationStyle from "../../../assets/scss/Notification.module.scss";

const Notification = () => {
    const notification_list = [
        {
            id: 1,
            icon: "fa fa-pencil",
            title: "You have 3 Notification",
        },
        {
            id: 2,
            icon: "fa fa-check",
            title: "Server #1 overloaded.",
        },
        {
            id: 3,
            icon: "fa fa-info",
            title: "Server #2 overloaded.",
        },
        {
            id: 4,
            icon: "fa fa-warning",
            title: "Server #3 overloaded.",
        },
    ];
    return (
        <div className={notificationStyle.notification_menu}>
            {notification_list?.map((data) => (
                <a
                    href="/"
                    key={data.id}
                    className={`${notificationStyle.notification} ${
                        notificationStyle[`bg_${data.id}`]
                    } d-flex align-items-center text-decoration-none`}
                >
                    <i className={data.icon}></i>
                    <p>{data.title}</p>
                </a>
            ))}
        </div>
    );
};

export default Notification;

