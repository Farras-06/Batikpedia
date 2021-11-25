import ProfileCard from "../component/ProfileCard";
import "./Profile.css";

export default function Profile() {

  const data = [
    {
      name: "Batikpedia App",
      pict: "https://blog.mizanstore.com/wp-content/uploads/2017/10/membatik_by_nakysa06-724x1024.jpg",
      locations: "Boyolali",
      instagram: "ilham_frs",
      github: "Farras-06"
    },
    
  ];

  return (
    <div className="container">
      <h1>About App</h1>
      {data.map(profile => <ProfileCard profile={profile} />)}
    </div>
  );
}