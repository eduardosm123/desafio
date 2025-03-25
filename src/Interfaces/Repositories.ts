import { RepositoryItemList } from "../Types/Repository";

export interface IRepositoryList {
  data?: RepositoryItemList[];
  pages: number;
  totalPages: number;
  sort: string;
  order: string;
}
