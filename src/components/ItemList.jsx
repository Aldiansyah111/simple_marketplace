import React from "react";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        margin: "30px auto",
        padding: "30px",
        maxWidth: "1000px",
        backgroundColor: "#3b0a45",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h3 style={{ marginBottom: "20px", textAlign: "center" }}>📦 Available Items</h3>

      {items.length === 0 ? (
        <p style={{ textAlign: "center", fontStyle: "italic" }}>Tidak ada item tersedia</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id.toString()}
              style={{
                backgroundColor: "#58255a",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div><strong>ID:</strong> {item.id.toString()}</div>
              <div><strong>Name:</strong> {item.name}</div>
              <div><strong>Price:</strong> {item.price.toString()} wei</div>
              <div><strong>Stock:</strong> {item.stock - item.sold}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
