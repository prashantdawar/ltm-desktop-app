import { ActiveRecord } from "../modals_core/ActiveRecord";

export class CustomerDetails extends ActiveRecord {
    public customer_id?: number;
    public customer_uid?: number;
    public customer_name: string = '';
    public customer_contact: string = '';



    public customer_company_name: string = '';
    public customer_code: string = '';
    public customer_phone_number: string = '';

    public customer_whatsapp_number: string = '';



    public customer_email: string = '';
    public customer_gst_number: string = '';
    public customer_due: string = '';
    public customer_status_enable: number = 0;

    public customer_category: string = '';
    public customer_address_street: string = '';
    public customer_address_tehsil: string = '';
    public customer_address_district: string = '';
    public customer_address_state: string = '';
    public customer_address_pincode: number = 0;
    public customer_notes: string = '';
    public customer_notes_internal: string = '';

    // public created_on: string= '';    
    // public updated_on: string= '';
    // public created_by: string= '';
    // public updated_by: string= '';
    // public created_at: string= '';

    // public updated_at: string= '';

    // public update_log: string= '';


    constructor() {
        super();
    }




    rules(){
        return [
            [['customer_name', 'customer_contact', 'customer_company_name', 'customer_address_pincode', 'customer_status_enable'], 'required'],
            [['customer_name', 'customer_contact', 'customer_company_name', 'customer_code','customer_phone_number', 'customer_whatsapp_number', 'customer_email', 'customer_gst_number', 'customer_address_street', 'customer_address_tehsil', 'customer_address_district', 'customer_address_state', 'customer_notes', 'customer_notes_internal'], 'string'],

            [['customer_due', 'customer_status_enable', 'customer_address_pincode'], 'integer']
        ]
    }
    attributeLabels() {
        return {
            'customer_id': 'Customer ID',
            'customer_uid': 'Customer UID',

            'customer_name': 'Customer Name',
            'customer_contact': 'Customer Contact',
            'customer_company_name': 'Company Name',
            'customer_code': 'Customer Code',
            'customer_phone_number': 'Phone Number',
            'customer_whatsapp_number': 'WhatsApp Number',
            'customer_email': 'Email',
            'customer_gst_number': 'GST Number',
            'customer_due': 'Customer Due',
            'customer_status_enable': 'Customer Status',
            'customer_category': 'Category',
            'customer_address_street': 'Address Street',
            'customer_address_tehsil': 'Tehsil',
            
            
            'customer_address_district': 'District',
            'customer_address_state': 'State',

            'customer_address_pincode': 'Pincode',
            
            
            'customer_notes': 'Notes',
            'customer_notes_internal': 'Internal Notes',
        }
    }

    getClassName() { return 'CustomerDetails' };
    
    
    
    
    getClassLabel() {
        let className = this.getClassName();
        return className.split(/(?=[A-Z])/).join(" ");
    }
}