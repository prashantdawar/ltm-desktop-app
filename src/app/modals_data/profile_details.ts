import { ActiveRecord } from "../modals_core/ActiveRecord";
import { ModelDataFormat } from "../modals_core/ModelDataFormat";

export class ProfileDetails extends ActiveRecord implements ModelDataFormat {
    public profile_id!: number;
    public profile_uid!: number;
    public profile_name!: string;



    public profile_company_name!: string;
    public profile_contact_name!: string;
    public profile_phone_number!: string;

    public profile_whatsapp_number!: string;
    public profile_email!: string;


    public profile_address_street!: string;
    public profile_address_tehsil!: string;
    public profile_address_district!: string;
    public profile_address_state!: string;

    public profile_address_pincode!: number;
    public profile_notes!: string;
    public profile_notes_internal!: string;

    rules() {
        return [
            [['profile_id', 'profile_uid', 'profile_address_pincode'], 'interger'],
            [['profile_name', 'profile_company_name', 'profile_contact_name', 'profile_phone_number', 'profile_whatsapp_number', 'profile_email', 'profile_address_street', 'profile_address_tehsil', 'profile_address_district', 'profile_address_state', 'profile_notes', 'profile_notes_internal'], 'string']
        ]
    }
    
    attributeLabels() {
        return {
            
            
            'profile_name': 'User Profile Name',     
            'profile_company_name': 'Company Name',
            'profile_contact_name': 'Contact Name',
            'profile_phone_number': 'Phone Number',
            'profile_whatsapp_number': 'Whatsapp Number',
            'profile_email': 'Email',
            'profile_address_street': 'Address Street',
            'profile_address_tehsil': 'Tehsil',
            'profile_address_district': 'District',
            'profile_address_state': 'State',
            'profile_address_pincode': 'Pincode',
            
            'profile_notes': 'Notes ( For Customer Reference )',            
            'profile_notes_internal': 'Internal notes ( For Office Reference )'
        }
    }
    
    getStoreName(): string {
        return 'profile_details';
    }

    getClassName(): string {
        return 'ProfileDetails';
    }

    getIndexKey(): number {
        return this.profile_id;
    }

    
    
    
    // getClassLabel(): string {
    //     let className = this.getClassName();
    
    //     return className.split(/(?=[A-Z])/).join(" ");
    // }
}