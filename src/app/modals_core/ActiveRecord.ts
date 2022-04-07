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
}