import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { Spacer } from "@chakra-ui/react";
import Footer from "./Footer";
import ShimmerLoading from "./ShimmerLoading";


function Mens() {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState("lowToHigh");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        "https://myntra-backend-ra9i.onrender.com/api/mens/products"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
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


  if (loading) {
    return <ShimmerLoading />;
  }

  return (
    <>


      <div
        style={{
          width: "90%",
          display: "flex",
          backgroundColor: "",
          margin: "10px auto",
          padding: "10px",
          paddingLeft: "5px",
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;",
        }}
      >

        <Spacer />

        <label style={{margin:"2px"}}>
          <b>Sort by Price :</b>{" "}
        </label>
        <select style={{border:"1px solid black",}}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option style={{padding:"2px"}} value="lowToHigh"> Price : Low to High</option>
          <option value="highToLow"> Price : High to Low</option>
        </select>
      </div>
      <div id="mens-products">
        {sortedData.map((product, ind) => (
          <div className="mens-items" key={ind}>
            <img src={product.img} alt={product.title} />
            <p>
              <b>{product.title}</b>
            </p>
            <h2>
              <b>Rs </b>
              {product.price}{" "}
              <span style={{ color: "gold" }}>({product.discount} OFF)</span>
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
            <br />
            <button onClick={() => handleWishlistClick(product)}>WISHLIST</button>
          </div>
        ))}
      </div>
      <Spacer />
      <Footer />
    </>
  );
}

export default Mens;
