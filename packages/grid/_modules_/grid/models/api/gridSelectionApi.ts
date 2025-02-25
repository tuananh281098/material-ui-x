import { GridRowId, GridRowModel } from '../gridRows';

/**
 * The selection API interface that is available in the grid [[apiRef]].
 */
export interface GridSelectionApi {
  /**
   * Change the selection state of a row.
   * @param {GridRowId} id The id of the row.
   * @param {boolean} isSelected Pass `false` to unselect a row. Default is `true`.
   * @param {boolean} resetSelection Whether to reset the already selected rows or not. Default is `false`.
   */
  selectRow: (id: GridRowId, isSelected?: boolean, resetSelection?: boolean) => void;
  /**
   * Change the selection state of multiple rows.
   * @param {GridRowId[]} ids The row ids.
   * @param {boolean} isSelected The new selection state. Default is `true`.
   * @param {boolean} resetSelection Whether to reset the already selected rows or not. Default is `false`.
   */
  selectRows: (ids: GridRowId[], isSelected?: boolean, resetSelection?: boolean) => void;
  /**
   * Determines if a row is selected or not.
   * @param {GridRowId} id The id of the row.
   * @returns {boolean} A boolean indicating if the row is selected.
   */
  isRowSelected: (id: GridRowId) => boolean;
  /**
   * Returns an array of the selected rows.
   * @returns {Map<GridRowId, GridRowModel>} A `Map` with the selected rows.
   */
  getSelectedRows: () => Map<GridRowId, GridRowModel>;
  /**
   * Updates the selected rows to be those passed to the `rowIds` argument.
   * Any row already selected will be unselected.
   * @param {GridRowId[]} rowIds The row ids to select.
   */
  setSelectionModel: (rowIds: GridRowId[]) => void;
}
