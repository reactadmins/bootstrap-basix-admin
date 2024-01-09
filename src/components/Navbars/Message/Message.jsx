import user1 from "../../../assets/img/avatar/user-1.jpg";
import user2 from "../../../assets/img/avatar/user-2.jpg";
import user3 from "../../../assets/img/avatar/user-3.jpg";
import user4 from "../../../assets/img/avatar/user-4.jpg";
import MessageStyle from "../../../assets/scss/Message.module.scss";

const Message = () => {
    const message_list = [
        {
            id: 1,
            img: user1,
            name: "Jonathan Smith",
            time: "Just now",
            title: "Hello, this is an example msg",
        },
        {
            id: 2,
            img: user2,
            name: "Jack Sanders",
            time: "5 minutes ago",
            title: "Lorem ipsum dolor sit amet, consectetur",
        },
        {
            id: 3,
            img: user3,
            name: "Cheryl Wheeler",
            time: "10 minutes ago",
            title: "Hello, this is an example msg",
        },
        {
            id: 4,
            img: user4,
            name: "Rachel Santos",
            time: "15 minutes ago",
            title: "Lorem ipsum dolor sit amet, consectetur",
        },
    ];

    return (
        <div className={MessageStyle.message_menu}>
            <p className={MessageStyle.message_counter}>You have 4 Mails</p>
            {message_list?.map((data) => {
                return (
                    <a
                        href="/"
                        key={data.id}
                        className={`${MessageStyle.message_body} ${
                            MessageStyle[`bg_${data.id}`]
                        } d-flex gap-2`}
                    >
                        <span className={MessageStyle.user_img}>
                            <img src={data.img} alt="user" />
                        </span>
                        <div className={MessageStyle.message}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="name">{data.name}</span>
                                <span className="time">{data.time}</span>
                            </div>
                            <p>{data.title}</p>
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

export default Message;

