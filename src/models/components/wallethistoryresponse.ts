/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type BalanceHistory = {};

export type WalletHistoryResponseData = {
    wallet?: Array<string> | undefined;
    balanceUsd?: number | undefined;
    balanceHistory?: Array<BalanceHistory> | undefined;
};

export type WalletHistoryResponse = {
    data?: WalletHistoryResponseData | undefined;
};

/** @internal */
export namespace BalanceHistory$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<BalanceHistory, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalanceHistory> = z.object({});
}

/** @internal */
export namespace WalletHistoryResponseData$ {
    export type Inbound = {
        wallet?: Array<string> | undefined;
        balance_usd?: number | undefined;
        balance_history?: Array<BalanceHistory$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<WalletHistoryResponseData, z.ZodTypeDef, Inbound> = z
        .object({
            wallet: z.array(z.string()).optional(),
            balance_usd: z.number().optional(),
            balance_history: z.array(z.lazy(() => BalanceHistory$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.wallet === undefined ? null : { wallet: v.wallet }),
                ...(v.balance_usd === undefined ? null : { balanceUsd: v.balance_usd }),
                ...(v.balance_history === undefined ? null : { balanceHistory: v.balance_history }),
            };
        });

    export type Outbound = {
        wallet?: Array<string> | undefined;
        balance_usd?: number | undefined;
        balance_history?: Array<BalanceHistory$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletHistoryResponseData> = z
        .object({
            wallet: z.array(z.string()).optional(),
            balanceUsd: z.number().optional(),
            balanceHistory: z.array(z.lazy(() => BalanceHistory$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.wallet === undefined ? null : { wallet: v.wallet }),
                ...(v.balanceUsd === undefined ? null : { balance_usd: v.balanceUsd }),
                ...(v.balanceHistory === undefined ? null : { balance_history: v.balanceHistory }),
            };
        });
}

/** @internal */
export namespace WalletHistoryResponse$ {
    export type Inbound = {
        data?: WalletHistoryResponseData$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<WalletHistoryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.lazy(() => WalletHistoryResponseData$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: WalletHistoryResponseData$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletHistoryResponse> = z
        .object({
            data: z.lazy(() => WalletHistoryResponseData$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}
