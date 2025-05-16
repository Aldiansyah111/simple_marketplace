import React, { useEffect, useState } from "react";
import marketplaceService from "../context/marketplaceService";
import { useWallet } from "../context/wallet";

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
        return <p>Silakan hubungkan wallet Anda melalui navigasi terlebih dahulu.</p>;
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
            <h2 style={{ textAlign: "center", marginBottom: 30 }}>SimpleMarketplace DApp</h2>
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
