import { Card } from "@/components/ui/card";
import React from "react";

type Props = React.PropsWithChildren<{}>;

const ConversationContainer = ({ children }: Props) => {
  return (
    <Card className="w-full h-[calc(100svh-32px)] lg:h-full p-2 flex flex-col justify-center items-center gap-2">
      Select a conversation to get started
    </Card>
  );
};

export default ConversationContainer;
