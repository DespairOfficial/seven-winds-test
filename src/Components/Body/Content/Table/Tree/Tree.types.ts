import { Row } from '../../../../../interfaces/Row';

export interface TreeProps {
	treeData: Row[];
	depth: number;
	parentId: number | null;
	editingRowId: number;
	setEditingRowId: React.Dispatch<React.SetStateAction<number>>;
	isFetching: boolean;
	onDelete: (id: number | null) => void;
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
	onAdd: (parentId: number | null) => void;
}
