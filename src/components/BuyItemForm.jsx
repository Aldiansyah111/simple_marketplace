import React, { useState } from "react";
import { toBigInt } from "ethers";
import marketplaceService from "../context/marketplaceService";

const BuyItemForm = ({ items, onBought }) => {
    const [selectedItemId, setSelectedItemId] = useState("");
    const [buyQuantity, setBuyQuantity] = useState("");
    const [loading, setLoading] = useState(false);

    const buyItem = async () => {
        if (!selectedItemId || !buyQuantity) {
            alert("Harap isi ID item dan quantity untuk membeli");
            return;
        }
        const item = items.find((i) => i.id.toString() === selectedItemId);
        if (!item) {
            alert("Item tidak ditemukan");
            return;
        }

        try {
            setLoading(true);
            const totalCost = toBigInt(item.price) * toBigInt(buyQuantity); // pake toBigInt
            await marketplaceService.buyItem(
                Number(selectedItemId),
                Number(buyQuantity),
                totalCost
            );
            alert("Pembelian berhasil");
            setSelectedItemId("");
            setBuyQuantity("");
            onBought();
        } catch (err) {
            alert("Gagal membeli: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                margin: "30px auto",
                padding: "30px",
                maxWidth: "400px",
                backgroundColor: "#3b0a45", // ungu gelap
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                color: "#fff",
                textAlign: "center",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
        >
            <h4 style={{ marginBottom: "20px" }}>🛒 Checkout Item</h4>
            <input
                placeholder="Item ID"
                value={selectedItemId}
                onChange={(e) => setSelectedItemId(e.target.value)}
                disabled={loading}
                style={{
                    display: "block",
                    margin: "10px auto",
                    padding: "12px",
                    width: "80%",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "16px",
                    outline: "none",
                }}
            />
            <input
                placeholder="Quantity"
                value={buyQuantity}
                onChange={(e) => setBuyQuantity(e.target.value)}
                disabled={loading}
                style={{
                    display: "block",
                    margin: "10px auto 20px",
                    padding: "12px",
                    width: "80%",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "16px",
                    outline: "none",
                }}
            />
            <button
                onClick={buyItem}
                disabled={loading}
                style={{
                    padding: "12px 30px",
                    backgroundColor: loading ? "#7e3a7a" : "#9c27b0",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                    boxShadow: "0 0 10px #9c27b0",
                    transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                    if (!loading) e.target.style.backgroundColor = "#7b1fa2";
                }}
                onMouseLeave={(e) => {
                    if (!loading) e.target.style.backgroundColor = "#9c27b0";
                }}
            >
                {loading ? "Processing..." : "Buy"}
            </button>
        </div>
    );

};

export default BuyItemForm;
