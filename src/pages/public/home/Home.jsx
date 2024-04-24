import Navbar from "../../../shared/navbar/public/Navbar";
import Carousel from "../../../shared/navbar/public/Carrousel";
export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Carousel /> 
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Estás en Home</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
