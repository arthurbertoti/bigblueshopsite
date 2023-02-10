export interface IPaginacao<T> {
    page: number
    size: number
    totalPages: number
    totalElements: number
    sort: string
    count: number
    next: string
    previous: string
    results: T[]
}
/*
?page=1&size=15&sort=id,asc
totalPages*/