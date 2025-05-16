import React, { useEffect, useState } from "react";
import marketplaceService from "../context/marketplaceService";
import { useWallet } from "../context/wallet";
import { ImAngry2 } from "react-icons/im";

import ListItemForm from "./ListItemForm";
import BuyItemForm from "./BuyItemForm";
import WithdrawForm from "./WithdrawForm";
import ItemList from "./ItemList";

const SimpleMarketplaceApp = () => {
    const { account } = useWallet();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const availableItems = await marketplaceService.fetchItems();
            setItems(availableItems);
        } catch (err) {
            console.error("Gagal fetch items", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (account) fetchItems();
    }, [account]);

    if (!account) {
        return (
            <>
                <style>{`
        @keyframes shineGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>

                <div
                    style={{
                        background: 'linear-gradient(270deg, #ff6ec4, #7873f5, #52fff9, #ff6ec4)',
                        backgroundSize: '600% 600%',
                        animation: 'shineGradient 6s ease infinite',
                        padding: '24px 30px',
                        borderRadius: '16px',
                        fontWeight: '700',
                        fontSize: '20px',
                        textAlign: 'center',
                        color: '#fff',
                        maxWidth: 700,
                        margin: '80px auto',
                        boxShadow: '0 0 20px rgba(156, 39, 176, 0.6)',
                        fontFamily:
                            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                        userSelect: 'none',
                    }}
                >
                    <p style={{ marginBottom: 20 }}>
                        Silakan hubungkan wallet Anda melalui navigasi terlebih dahulu.
                    </p>
                    <div style={{ fontSize: 30 }}>
                        {[...Array(6)].map((_, i) => (
                            <ImAngry2 key={i} style={{ margin: '0 5px' }} />
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <div
            style={{
                maxWidth: 600,
                margin: "40px auto",
                padding: 20,
                backgroundColor: "#2c003e",
                borderRadius: 15,
                boxShadow: "0 0 15px rgba(156, 39, 176, 0.6)",
                color: "#fff",
                fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            }}
        >
            <h2
                style={{
                    textAlign: 'center',
                    marginBottom: 30,
                    background: 'linear-gradient(90deg, #ff00cc, #3333ff, #00ffcc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradientText 5s ease infinite',
                    backgroundSize: '200% auto',
                }}
            >
                SimpleMarketplace DApp
            </h2>

            <style>
                {`
            @keyframes gradientText {
            0% {background-position: 0% center; }
            100% {background-position: 200% center;}
             }
             `}
            </style>


            <p
                style={{
                    backgroundColor: "#451a66",
                    padding: "8px 12px",
                    borderRadius: 10,
                    fontWeight: "600",
                    fontSize: 14,
                    marginBottom: 25,
                    userSelect: "text",
                    overflowWrap: "break-word",
                }}
            >
                <strong>Account:</strong> {account}
            </p>

            <div style={{ marginBottom: 30 }}>
                <ListItemForm onListed={fetchItems} />
            </div>

            {loading ? (
                <p style={{ textAlign: "center", fontSize: 16 }}>Loading items...</p>
            ) : (
                <ItemList items={items} />
            )}

            <div style={{ marginTop: 30, marginBottom: 30 }}>
                <BuyItemForm items={items} onBought={fetchItems} />
            </div>

            <WithdrawForm />
        </div>
    );
};

export default SimpleMarketplaceApp;
