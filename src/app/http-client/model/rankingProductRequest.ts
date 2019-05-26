/**
 * OMS API
 * API for management of products and orders
 * 
 */


/**
 * Peticion de consulta de productos en base a su rango
 */
export interface RankingProductRequest { 
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
    type?: RankingProductRequest.TypeEnum;
}
export namespace RankingProductRequest {
    export type TypeEnum = 'MOST_SELLED_PRODUCTS' | 'MOST_SELLED_SPECTACLES';
    export const TypeEnum = {
        PRODUCTS: 'MOST_SELLED_PRODUCTS' as TypeEnum,
        SPECTACLES: 'MOST_SELLED_SPECTACLES' as TypeEnum
    };
}
