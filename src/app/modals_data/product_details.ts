import { ActiveRecord } from "../modals_core/ActiveRecord";

export class ProductDetails extends ActiveRecord {
    public product_id!: number;
    public product_uid!: number;
    public product_name!: string;
    public product_brand_name!: string;



    public product_category!: string;
    public product_type!: string;
    public product_units!: string;

    public product_quantity!: string;
    public product_parent_category!: string;


    public product_description!: string;
    public product_notes!: string;
    public product_notes_internal!: string;
    public product_packaging_type!: string;

    public product_in_stock!: string;
    public product_stock_location!: string;
    public product_status_enable!: string;
    public product_origin_country!: string;
    public product_imported!: string;
    public product_condition!: string;



    constructor() {
        super();
    }
}