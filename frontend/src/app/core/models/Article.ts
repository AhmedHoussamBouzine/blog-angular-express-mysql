export interface Article {
    id?: number;
    title: string;
    image: string;
    contenu: Text;
    createdAt?: Date;
    updatedAt?: Date;
    published: Boolean;
    utilisateurId: number;
}