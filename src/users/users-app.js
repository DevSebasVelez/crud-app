import { RenderButtons } from "./presentation/render-buttons/render-buttons";
import { RenderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 *
 * @param {HTMLDivElement} element
 */
export const UsersApp = async( element ) => {
    await usersStore.loadNextPage();
    element.innerHTML = '';

    RenderTable(element);
    RenderButtons(element);
}