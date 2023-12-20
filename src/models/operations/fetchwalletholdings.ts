/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type FetchWalletHoldingsRequest = {
    /**
     * The user wallet queried
     */
    wallet: string;
    /**
     * Blockchains to fetch holdings from (by default, all) - comma separated, chain ID or chain name
     */
    blockchains?: string | undefined;
    /**
     * Will use cached data if available
     */
    cache?: boolean | undefined;
    /**
     * Amount of seconds after which the cache is considered stale (default 5min)
     */
    stale?: number | undefined;
};

export type CrossChainBalances = {
    address?: string | undefined;
    balance?: number | undefined;
    balanceRaw?: string | undefined;
    chainId?: number | undefined;
};

export type Assets = {
    asset?: components.Asset | undefined;
    /**
     * Current price of the asset.
     */
    price?: number | undefined;
    /**
     * Estimated balance of the asset in the wallet.
     */
    estimatedBalance?: number | undefined;
    /**
     * Token balance of the asset in the wallet.
     */
    tokenBalance?: number | undefined;
    crossChainBalances?: Record<string, CrossChainBalances> | undefined;
};

export type FetchWalletHoldingsData = {
    /**
     * Total balance of the wallet in USD.
     */
    totalWalletBalance?: number | undefined;
    /**
     * Wallet address queried.
     */
    wallet?: string | undefined;
    assets?: Array<Assets> | undefined;
};

export type LastUpdated = {
    /**
     * Timestamp of the last normal transaction.
     */
    normal?: number | undefined;
    /**
     * Timestamp of the last internal transaction.
     */
    internal?: number | undefined;
    /**
     * Timestamp of the last token transaction.
     */
    token?: number | undefined;
    /**
     * Timestamp of the last update
     */
    lastUpdated?: number | undefined;
};

/**
 * Successful response
 */
export type FetchWalletHoldingsResponseBody = {
    data?: FetchWalletHoldingsData | undefined;
    lastUpdated?: Record<string, LastUpdated> | undefined;
};

export type FetchWalletHoldingsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful response
     */
    object?: FetchWalletHoldingsResponseBody | undefined;
};

/** @internal */
export namespace FetchWalletHoldingsRequest$ {
    export type Inbound = {
        wallet: string;
        blockchains?: string | undefined;
        cache?: boolean | undefined;
        stale?: number | undefined;
    };

    export const inboundSchema: z.ZodType<FetchWalletHoldingsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            wallet: z.string(),
            blockchains: z.string().optional(),
            cache: z.boolean().optional(),
            stale: z.number().optional(),
        })
        .transform((v) => {
            return {
                wallet: v.wallet,
                ...(v.blockchains === undefined ? null : { blockchains: v.blockchains }),
                ...(v.cache === undefined ? null : { cache: v.cache }),
                ...(v.stale === undefined ? null : { stale: v.stale }),
            };
        });

    export type Outbound = {
        wallet: string;
        blockchains?: string | undefined;
        cache?: boolean | undefined;
        stale?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FetchWalletHoldingsRequest> = z
        .object({
            wallet: z.string(),
            blockchains: z.string().optional(),
            cache: z.boolean().optional(),
            stale: z.number().optional(),
        })
        .transform((v) => {
            return {
                wallet: v.wallet,
                ...(v.blockchains === undefined ? null : { blockchains: v.blockchains }),
                ...(v.cache === undefined ? null : { cache: v.cache }),
                ...(v.stale === undefined ? null : { stale: v.stale }),
            };
        });
}

/** @internal */
export namespace CrossChainBalances$ {
    export type Inbound = {
        address?: string | undefined;
        balance?: number | undefined;
        balanceRaw?: string | undefined;
        chainId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<CrossChainBalances, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.string().optional(),
            balance: z.number().optional(),
            balanceRaw: z.string().optional(),
            chainId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.balanceRaw === undefined ? null : { balanceRaw: v.balanceRaw }),
                ...(v.chainId === undefined ? null : { chainId: v.chainId }),
            };
        });

    export type Outbound = {
        address?: string | undefined;
        balance?: number | undefined;
        balanceRaw?: string | undefined;
        chainId?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CrossChainBalances> = z
        .object({
            address: z.string().optional(),
            balance: z.number().optional(),
            balanceRaw: z.string().optional(),
            chainId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.balance === undefined ? null : { balance: v.balance }),
                ...(v.balanceRaw === undefined ? null : { balanceRaw: v.balanceRaw }),
                ...(v.chainId === undefined ? null : { chainId: v.chainId }),
            };
        });
}

