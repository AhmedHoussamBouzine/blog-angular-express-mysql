export interface Article {
    id?: number;
    titre: string;
    image: string;
    contenu: Text;
    createdAt?: Date;
    updatedAt?: Date;
    published?: Boolean;
    utilisateur?: any;
    utilisateurId?: number;
    categories?: any;
    commentaires?: any;
    categorieIds?: any;
}
