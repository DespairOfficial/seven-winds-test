import { Row } from '../../../../interfaces/Row';

export type UpdateRowParams = {
	state: Row[];
	setState: React.Dispatch<React.SetStateAction<Row[]>>;
	id: number;
	rowName: string;
	salary: number;
	equipmentCosts: number;
	supportCosts: number;
	estimatedProfit: number;
}
