import user1 from "@/assets/image/avatar/user-1.jpg";
import user2 from "@/assets/image/avatar/user-2.jpg";
import user3 from "@/assets/image/avatar/user-3.jpg";
import user4 from "@/assets/image/avatar/user-4.jpg";
import messageStyle from "@/assets/scss/Message.module.scss";

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
        <div className={messageStyle.message_menu}>
            <p className={messageStyle.message_counter}>You have 4 Mails</p>
            {message_list?.map((data) => {
                return (
                    <a
                        href="/"
                        key={data.id}
                        className={`${messageStyle.message_body} ${
                            messageStyle[`bg_${data.id}`]
                        } d-flex gap-2`}
                    >
                        <span className={messageStyle.user_img}>
                            <img src={data.img} alt="user" />
                        </span>
                        <div className={messageStyle.message}>
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

