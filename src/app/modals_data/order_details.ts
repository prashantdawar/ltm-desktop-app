export class OrderDetails {
    public order_id!: number;
    public order_uid!: number;
    public order_details_object!: string;
    public order_total!: number;
    public order_discount!: number;
    public order_discount_percentage!: number;
    
    
    
    public order_total_payable!: number;
    public order_payment_method!: number;
    public order_status_enable!: number;
    
    public order_status_delivery!: number;
    public order_customer_id!: number;
    
    
    public order_customer_uid!: number;
    public order_customer_name!: string;
    public order_customer_company_name!: string;
    public order_discount_coupon!: number;
    
    public order_referrer!: string;
    public order_notes!: string;
    public order_notes_internal!: string;
    public order_gift_message!: string;
    public order_payment_id!: number;
    public order_payment_uid!: number;
    public order_confirmation_send!: number;
    public order_confirmation_send_sms!: number;
    
    public order_confirmation_send_call!: number;
    public order_confirmation_send_email!: number;
    public order_confirmation_send_whatsapp!: number;
    public order_confirmation_send_object!: string;
    public order_event_stream!: string;
    
    public update_log!: string;
    public order_email_log!: string;
    

    getStoreName() { return 'order_details'};
    getClassName() { return 'OrderDetails' };
    getIndexKey() { return this.order_id };
    
    getClassLabel() {
        let className = this.getClassName();
        return className.split(/(?=[A-Z])/).join(" ");
    }
}