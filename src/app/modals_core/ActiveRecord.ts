import { NgxIndexedDBService } from "ngx-indexed-db";

export class ActiveRecord {
    public created_on!: string;
    public updated_on!: string;
    public created_by!: number;
    public updated_by!: number;



    public created_at!: number;
    public updated_at!: number;


    public update_log!: string;
    constructor() { }


    modalAttrributes(model: any = this) {
        let attributesObj: any = {};



        model.rules.forEach((rule: []) => {
            rule.forEach((ruleSubArray: any) => {
                ruleSubArray[0].forEach((attribute: string) => {
                    attributesObj[attribute] = '';
                });
            })
        });
        return attributesObj;
    }
    
    beforeSave() {
        console.log(this);
        this.created_on = Date();
        this.updated_on = Date();

        this.created_by = 0;
        this.updated_by = 0;
        this.created_at = 0;
        this.updated_at = 0;
    }

    save(dbService: NgxIndexedDBService) {
        let model: any = this;

        if (model.getIndexKey() != undefined) {
            return dbService.update(model.getStoreName(), model);
        }
        return dbService.add(model.getStoreName(), model);
    }

    find(dbService: NgxIndexedDBService, model: any = this) {
        return dbService.getAll(model.getStoreName());
    }

    findOne(dbService: NgxIndexedDBService, indexKey: number, model: any = this) {
        return dbService.getByKey(model.getStoreName(), indexKey);
    }

    getClassLabel(model: any = this): string {
        let className = model.getClassName();

        return className.split(/(?=[A-Z])/).join(" ");
    }
}