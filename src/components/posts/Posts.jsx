import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  
  const posts = [
    {
      id: 1,
      name: "Rishika",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Enjoying a cozy evening with a good book and a cup of tea. ☕️📖 What's your favorite way to unwind after a long day? #relaxation #metime",
      img: "https://www.dreams.co.uk/sleep-matters-club/wp-content/uploads/relaxing-with-cup-of-tea-and-book.jpg",
    },
    {
      id: 2,
      name: "Maanav",
      userId: 2,
      profilePic:
        "https://imageio.forbes.com/specials-images/imageserve/63cff7b92fa6625c1b922d86/Sidney-Keys-III/960x0.jpg?format=jpg&width=960",
      desc: "Just explored a beautiful hiking trail with stunning views! 🏞️ Feeling grateful for nature's wonders. #hikingadventures #naturelover",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
