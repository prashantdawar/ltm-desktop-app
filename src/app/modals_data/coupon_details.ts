import { ActiveRecord } from "../modals_core/ActiveRecord";

export class CouponDetails extends ActiveRecord{
    public coupon_details_id!: number ;
    public coupon_details_uid!: number;
    public coupon_details_name!: string ;
    public coupon_details_code!: string ;



    public coupon_details_description!: string ;
    public coupon_details_notes!: string ;
    public coupon_details_notes_internal!: string ;

    public coupon_details_status!: string ;    
    public coupon_details_redeem_till!: string ;


    public coupon_details_discount_amount!: string ;
    public coupon_details_amount_min!: string ;
    public coupon_details_amount_max!: string ;
    public coupon_details_discount_percentage!: string ;

    public coupon_details_type!: string ;    
    public coupon_details_redeem_count!: string ;
    public coupon_details_redeem_count_max!: string ;

    constructor(){
        super();
    }


    attributeLabels(){

        return {
            'coupon_details_id': 'Coupon Id',
            'coupon_details_uid': 'Coupon UID',

            'coupon_details_name': 'Coupon Name',
            'coupon_details_code': 'Coupon Code',
            'coupon_details_description': 'Coupon Description',
            'coupon_details_notes': 'Notes',
            'coupon_details_notes_internal': 'Internal Notes',        
            'coupon_details_status': 'Coupon Status',

            'coupon_details_redeem_till': 'Redeem Till',
            'coupon_details_discount_amount': 'Discount Amount',
            'coupon_details_amount_min': 'Amount Min',
            'coupon_details_amount_max': 'Amount Max',
            
            'coupon_details_discount_percentage': 'Discount Percentage',        
            'coupon_details_type': 'Coupon Type',
            'coupon_details_redeem_count': 'Redeem Count',
            'coupon_details_redeem_count_max': 'Redeem Count Max',
        }
    }
}