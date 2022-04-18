import { ActiveRecord } from "../modals_core/ActiveRecord";
import { ModelDataFormat } from "../modals_core/ModelDataFormat";

export class ProductCategoryDetails extends ActiveRecord implements ModelDataFormat{

    public product_category_id!: number;
    public product_category_uid!: number;
    
    
    
    public product_category_name!: string;
    public product_category_description!: string;
    public product_category_notes!: string;
    
    public product_category_notes_internal!: string;
    public product_category_status_enable!: number;
    
    
    public product_category_code!: string;  

    constructor(){
        super();
    }

    rules() {
        return [
            [['product_category_name'], 'required'],
            // [['product_cateogry_id', 'product_category_uid', 'product_category_status_enable'], 'integer'],
            [['product_category_name', 'product_cateogry_description', 'product_category_notes', 'product_category_notes_internal', 'product_category_code'], 'string']
        ];
    }

    attributeLabels() {
        return {
            'product_category_id': 'ID',
            'product_category_name': 'Category Name',
     
     
            'product_category_description': 'Description',
            'product_category_notes': 'Notes ( For Customer Reference )',
            'product_category_notes_internal': 'Internal Notes ( For Office Reference )',
            'product_category_status_enable': 'Enable Status',
            'product_category_code': 'Code',
            'product_category_uid': 'Uid',
        }
    }

    getStoreName(): string {
        return 'product_category_details';
    }

    getClassName(): string {
        return 'ProductCategoryDetails';
    }

    getIndexKey(): number {
        return this.product_category_id;
    }

    getClassLabel(): string {
        let className = this.getClassName();
        return className.split(/(?=[A-Z])/).join(" ");
    }
}