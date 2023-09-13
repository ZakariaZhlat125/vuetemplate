export const useMainToken = () => useState(() => []);
export const useRefreshMainToken = () => useState(() => []);
export const useToken = () => useState(() => []);
export const useMenus = () => useState(() => []);
export const useMenusFooter = () => useState(() => []);
export const useCurrency = () => useState(() => []);
export const useUserInfo = () => useState(() => []);
export const useAccountType = () => useState(() => []);
export const useLang = () => useState(() => 'en');
export const useCart = () => useState(() => ({
  items: new Array(),
  totalQty: 0,
  totalPrice: 0
}));
export const useAuth = () => useState(() => ({
  isAuthenticated: false
}));
export const useUserId = () => useState(() => ({
  UserId: null
}));
export const useImageLouded = () => useState(() => ({
  loaded: false
}));
export const useShowLogin = () => useState(() => ({
  show: false
}));
