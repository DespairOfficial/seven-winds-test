import { Row } from './../../../../../../../interfaces/Row';
export interface OptionsProps {
	depth: number;
	node: Row;
	isHovered: boolean;
	parentId: number | null;
	onAdd: (id: number | null) => void;
	onDelete: (id: number | null) => void;
}
