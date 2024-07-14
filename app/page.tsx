import AchievementsHonors from "./Achievements";
import HomePage from "./HomePage";
import Mentors from "./Mentors";
import NavBar from "./NavBar";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <HomePage />
      <Mentors />
      <Testimonials />
      <AchievementsHonors />
    </div>
  );
}
