import Navbar from "../../../shared/navbar/public/Navbar";

export default function Home() {
  return (
    <div className="container-fluid ">
        <Navbar />
        <div className="flex-grow-1">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col container-fluid">
                        <h1 className="text-center">Estás en Home</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
