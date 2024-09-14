import { create } from "zustand";
export interface BreadcrumbItemType {
  key: string;
  title: React.ReactNode;
}
interface StoreType {
  breadcrumbItems: BreadcrumbItemType[];
  addBreadcrumbItems: (item: BreadcrumbItemType) => void;
  setBreadcrumbItems: (breadcrumbItems: BreadcrumbItemType[]) => void;
}
const useStore = create<StoreType>((set) => ({
  breadcrumbItems: [],
  addBreadcrumbItems: (item) =>
    set((store) => ({ breadcrumbItems: [...store.breadcrumbItems, item] })),
  setBreadcrumbItems: (breadcrumbItems) =>
    set(() => ({ breadcrumbItems: breadcrumbItems })),
}));
export default useStore;
