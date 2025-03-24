export interface IRepositoryList {
    data?: RepositoryItemList[] 
    pages: number,
    totalPages: number,
    sort: string,
    order: string
}

export type RepositoryItemList = {
    id: number,
    name: string,
    updated_at: string,
    stargazers_count: number
}
  