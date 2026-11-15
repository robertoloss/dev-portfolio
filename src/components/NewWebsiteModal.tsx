import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"

const STORAGE_KEY = "hideNewWebsiteModal"
const NEW_SITE_URL = "https://robertoloss.com"

export default function NewWebsiteModal() {
  const [open, setOpen] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "true") setOpen(true)
    } catch {
      setOpen(true)
    }
  }, [])

  function handleCheckedChange(checked: boolean) {
    setDontShowAgain(checked)
    try {
      if (checked) localStorage.setItem(STORAGE_KEY, "true")
      else localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* storage unavailable: preference just won't persist */
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-2xl rounded-lg p-8 sm:p-12 gap-8">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl">I have a new website!</DialogTitle>
          <DialogDescription className="pt-4 text-lg sm:text-xl text-foreground">
            Check out my new website{" "}
            <a
              href={NEW_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              robertoloss.com
            </a>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <div className="flex items-center space-x-3 pt-4">
            <Checkbox
              id="dont-show-again"
              className="h-5 w-5"
              checked={dontShowAgain}
              onCheckedChange={(c) => handleCheckedChange(c === true)}
            />
            <label
              htmlFor="dont-show-again"
              className="text-base text-muted-foreground cursor-pointer select-none"
            >
              Don't show this again
            </label>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
