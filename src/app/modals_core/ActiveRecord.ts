import { NgxIndexedDBService } from "ngx-indexed-db";

export class ActiveRecord{
    public created_on!: string;    
    public updated_on!: string;
    public created_by!: number;
    public updated_by!: number;
    public created_at!: number;
    public updated_at!: number;
    
    

    public update_log!: string;
    constructor(){}
    
    
    beforeSave(){
        console.log(this);
        
        
        this.created_on = Date();
        this.updated_on = Date();
        this.created_by = 0;
        this.updated_by = 0;

        this.created_at = 0;
        this.updated_at = 0;
    }

    save(dbService:NgxIndexedDBService){
        let model: any = this;

        if(model.getIndexKey() != undefined){
            return dbService.update(model.getStoreName(), model);
        }
        return dbService.add(model.getStoreName(), model);
    }

    find(dbService:NgxIndexedDBService, model: any = this){
        return dbService.getAll(model.getStoreName());
    }
}