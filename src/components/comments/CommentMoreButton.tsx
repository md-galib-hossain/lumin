import { CommentData } from "@/lib/types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontalIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import DeleteCommentDialogue from "./DeleteCommentDialogue";

interface CommentMoreButtonProps {
    comment : CommentData;
    className? : string
} 
export default function CommentMoreButton({comment,className}: CommentMoreButtonProps){
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
      <DeleteCommentDialogue
        open={showDeleteDialog}
        onClose={() => setShowdeleteDialog(false)}
        comment={comment}
      />
    </>
  );
}