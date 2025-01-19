import { Spacer } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react"
import { FaRegStar } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import Footer from "./Footer";
import ShimmerLoading from "./ShimmerLoading";

function Kids() {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("lowToHigh");
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios({
        url: "https://myntra-backend-ra9i.onrender.com/api/kids/products",
        method: "GET",
      });
      setData(response.data.products || []);
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.status, error.response.data);
      }
    }
    setLoading(false)
  };

  const handleWishlistClick = (product) => {
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    existingWishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(existingWishlist));
    navigate("/wishlist");
  };

  const sortData = (data) => {
    if (sortOption === "lowToHigh") {
      return [...data].sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      return [...data].sort((a, b) => b.price - a.price);
    }
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortedData = sortData(data);

  if(loading){
    return <ShimmerLoading/>
  }
  return (
    <>
      <div style={{ width:"90%", display: "flex", backgroundColor: "", margin: "10px auto", padding: "10px", paddingLeft: "5px",boxShadow:"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;" }}>
      <Spacer/>
      <label style={{margin:"2px"}}><b>Sort by Price :</b> </label>
        <select style={{border:"1px solid black"}}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      <div id="mens-products">

        {Array.isArray(sortedData) &&
          sortedData.map((product, index) => (
            <div className="mens-items" key={index}>
              <img src={product.img} alt={product.title} />
              <p><b>{product.title}</b></p>
              <h2>
                <b>Rs </b>{product.price}{" "}
                <span style={{ color: "gold" }}>
                  ({product.discount} OFF)
                </span>
              </h2>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "gold",
                }}
              >
                <FaRegStar />
                {product.review}
              </span>
              <button onClick={() => handleWishlistClick(product)}>WISHLIST</button>
            </div>
          ))}
      </div>
      <Spacer />
      <Footer />
    </>
  );
}

export default Kids;
