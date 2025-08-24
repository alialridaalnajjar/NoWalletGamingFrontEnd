import Games from "../components/Games";
import NavBar from "../components/NavBar";
export default function Home() {
  return (
    <>
      <div className="bg-neutral-900 h-screen">
        <NavBar />
        <Games />
      </div>
    </>
  );
}
  