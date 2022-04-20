export interface ProductInterface {
    createdAt?: number;
    name: string;
    avatar: string;
    developerEmail: string;
    price: string;
    id: string;
    category: string;
    description: string;
}

export interface CategoryInterface {
    name: string;
    createdAt: string;
    id: string;
}

export interface ProductProps {
    key: string;
    name: string;
    avatar: string;
    price: string;
    id: string;
}


    

