export interface IPaginacao<T = unknown> {
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

// ?page=1&size=15&sort=id,asc
// ?page=1&size=15&sort=id,desc
// ?page=1&size=15&sort=id,asc&sort=nome,asc
// ?page=1&size=15&sort=id,asc&sort=nome,desc
// ?page=1&size=15&sort=id,asc&sort=nome,desc&sort=valor,asc
// ?page=1&size=15&sort=id,asc&sort=nome,desc&sort=valor,desc
// ?page=1&size=15&sort=id,asc&sort=nome,desc&sort=valor,desc&sort=descricao,asc
// ?page=1&size=15&sort=id,asc&sort=nome,desc&sort=valor,desc&sort=descricao,desc
// ?page=1&size=15&sort=id,asc&sort=nome,desc&sort=valor,desc&sort=descricao,desc&sort=ativo,asc
// ?page=1&size=15&sort=id,asc&sort=nome,desc&sort=valor,desc&sort=descricao,desc&sort=ativo,desc
// ?page=1&size=15&sort=id,asc&sort=nome,desc&sort=valor,desc&sort=descricao,desc&sort=ativo,desc&sort=createdAt,asc
// ?page=1&size=15&sort=id,asc&sort=nome,desc&sort=valor,desc&sort=descricao,desc&sort=ativo,desc&sort=createdAt,desc