/** @internal */
export namespace Assets$ {
    export type Inbound = {
        asset?: components.Asset$.Inbound | undefined;
        price?: number | undefined;
        estimated_balance?: number | undefined;
        token_balance?: number | undefined;
        cross_chain_balances?: Record<string, CrossChainBalances$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<Assets, z.ZodTypeDef, Inbound> = z
        .object({
            asset: components.Asset$.inboundSchema.optional(),
            price: z.number().optional(),
            estimated_balance: z.number().optional(),
            token_balance: z.number().optional(),
            cross_chain_balances: z
                .record(z.lazy(() => CrossChainBalances$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.asset === undefined ? null : { asset: v.asset }),
                ...(v.price === undefined ? null : { price: v.price }),
                ...(v.estimated_balance === undefined
                    ? null
                    : { estimatedBalance: v.estimated_balance }),
                ...(v.token_balance === undefined ? null : { tokenBalance: v.token_balance }),
                ...(v.cross_chain_balances === undefined
                    ? null
                    : { crossChainBalances: v.cross_chain_balances }),
            };
        });

    export type Outbound = {
        asset?: components.Asset$.Outbound | undefined;
        price?: number | undefined;
        estimated_balance?: number | undefined;
        token_balance?: number | undefined;
        cross_chain_balances?: Record<string, CrossChainBalances$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Assets> = z
        .object({
            asset: components.Asset$.outboundSchema.optional(),
            price: z.number().optional(),
            estimatedBalance: z.number().optional(),
            tokenBalance: z.number().optional(),
            crossChainBalances: z
                .record(z.lazy(() => CrossChainBalances$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.asset === undefined ? null : { asset: v.asset }),
                ...(v.price === undefined ? null : { price: v.price }),
                ...(v.estimatedBalance === undefined
                    ? null
                    : { estimated_balance: v.estimatedBalance }),
                ...(v.tokenBalance === undefined ? null : { token_balance: v.tokenBalance }),
                ...(v.crossChainBalances === undefined
                    ? null
                    : { cross_chain_balances: v.crossChainBalances }),
            };
        });
}

/** @internal */
export namespace FetchWalletHoldingsData$ {
    export type Inbound = {
        total_wallet_balance?: number | undefined;
        wallet?: string | undefined;
        assets?: Array<Assets$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<FetchWalletHoldingsData, z.ZodTypeDef, Inbound> = z
        .object({
            total_wallet_balance: z.number().optional(),
            wallet: z.string().optional(),
            assets: z.array(z.lazy(() => Assets$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.total_wallet_balance === undefined
                    ? null
                    : { totalWalletBalance: v.total_wallet_balance }),
                ...(v.wallet === undefined ? null : { wallet: v.wallet }),
                ...(v.assets === undefined ? null : { assets: v.assets }),
            };
        });

    export type Outbound = {
        total_wallet_balance?: number | undefined;
        wallet?: string | undefined;
        assets?: Array<Assets$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FetchWalletHoldingsData> = z
        .object({
            totalWalletBalance: z.number().optional(),
            wallet: z.string().optional(),
            assets: z.array(z.lazy(() => Assets$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.totalWalletBalance === undefined
                    ? null
                    : { total_wallet_balance: v.totalWalletBalance }),
                ...(v.wallet === undefined ? null : { wallet: v.wallet }),
                ...(v.assets === undefined ? null : { assets: v.assets }),
            };
        });
}

/** @internal */
export namespace LastUpdated$ {
    export type Inbound = {
        normal?: number | undefined;
        internal?: number | undefined;
        token?: number | undefined;
        last_updated?: number | undefined;
    };

    export const inboundSchema: z.ZodType<LastUpdated, z.ZodTypeDef, Inbound> = z
        .object({
            normal: z.number().int().optional(),
            internal: z.number().int().optional(),
            token: z.number().int().optional(),
            last_updated: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.normal === undefined ? null : { normal: v.normal }),
                ...(v.internal === undefined ? null : { internal: v.internal }),
                ...(v.token === undefined ? null : { token: v.token }),
                ...(v.last_updated === undefined ? null : { lastUpdated: v.last_updated }),
            };
        });

    export type Outbound = {
        normal?: number | undefined;
        internal?: number | undefined;
        token?: number | undefined;
        last_updated?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LastUpdated> = z
        .object({
            normal: z.number().int().optional(),
            internal: z.number().int().optional(),
            token: z.number().int().optional(),
            lastUpdated: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.normal === undefined ? null : { normal: v.normal }),
                ...(v.internal === undefined ? null : { internal: v.internal }),
                ...(v.token === undefined ? null : { token: v.token }),
                ...(v.lastUpdated === undefined ? null : { last_updated: v.lastUpdated }),
            };
        });
}

/** @internal */
export namespace FetchWalletHoldingsResponseBody$ {
    export type Inbound = {
        data?: FetchWalletHoldingsData$.Inbound | undefined;
        lastUpdated?: Record<string, LastUpdated$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<FetchWalletHoldingsResponseBody, z.ZodTypeDef, Inbound> =
        z
            .object({
                data: z.lazy(() => FetchWalletHoldingsData$.inboundSchema).optional(),
                lastUpdated: z.record(z.lazy(() => LastUpdated$.inboundSchema)).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.data === undefined ? null : { data: v.data }),
                    ...(v.lastUpdated === undefined ? null : { lastUpdated: v.lastUpdated }),
                };
            });

    export type Outbound = {
        data?: FetchWalletHoldingsData$.Outbound | undefined;
        lastUpdated?: Record<string, LastUpdated$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        FetchWalletHoldingsResponseBody
    > = z
        .object({
            data: z.lazy(() => FetchWalletHoldingsData$.outboundSchema).optional(),
            lastUpdated: z.record(z.lazy(() => LastUpdated$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.lastUpdated === undefined ? null : { lastUpdated: v.lastUpdated }),
            };
        });
}

/** @internal */
export namespace FetchWalletHoldingsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: FetchWalletHoldingsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<FetchWalletHoldingsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => FetchWalletHoldingsResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: FetchWalletHoldingsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FetchWalletHoldingsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => FetchWalletHoldingsResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
