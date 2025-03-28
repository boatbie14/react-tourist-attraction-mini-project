import { useEffect, useState } from "react";
import "./App.css";
import { FaLink } from "react-icons/fa6";
import axios from "axios";

function App() {
  const [keyword, setKeyword] = useState([]);
  const [isFirstSearch, setIsFirstSearch] = useState("กรุณาพิมพ์เพื่อค้นหาข้อมูล");
  const [travelData, setTravelData] = useState([]);

  useEffect(() => {
    let timeout; // ประกาศตัวแปรที่นี่เพื่อให้ใช้ได้ในทั้ง scope

    if (keyword.length > 0 && keyword[0].length > 2) {
      timeout = setTimeout(() => {
        displaySearchResult();
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [keyword]);

  const handleSearch = async (e) => {
    setKeyword([e.target.value]);
  };

  const handleTag = (e) => {
    const newKeyword = [...keyword, e.target.innerHTML];
    setKeyword(newKeyword);
  };

  const displaySearchResult = async () => {
    try {
      const keywordString = keyword.join(" ");
      const response = await axios.get(`http://localhost:4001/trips?keywords=${keywordString}`);
      setTravelData(response.data.data);
      setIsFirstSearch(`ไม่พบข้อมูลจากคำค้นหา "${keywordString}"`);
    } catch (error) {
      console.log("Fetch error...", error);
    }
  };

  function getExcerpt(description) {
    if (description.length <= 84) {
      return description;
    }
    return description.substring(0, 88) + "...";
  }

  const addToClipBoard = (url, title) => {
    navigator.clipboard.writeText(url);
    alert(`คัดลอกลิงก์แล้ว!\n"${title}"\n${url}`);
  };

  return (
    <div className="row">
      <div className="container">
        <h1>เที่ยวไหนดี</h1>
        <div className="travel-search-wrap">
          <label>ค้นหาที่เที่ยว</label>
          <input
            type="text"
            name="travel"
            className="travel-search"
            value={keyword.join(" ")}
            onChange={handleSearch}
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
          />
        </div>
        {travelData.length === 0 ? (
          <div className="no-results">
            <img src="/compass.png" alt="not found" />
            <p>{isFirstSearch}</p>
          </div>
        ) : (
          <div className="travel-list-wrap">
            {travelData.map((data) => {
              return (
                <div key={data.eid} className="travel-list">
                  <div className="">
                    <img className="highlight-img" src={data.photos[0]} />
                  </div>
                  <div className="travel-info">
                    <h2>{data.title}</h2>
                    <p>{getExcerpt(data.description)}</p>
                    <a href={data.url} target="_blank">
                      อ่านต่อ
                    </a>
                    <div className="tag">
                      หมวด
                      <ul>
                        {data.tags.map((tagData) => {
                          return (
                            <li key={tagData} onClick={handleTag}>
                              {tagData}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="img-list">
                      {data.photos.slice(1).map((imageData) => {
                        return (
                          <div key={imageData} className="item">
                            <img key={imageData} src={imageData} />
                          </div>
                        );
                      })}
                    </div>

                    <div className="w-full relative">
                      <button className="travel-link" target="_blank" onClick={() => addToClipBoard(data.url, data.title)}>
                        <FaLink size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {/* -- End Travel List-- */}
      </div>
    </div>
  );
}

export default App;
