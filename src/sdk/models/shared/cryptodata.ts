/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CryptoData extends SpeakeasyBase {
    /**
     * The blockchains on which the cryptocurrency exists
     */
    @SpeakeasyMetadata()
    @Expose({ name: "blockchains" })
    blockchains?: string[];

    /**
     * The contracts associated with the cryptocurrency
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contracts" })
    contracts?: string[];

    /**
     * The unique identifier of the cryptocurrency
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * The name of the cryptocurrency
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Price change 24h
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price_change_24h" })
    priceChange24h?: number;

    /**
     * The symbol of the cryptocurrency
     */
    @SpeakeasyMetadata()
    @Expose({ name: "symbol" })
    symbol?: string;
}
