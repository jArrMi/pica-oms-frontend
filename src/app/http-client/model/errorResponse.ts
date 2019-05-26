/**
 * OMS API
 * API for management of products and orders
 * 
 */
import { Status } from './status';


export interface ErrorResponse { 
    status: Status;
    /**
     * Timestamp error
     */
    date?: Date;
}
