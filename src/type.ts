
export type Menu = {
    data: {
        items: Items[];
        social: Social[];
        text: string;
    }
}
export type Items = {
    href: string;
    label: string;
}
export type Social = {
    href: string;
    icon: string;
    label: string;
}
