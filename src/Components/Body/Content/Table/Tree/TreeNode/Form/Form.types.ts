import { Row } from './../../../../../../../interfaces/Row';
export interface FormProps {
	node: Row;
	parentId: number | null;
	editingRowId: number;
	setEditingRowId: React.Dispatch<React.SetStateAction<number>>;
	onUpdate: (
		id: number,
		rowName: string,
		salary: number,
		equipmentCosts: number,
		supportCosts: number,
		estimatedProfit: number
	) => void;
	onCreate: (
		parentId: number | null,
		rowName: string,
		salary: number,
		equipmentCosts: number,
		supportCosts: number,
		estimatedProfit: number
	) => void;
}
