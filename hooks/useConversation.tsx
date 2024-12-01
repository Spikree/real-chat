import { useParams } from "next/navigation";
import { useMemo } from "react";

export const useConversation = () => {
  const params = useParams();

  const conversationId = useMemo(() => {
    return params?.conversationId || "";
  }, [params?.conversationId]);

  const isActive = useMemo(() => !!conversationId, [conversationId]);

  return {
    isActive,
    conversationId
  }
};
