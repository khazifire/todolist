export interface Entry {
    id: string;
    title: string;
    description: string;
    date: string;
    AmountOfTimeWorked: any;
    pictureUrl: string;
    UserName: string;
    email: string;

}

export function toEntry(doc): Entry {
    return { id: doc.id, ...doc.data() }; 
}