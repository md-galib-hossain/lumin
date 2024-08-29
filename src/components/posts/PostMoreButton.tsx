import { PostData } from "@/lib/types";
import { useState } from "react";
import DeletePostDialog from "./DeletePostDialog";

import { Button } from "../ui/button";
import { MoreHorizontalIcon, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface PostMoreButtonProps {
  post: PostData;
  className?: string;
}
export default function PostMoreButton({
  post,
  className,
}: PostMoreButtonProps) {
  const [showDeleteDialog, setShowdeleteDialog] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant={"ghost"} className={className}>
            <MoreHorizontalIcon className="size-5 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
           <DropdownMenuItem onClick={()=> setShowdeleteDialog(true)}>
            <span className="flex items-center gap-3 text-destructive"><Trash2 className="size-4"/>Delete</span>
            </DropdownMenuItem> 
        </DropdownMenuContent>
      </DropdownMenu>
      <DeletePostDialog
        open={showDeleteDialog}
        onClose={() => setShowdeleteDialog(false)}
        post={post}
      />
    </>
  );
}
