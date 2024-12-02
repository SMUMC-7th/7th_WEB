import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/api";

function useLoginMutation() {
  return useMutation({
    mutationFn: login,
  });
}

export default useLoginMutation;
