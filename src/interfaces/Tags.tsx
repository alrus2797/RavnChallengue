interface TagProps{
    name: string
    color: string
    icon: boolean
}

export enum TagColors{
    ANDROID = "green",
    IOS = "white",
    REACT = "blue",
    NODE_JS = "red",
    RAILS = "yellow",
}

export type {TagProps}