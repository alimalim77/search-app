// WishlistItemDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";

interface WishlistItemDetailProps {}

const WishlistItemDetail: React.FC<WishlistItemDetailProps> = () => {
  const name = useParams();
  console.log(name);
  return (
    <div>
      <h2>Wishlist Item Detail</h2>
      <p>You selected: {name.itemName}</p>
    </div>
  );
};

export default WishlistItemDetail;
