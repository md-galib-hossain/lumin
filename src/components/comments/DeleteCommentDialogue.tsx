import { CommentData } from "@/lib/types";
import { useDeleteCommentMutation } from "./mutations";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import LoadingButton from "../LoadingButton";
import { Button } from "../ui/button";

interface DeleteCommentDialogueProps {
    comment : CommentData,
    open : boolean,
    onClose: ()=> void
}

export default function DeleteCommentDialogue({comment,open,onClose}: DeleteCommentDialogueProps){
const mutation = useDeleteCommentMutation()

const handleOpenChange = (open: boolean) => {
    if (!open || !mutation.isPending) {
      onClose();
    }}
return   <Dialog open={open} onOpenChange={handleOpenChange}>
<DialogContent>
  <DialogHeader>
    <DialogTitle>Delete comment?</DialogTitle>
    <DialogDescription>
      Are you sure want to delete this comment ? This action can not be
      undone.
    </DialogDescription>
  </DialogHeader>
  <DialogFooter>
    <LoadingButton
      variant="destructive"
      onClick={() => mutation.mutate(comment.id, { onSuccess: onClose })}
      loading={mutation.isPending}
    >
      Delete
    </LoadingButton>
    <Button variant={"outline"} onClick={onClose} disabled={mutation.isPending}>Cancel</Button>
  </DialogFooter>
</DialogContent>
</Dialog>

}