/**
 * OMS API
 * API for management of products and orders
 * 
 */


/**
 * Peticion de ranking de ordenes en base a criterios
 */
export interface RankingOrderRequest { 
    /**
     * Fecha inicio del rango
     */
    startDate?: string;
    /**
     * Fecha fin del rango
     */
    endDate?: string;
    /**
     * Tipo de busqueda
     */
    type?: RankingOrderRequest.TypeEnum;
}
export namespace RankingOrderRequest {
    export type TypeEnum = 'MOST_TIME_OPENED' | 'MOST_PROFIT_GENERATED';
    export const TypeEnum = {
        TIMEOPENED: 'MOST_TIME_OPENED' as TypeEnum,
        PROFITGENERATED: 'MOST_PROFIT_GENERATED' as TypeEnum
    };
}
