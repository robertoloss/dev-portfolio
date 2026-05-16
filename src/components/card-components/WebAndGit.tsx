import { PortableText, PortableTextComponents } from "@portabletext/react"
import { Button } from "../ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "../ui/dialog"
import WGIcon from "./WGIcon"
import { Project } from "@/sanity-types"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Link } from "react-router-dom"

type Props = {
	project: Project
}

export default function WebAndGit({ project } : Props) {
  const [ open, setOpen ] = useState(false)

  const components : PortableTextComponents = {
    block: {
      normal: ({ children }) => <h1 className="text-md font-extralight leading-7">{ children }</h1>
    },
    marks: {
      link: ({value, children}) => {
        return (
          <a href={value?.href} target='_blank' className="underline">
            {children}
          </a>
        )
      },
    },
  }

  const buttonProps = {
    className: "rounded-[4px] min-w-[80px]"
  }


	return (
		<div className="flex flex-row gap-4 w-fit">
      {(!project.website && !project.popup) &&
        <div className="min-h-10"/>
      }
			{(project.website && !project.popup) &&
        <WGIcon type='web' link={project.website} />
      }
      {project.popup && 
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <WGIcon type='web' link=""/>
          </DialogTrigger>
          <DialogContent
            className={cn(
              "w-full sm:max-w-[80%] xl:max-w-[50%] max-h-[80%] overflow-auto"
            )}
          >
            <DialogHeader
              className={cn(
                "p-4"
              )}
            >
              <DialogTitle className="mb-4">
              </DialogTitle>
              <div className="flex flex-col gap-y-2 text-left">
                <PortableText components={components} value={project.popupCopy!} />
              </div>
            </DialogHeader>
            <DialogFooter
              className={cn(
                "flex flex-row sm:justify-center justify-center",
                "gap-x-4"
              )}
            >
              <Button
                onClick={()=>setOpen(false)}
                variant="outline"
                { ...buttonProps }
              >
                {project.website ? "Cancel" : "Close"}
              </Button>
              {project.website &&
                <Link target="_blank" to={project.website!}>
                  <Button
                    { ...buttonProps }
                  >
                    Go
                  </Button>
                </Link>
              }
            </DialogFooter>
          </DialogContent>
        </Dialog>
      }
			{project.github && <WGIcon type='git' link={project.github} />}
		</div>
	) 
}
