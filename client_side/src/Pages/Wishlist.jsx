import { Button, Spacer, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(savedWishlist);
  }, []);

  const handleBuy = (item) => {
    toast({
      title: "Product Purchased!",
      description: `Congratulations! You bought ${item.title}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleRemove = (index) => {
    const updatedWishlist = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    toast({
      title: "Product Removed!",
      description: "The product has been removed from your wishlist.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div id="wishlist">
      <h1 style={{ padding: "8px", margin: "5px", fontWeight: "bolder" }}>
        My Wishlist Items ({wishlistItems.length})
      </h1>
      {wishlistItems.length === 0 ? (
        <p style={{ padding: "6px", margin: "5px", fontWeight: "bolder" }}><b>No items in your wishlist !</b></p>
      ) : (
        <div id="wishlist-products">
          {wishlistItems.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={item.img} alt={item.title} />
              <p>
                <b>{item.title}</b>
              </p>
              <h2>
                <b>Rs </b>
                {item.price}{" "}
                <span style={{ color: "gold" }}>({item.discount} OFF)</span>
              </h2>
              <Button
                colorScheme="red"
                variant="outline"
                w="90%"
                m="3"
                onClick={() => handleRemove(index)}
              >
                Remove
              </Button>
              <Spacer />
              <Button
                colorScheme="pink"
                w="90%"
                onClick={() => handleBuy(item)}
              >
                Buy
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
