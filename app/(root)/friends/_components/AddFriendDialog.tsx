"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { DialogHeader } from "@/components/ui/dialog";

type Props = {};

const addFriendFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field can't be empty" })
    .email("Please enter a valid email"),
});

const AddFriendDialog = (props: Props) => {
  const form = useForm<z.infer<typeof addFriendFormSchema>>({
    resolver: zodResolver(addFriendFormSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <DialogTrigger>
              <UserPlus/>
            </DialogTrigger>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add friend</p>
        </TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Add friend
          </DialogTitle>
          <DialogDescription>
            send request to connect with your friends
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddFriendDialog;
