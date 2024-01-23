"use client"

import * as React from "react"

import { Button } from "./button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./dropdown-menu"

export default function DropdownMenuRadioGroupDemo({label, items}) {
    const [position, setPosition] = React.useState("bottom")
    const [selectedItem, setSelectedItem] = React.useState(null)


    const handleSelectItem = (item) => {
        setSelectedItem(item)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">{selectedItem || label}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>

                    {
                        items && items.map(item => (
                            <DropdownMenuRadioItem 
                                key={item} 
                                value={item}
                                onSelect={() => handleSelectItem(item)}
                                >{item}</DropdownMenuRadioItem>
                        ))
                    }

                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
