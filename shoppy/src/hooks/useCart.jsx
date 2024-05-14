import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const cartQuery = useQuery(
    {
      queryKey: ["carts", uid || ""],
      queryFn: () => getCart(uid),
      enabled: !!uid,
    }
  );

  const addOrUpdateItem = useMutation({
    mutationFn: (product) => addOrUpdateToCart(uid, product),
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
    // 불필요하게 모든 cart들이 로딩되는 것을 방지함.
  });

  const removeItem = useMutation({
    mutationFn: (id) => removeFromCart(uid, id),
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  //   const productsQuery = useQuery({
  //     queryKey: ["products"],
  //     queryFn: getProducts,
  //     staleTime: 1000 * 60,
  //   });

  return { cartQuery, addOrUpdateItem, removeItem };
}
