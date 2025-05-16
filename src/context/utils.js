// src/utils/utils.js
import { BigNumber, utils } from "ethers";

/**
 * Convert Ether string (e.g. "0.1") to Wei BigNumber
 * @param {string} etherStr 
 * @returns {BigNumber}
 */
export function etherToWei(etherStr) {
  return utils.parseEther(etherStr);
}

/**
 * Convert Wei (BigNumber or string) to Ether string (e.g. "0.1")
 * @param {BigNumber|string} wei 
 * @returns {string}
 */
export function weiToEther(wei) {
  return utils.formatEther(wei);
}

/**
 * Convert a string or number to BigNumber
 * @param {string|number} value 
 * @returns {BigNumber}
 */
export function toBigNumber(value) {
  try {
    if (BigNumber.isBigNumber(value)) return value;
    return BigNumber.from(value);
  } catch (error) {
    throw new Error("Invalid value to convert to BigNumber");
  }
}

/**
 * Check if input is valid positive number string (integer or decimal)
 * @param {string} str 
 * @returns {boolean}
 */
export function isValidNumber(str) {
  return /^\d*\.?\d+$/.test(str);
}
