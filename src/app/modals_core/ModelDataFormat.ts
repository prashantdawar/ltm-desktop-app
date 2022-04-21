export interface ModelDataFormat{
    getClassName(): string;
    getClassLabel(): string;
    getStoreName(): string;
    getIndexKey(): number;
    attributeLabels(): any;
    rules(): any;
}