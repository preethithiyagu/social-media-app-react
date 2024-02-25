import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  const stories = [
    {
      id: 1,
      name: "Gayathri",
      img: "https://wallpapers.com/images/featured/aesthetic-pictures-hv6f88paqtseqh92.jpg",
    },
    {
      id: 2,
      name: "Maanav",
      img: "https://harunmudak.com/wp-content/uploads/2020/12/iphone-aesthestetic-wallpaper-1.jpeg",
    },
    {
      id: 3,
      name: "Maandhini",
      img: "https://www.dictionary.com/e/wp-content/uploads/2019/07/Aesthetic_800x800-300x300.jpg",
    },
    {
      id: 4,
      name: "Vani",
      img: "https://styl-inc.com/wp-content/uploads/2021/08/Aesthetic-Photo-Ideas.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories