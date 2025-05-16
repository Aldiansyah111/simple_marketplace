import React, { useState } from "react";
import { toBigInt } from "ethers"; // import toBigInt, bukan BigNumber
import marketplaceService from "../context/marketplaceService";

const WithdrawForm = () => {
  const [sellerBalance, setSellerBalance] = useState("");
  const [loading, setLoading] = useState(false);

  const withdraw = async () => {
    if (!sellerBalance || sellerBalance === "0") {
      alert("Masukkan jumlah withdraw yang valid");
      return;
    }
    try {
      setLoading(true);
      const amount = toBigInt(sellerBalance);  // convert ke bigint
      await marketplaceService.withdraw(amount);
      alert("Withdraw berhasil");
      setSellerBalance("");
    } catch (err) {
      alert("Withdraw gagal: " + err.message);
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
        backgroundColor: "#3b0a45",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>💰 Withdraw</h3>
      <input
        placeholder="Amount (wei)"
        value={sellerBalance}
        onChange={(e) => setSellerBalance(e.target.value)}
        disabled={loading}
        style={{
          display: "block",
          margin: "0 auto 20px",
          padding: "12px",
          width: "80%",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      <button
        onClick={withdraw}
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
        {loading ? "Processing..." : "Withdraw"}
      </button>
    </div>
  );
};

export default WithdrawForm;
