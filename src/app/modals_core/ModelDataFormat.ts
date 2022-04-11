export interface ModelDataFormat{
    getClassName(): string;
    getClassLabel(): string;
    attributeLabels(): any;
    rules(): any;
}