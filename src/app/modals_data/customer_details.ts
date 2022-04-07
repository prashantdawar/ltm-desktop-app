import { ActiveRecord } from "../modals_core/ActiveRecord";

export class CustomerDetails extends ActiveRecord{
    public customer_id?: number;
    public customer_uid?: number;
    public customer_name: string = '';
    public customer_contact: string= '';



    public customer_company_name: string= '';
    public customer_code: string= '';
    public customer_phone_number: string= '';
    
    public customer_whatsapp_number: string= '';
       
    
    
    public customer_email: string = '';
    public customer_gst_number: string= '';       
    public customer_due: string= '';        
    public customer_status_enable: string= '';
    
    public customer_category: string= '';    
    public customer_address_street: string= '';
    public customer_address_tehsil: string = '';
    public customer_address_district: string = '';
    public customer_address_state: string = '';
    public customer_address_pincode!: number;
    public customer_notes: string = '';
    public customer_notes_internal: string= '';

    // public created_on: string= '';    
    // public updated_on: string= '';
    // public created_by: string= '';
    // public updated_by: string= '';
    // public created_at: string= '';

    // public updated_at: string= '';
        
    // public update_log: string= '';
 
     
    constructor(){
        super();
    }
}