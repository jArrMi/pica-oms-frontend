/**
 * OMS API
 * API for management of products and orders
 * 
 */
import { OrderProfitResume } from './orderProfitResume';


/**
 * Resumen de ordenes cerradas y total facturado por mes
 */
export interface RankingOrderProfitResponse { 
    resume?: Array<OrderProfitResume>;
}
