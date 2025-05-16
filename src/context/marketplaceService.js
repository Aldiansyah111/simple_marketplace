import { ethers } from "ethers";
import MarketplaceABI from "./SimpleMarketplace.json";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

class MarketplaceService {
  constructor() {
    this.contract = null;
  }

  async initContract() {
    if (this.contract) return;

    if (!window.ethereum) {
      throw new Error("Metamask tidak ditemukan");
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    this.contract = new ethers.Contract(contractAddress, MarketplaceABI.abi, signer);
  }

  async fetchItems() {
    await this.initContract();
    return await this.contract.getAvailableItems();
  }

  async listItem(name, priceWei, stock) {
    await this.initContract();
    const tx = await this.contract.listItem(name, priceWei, stock);
    await tx.wait();
  }

  async buyItem(itemId, quantity, totalCostWei) {
    await this.initContract();
    const tx = await this.contract.buyItem(itemId, quantity, { value: totalCostWei });
    await tx.wait();
  }

  async withdraw(amountWei) {
    await this.initContract();
    const tx = await this.contract.withdraw(amountWei);
    await tx.wait();
  }
}

export default new MarketplaceService();
