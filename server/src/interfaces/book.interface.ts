export interface IBook {
    id: string;
    title: string;
    author: string;
    isbn: string;
    description: string;
    page_count: number;
}

export interface ICreateBookDto extends Pick<IBook, 'title' | 'author' | 'description' | 'isbn' | 'page_count'> {
    title: string
    author: string
    description: string
    isbn: string
    page_count: number
    owner: string
    section: string[]
}   

export interface IUpdateBookDto extends Pick<IBook, 'title' | 'author' | 'description' | 'isbn' | 'page_count'> {
    title: string
    author: string
    description: string
    isbn: string
    page_count: number
    owner: string
    section: string[]
}   