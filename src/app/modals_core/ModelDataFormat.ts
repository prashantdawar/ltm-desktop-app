export interface ModelDataFormat{
    getClassName(): string;
    getClassLabel(): string;
    getStoreName(): string;
    attributeLabels(): any;
    rules(): any;
}