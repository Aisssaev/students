import {Separator} from "@radix-ui/react-select";
import {ScrollArea} from "@radix-ui/react-scroll-area";
import React from "react";

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function TasksView() {
    return (
        <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
                {tags.map((tag) => (
                    <React.Fragment key={tag}>
                        <div className="text-sm">{tag}</div>
                        <Separator className="my-2" />
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    )
}