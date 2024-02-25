import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  
  const comments = [
    {
      id: 1,
      desc: "That sounds heavenly! I wish I could join you. 📚☕️",
      name: "Maria",
      userId: 1,
      profilePicture:
        "https://miro.medium.com/v2/resize:fit:495/0*xFuo_UNWchLZ8bqS.jpeg",
    },
    {
      id: 2,
      desc: "Your cozy evening sounds like a dream! I could use some relaxation like that.",
      name: "Maandhini",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
