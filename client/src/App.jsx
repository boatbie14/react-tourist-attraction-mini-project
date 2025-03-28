import "./App.css";
import { FaLink } from "react-icons/fa6";

function App() {
  return (
    <div className="row">
      <div className="container">
        <h1>เที่ยวไหนดี</h1>
        <div className="travel-search-wrap">
          <label>ค้นหาที่เที่ยว</label>
          <input type="text" name="travel" className="travel-search" placeholder="หาที่เที่ยวแล้วไปกัน ..." />
        </div>

        <div className="flex flex-col gap-12">
          <div className="travel-list">
            <img className="highlight-img" src="https://placehold.co/480x350" />
            <div className="travel-info">
              <h2>Title เที่ยวกัน</h2>
              <p>Lorem epsumm is a book. Hello world ทะเลแดง ...</p>
              <a href="#">อ่านต่อ</a>
              <div className="tag">
                หมวด
                <ul>
                  <li>
                    <a>คาเฟ่</a>
                  </li>
                </ul>
              </div>
              <div className="img-list">
                <img src="https://placehold.co/100x100" style={{ width: "100px", height: "100px" }} />
                <img src="https://placehold.co/100x100" style={{ width: "100px", height: "100px" }} />
                <img src="https://placehold.co/100x100" style={{ width: "100px", height: "100px" }} />
              </div>
              <div className="w-full relative">
                <a href="#" className="travel-link">
                  <FaLink size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="travel-list">
            <img className="highlight-img" src="https://placehold.co/480x350" />
            <div className="travel-info">
              <h2>Title</h2>
              <p>Lorem epsumm is a book. Hello world ...</p>
              <a href="#">อ่านต่อ</a>
              <div className="tag">
                หมวด
                <ul>
                  <li>
                    <a>คาเฟ่</a>
                  </li>
                </ul>
              </div>
              <div className="img-list">
                <img src="https://placehold.co/100x100" style={{ width: "100px", height: "100px" }} />
                <img src="https://placehold.co/100x100" style={{ width: "100px", height: "100px" }} />
                <img src="https://placehold.co/100x100" style={{ width: "100px", height: "100px" }} />
              </div>
              <div className="w-full relative">
                <a href="#" className="travel-link">
                  <FaLink size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ---- */}
      </div>
    </div>
  );
}

export default App;
