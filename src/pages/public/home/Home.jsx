import Navbar from "../../../shared/navbar/public/Navbar";
import Carousel from "./components/Carousel";
// import Carousel from "../../../shared/navbar/public/Carrousel";
export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Carousel />
    </div>
  );
}
