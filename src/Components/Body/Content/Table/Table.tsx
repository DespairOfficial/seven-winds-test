import { useEffect, useState } from 'react';
import { getList } from '../../../../http/rowApi';
import { Row } from '../../../../interfaces/Row';
import styles from './Table.style.module.scss';
import Tree from './Tree/Tree';
import { TableService } from './Table.service';
const Table = () => {
	const [rows, setRows] = useState<Row[]>([]);
	const [editingRowId, setEditingRowId] = useState<number>(-1);
	useEffect(() => {
		(async () => {
			const data = await getList();
			setRows(data);
		})();
	}, []);

	function deleteRow(id: number | null) {
		if (id) {
			TableService.deleteRow(rows, setRows, id);
		}
	}
	const updateRow = (
		id: number,
		rowName: string,
		salary: number,
		equipmentCosts: number,
		supportCosts: number,
		estimatedProfit: number
	) => {
		TableService.updateRow({
			state: rows,
			setState: setRows,
			id,
			rowName,
			salary,
			equipmentCosts,
			supportCosts,
			estimatedProfit,
		});
	};
	function addRow(parentId: number | null) {
		TableService.addRow(
			rows,
			setRows,
			parentId,
			editingRowId,
			setEditingRowId
		);
	}
	function createRow(
		parentId: number | null,
		rowName: string,
		salary: number,
		equipmentCosts: number,
		supportCosts: number,
		estimatedProfit: number
	) {
		TableService.createRow(
			rows,
			setRows,
			parentId,
			rowName,
			salary,
			equipmentCosts,
			supportCosts,
			estimatedProfit
		);
	}
	return (
		<div className={styles.main}>
			<div className={styles.nameRow}>
				<div>Уровень</div>
				<div className={styles.longRow}>Наименование работ</div>
				<div>Основная з/п</div>
				<div>Оборудование</div>
				<div>Накладные расходы</div>
				<div>Сметная прибыль</div>
			</div>
			<div>
				<Tree
					treeData={rows}
					depth={0}
					onDelete={deleteRow}
					parentId={null}
					onUpdate={updateRow}
					onAdd={addRow}
					editingRowId={editingRowId}
					setEditingRowId={setEditingRowId}
					onCreate={createRow}
				/>
			</div>
		</div>
	);
};
export default Table;
