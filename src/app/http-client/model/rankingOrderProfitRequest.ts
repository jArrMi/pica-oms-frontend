/**
 * OMS API
 * API for management of products and orders
 * 
 */


/**
 * Peticion de resumen de ordenes cerradas y total facturado por mes
 */
export interface RankingOrderProfitRequest { 
    fromDate?: string;
    toDate?: string;
}
