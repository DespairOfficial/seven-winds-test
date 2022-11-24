import { UpdateRowResultDto } from '../../../../interfaces/UpdateRowResult.dto';
import { createRow, deleteRow, updateRow } from '../../../../http/rowApi';
import { Row } from '../../../../interfaces/Row';
import {  UpdateRowParams } from './Table.types';

export const TableService = {
	async deleteRow(
		state: Row[],
		setState: React.Dispatch<React.SetStateAction<Row[]>>,
		id: number
	): Promise<void> {
		// const rowsCopy: Row[] = JSON.parse(JSON.stringify(rows)) // twice slower
		const data: UpdateRowResultDto = await deleteRow(id);
		let { copyOfState, parentOfUpdated } = mutateCopyAndGetParent(
			data,
			state
		);
		parentOfUpdated.child?.map((item, indexOfDeletedItem) => {
			if (item.id === id) {
				parentOfUpdated.child.splice(indexOfDeletedItem, 1);
			}
		});
		setState(copyOfState);
	},

	async updateRow( params: UpdateRowParams
	): Promise<void> {
		const data: UpdateRowResultDto = await updateRow(params.id, {
			...params,
			machineOperatorSalary: 0,
			mainCosts: 0,
			materials: 0,
			mimExploitation: 0,
			overheads: 0,
		});
		const { copyOfState, parentOfUpdated } = mutateCopyAndGetParent(
			data,
			params.state,
		);

		let currentElement = parentOfUpdated?.child
			? parentOfUpdated.child
			: copyOfState;
		for (let i = 0; i < currentElement.length; i++) {
			if (currentElement[i].id === params.id) {
				currentElement[i] = {
					...currentElement[i],
					...data.current,
				};
			}
		}
		params.setState(() => {
			return copyOfState;
		});
	},

	async addRow(
		state: Row[],
		setState: React.Dispatch<React.SetStateAction<Row[]>>,
		parentId: number | null,
		editingRowId: number,
		setEditingRowId: React.Dispatch<React.SetStateAction<number>>
	): Promise<void> {
		const newRow = {
			equipmentCosts: 0,
			estimatedProfit: 0,
			machineOperatorSalary: 0,
			mainCosts: 0,
			materials: 0,
			mimExploitation: 0,
			overheads: 0,
			parentId: 0,
			rowName: '',
			salary: 0,
			supportCosts: 0,
			child: [] as Row[],
			id: 0,
			total: 0,
		};
		if (parentId === null) {
			return;
		}
		let rowsCopy = [...state];
		let parentOfAdded: Row = {} as Row; // finding parent of added element in copy

		const findInRows = (rows: Row[]) => {
			for (let i = 0; i < rows.length; i++) {
				if (rows[i].child) {
					findInRows(rows[i].child);
				}
				if (rows[i].id === parentId) {
					parentOfAdded = rows[i];
					break;
				}
			}
		};
		findInRows(rowsCopy);
		parentOfAdded.child.push(newRow);
		setState(rowsCopy);
		setEditingRowId(0);
	},
	async createRow(
		state: Row[],
		setState: React.Dispatch<React.SetStateAction<Row[]>>,
		parentId: number | null,
		rowName: string,
		salary: number,
		equipmentCosts: number,
		supportCosts: number,
		estimatedProfit: number
	) {
		const data: UpdateRowResultDto = await createRow({
			machineOperatorSalary: 0,
			mainCosts: 0,
			materials: 0,
			mimExploitation: 0,
			overheads: 0,
			parentId,
			rowName,
			salary,
			equipmentCosts,
			supportCosts,
			estimatedProfit
		});
		let { copyOfState, parentOfUpdated } = mutateCopyAndGetParent(data, state)
		let currentElement = parentOfUpdated?.child
			? parentOfUpdated.child
			: copyOfState;
		for (let i = 0; i < currentElement.length; i++) {
			if (currentElement[i].id === data.current.id) {
				currentElement[i] = {
					...currentElement[i],
					...data.current,
				};
			}
		}
		setState(copyOfState)
	},
};

function mutateCopyAndGetParent(
	data: UpdateRowResultDto,
	state: Row[],
) {
	let copyOfState: Row[] = [...state];

	let parentOfUpdated: Row = {} as Row;

	function handleChangedArray(rows: Row[], indexOfChangedItem: number) {
		if (indexOfChangedItem < 0) {
			return;
		}
		for (let j = 0; j < rows.length; j++) {
			if (rows[j].id === data.changed[indexOfChangedItem].id) {
				rows[j] = {
					...rows[j],
					...data.changed[indexOfChangedItem],
				};
				parentOfUpdated = { ...rows[j] };
				handleChangedArray(rows[j].child, indexOfChangedItem - 1);
			}
		}
	}

	handleChangedArray(copyOfState, data.changed.length - 1);

	return { copyOfState, parentOfUpdated };
}
