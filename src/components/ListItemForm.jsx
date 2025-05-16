import React, { useState } from "react";
import { toBigInt } from "ethers"; // import toBigInt dari ethers
import marketplaceService from "../context/marketplaceService";

const ListItemForm = ({ onListed }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [loading, setLoading] = useState(false);

    const listItem = async () => {
        if (!name || !price || !stock) {
            alert("Harap isi semua field untuk listing item");
            return;
        }
        try {
            setLoading(true);
            // convert price ke bigint dengan toBigInt
            const priceWei = toBigInt(price);
            await marketplaceService.listItem(name, priceWei, Number(stock));
            alert("Item berhasil ditambahkan");
            setName("");
            setPrice("");
            setStock("");
            onListed();
        } catch (err) {
            alert("Gagal menambahkan item: " + err.message);
        } finally {
            setLoading(false);
        }
    };

     return (
    <div
      style={{
        maxWidth: "900px",       // container max width biar gak terlalu lebar
        margin: "30px auto",     // center horizontal dengan jarak atas bawah 30px
        padding: "30px",
        backgroundColor: "#3b0a45",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxSizing: "border-box",
        flexWrap: "wrap",        // supaya input tombol bisa wrap ke baris baru di layar kecil
      }}
    >
      <h3 style={{ marginRight: "20px", minWidth: "130px" }}>🛒 List New Item</h3>
      <input
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
        style={{
          flex: "2 1 250px",      // fleksibel, minimal 250px
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          outline: "none",
          minWidth: "150px",
        }}
      />
      <input
        placeholder="Price (wei)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        disabled={loading}
        style={{
          flex: "1 1 150px",      // fleksibel, minimal 150px
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          outline: "none",
          minWidth: "120px",
        }}
      />
      <input
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        disabled={loading}
        style={{
          flex: "1 1 100px",      // fleksibel, minimal 100px
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          outline: "none",
          minWidth: "100px",
        }}
      />
      <button
        onClick={listItem}
        disabled={loading}
        style={{
          flex: "1 1 130px",       // fleksibel, minimal 130px
          padding: "12px",
          backgroundColor: loading ? "#7e3a7a" : "#9c27b0",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: loading ? "not-allowed" : "pointer",
          fontWeight: "bold",
          fontSize: "16px",
          boxShadow: "0 0 10px #9c27b0",
          transition: "background-color 0.3s ease",
          minWidth: "120px",
        }}
        onMouseEnter={(e) => {
          if (!loading) e.target.style.backgroundColor = "#7b1fa2";
        }}
        onMouseLeave={(e) => {
          if (!loading) e.target.style.backgroundColor = "#9c27b0";
        }}
      >
        {loading ? "Listing..." : "List Item"}
      </button>
    </div>
  );

};

export default ListItemForm;
