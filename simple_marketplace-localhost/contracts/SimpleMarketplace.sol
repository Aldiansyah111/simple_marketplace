// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleMarketplace {
    struct Item {
        uint id;
        address payable seller;
        string name;
        uint price; // in wei per unit
        uint stock; // berapa unit tersedia
        uint sold;  // berapa unit sudah terjual
        bool exists; // cek apakah item ada
    }

    uint public itemCount;
    mapping(uint => Item) public items;

    // Simpan saldo tiap seller
    mapping(address => uint) public sellerBalances;

    event ItemListed(uint id, address seller, string name, uint price, uint stock);
    event ItemBought(uint id, address buyer, uint quantity, uint totalPrice);
    event ItemPriceUpdated(uint id, uint oldPrice, uint newPrice);
    event Withdraw(address seller, uint amount);

    function listItem(string memory name, uint price, uint stock) public {
        require(price > 0, "Price must be greater than zero");
        require(stock > 0, "Stock must be greater than zero");

        itemCount++;
        items[itemCount] = Item(
            itemCount,
            payable(msg.sender),
            name,
            price,
            stock,
            0,
            true
        );

        emit ItemListed(itemCount, msg.sender, name, price, stock);
    }

    function updatePrice(uint id, uint newPrice) public {
        Item storage item = items[id];
        require(item.exists, "Item does not exist");
        require(msg.sender == item.seller, "Only seller can update price");
        require(newPrice > 0, "Price must be greater than zero");
        require(item.sold < item.stock, "Item already sold out");

        uint oldPrice = item.price;
        item.price = newPrice;

        emit ItemPriceUpdated(id, oldPrice, newPrice);
    }

    function buyItem(uint id, uint quantity) public payable {
        Item storage item = items[id];
        require(item.exists, "Item does not exist");
        require(quantity > 0, "Quantity must be greater than zero");
        require(item.sold + quantity <= item.stock, "Not enough stock available");
        require(msg.value >= item.price * quantity, "Not enough ether sent");
        require(msg.sender != item.seller, "Seller cannot buy their own item");

        uint totalPrice = item.price * quantity;
        item.sold += quantity;

        // Simpan dana ke sellerBalances, jangan langsung transfer
        sellerBalances[item.seller] += totalPrice;

        // Refund kelebihan ether jika ada
        if (msg.value > totalPrice) {
            payable(msg.sender).transfer(msg.value - totalPrice);
        }

        emit ItemBought(id, msg.sender, quantity, totalPrice);
    }

    // Seller bisa withdraw balance mereka kapan saja
   function withdraw(uint amount) public {
    uint balance = sellerBalances[msg.sender];
    require(amount > 0, "Amount must be greater than zero");
    require(amount <= balance, "Amount exceeds balance");

    // Kurangi saldo seller dulu untuk cegah re-entrancy
    sellerBalances[msg.sender] = balance - amount;

    payable(msg.sender).transfer(amount);

    emit Withdraw(msg.sender, amount);
}


    // Fungsi untuk get semua item yang masih ada stoknya
    function getAvailableItems() public view returns (Item[] memory) {
        uint availableCount = 0;
        for (uint i = 1; i <= itemCount; i++) {
            if (items[i].exists && items[i].sold < items[i].stock) {
                availableCount++;
            }
        }

        Item[] memory availableItems = new Item[](availableCount);
        uint index = 0;
        for (uint i = 1; i <= itemCount; i++) {
            if (items[i].exists && items[i].sold < items[i].stock) {
                availableItems[index] = items[i];
                index++;
            }
        }
        return availableItems;
    }
}
