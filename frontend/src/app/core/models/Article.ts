export interface Article {
    id?: number;
    titre: string;
    image: string;
    contenu: Text;
    createdAt?: Date;
    updatedAt?: Date;
    published: Boolean;
    utilisateur?: any;
    categories?: any;
    commentaires?: any;
}