/**
 * OMS API
 * API for management of products and orders
 * 
 */


/**
 * Objeto que representa un rol de usuario dentro del OMS
 */
export interface Rol { 
    /**
     * ID del rol
     */
    rolId?: number;
    /**
     * Descripcion del rol
     */
    rolDescription?: Rol.RolDescriptionEnum;
}
export namespace Rol {
    export type RolDescriptionEnum = 'PRODUCTOS_CONSULTA' | 'PRODUCTOS_ADMON' | 'CAMPANNAS' | 'ORDENES_CONSULTA' | 'CLIENTES_CONSULTA' | 'CLIENTES_ADMON';
    export const RolDescriptionEnum = {
        PRODUCTOSCONSULTA: 'PRODUCTOS_CONSULTA' as RolDescriptionEnum,
        PRODUCTOSADMON: 'PRODUCTOS_ADMON' as RolDescriptionEnum,
        CAMPANNAS: 'CAMPANNAS' as RolDescriptionEnum,
        ORDENESCONSULTA: 'ORDENES_CONSULTA' as RolDescriptionEnum,
        CLIENTESCONSULTA: 'CLIENTES_CONSULTA' as RolDescriptionEnum,
        CLIENTESADMON: 'CLIENTES_ADMON' as RolDescriptionEnum
    };
}
