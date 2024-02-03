import IValidationDocumentProperties from "./document/IValidationDocumentProperties";

export default interface IDocumentDeserializer 
{
    DeserializeProperties(properties: IValidationDocumentProperties): any;
    Deserialize(documentContent: string): any;
}