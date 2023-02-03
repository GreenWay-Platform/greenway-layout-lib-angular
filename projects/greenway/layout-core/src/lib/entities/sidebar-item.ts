export class GWSidebarItem {
    static TYPE_LINK = 0;
    static TYPE_TITLE = 1;

    title: string = '';
    path?: string = '';
    icon?: string = '';
    image?: string = '';
    type?: number = 0;
}
