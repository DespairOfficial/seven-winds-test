import { useEffect, useState } from 'react';
import { getList } from '../../../../http/rowApi';
import { Row } from '../../../../interfaces/Row';
import styles from './Table.style.module.scss';
import Tree from './Tree/Tree';
import { TableService } from './Table.service';
const Table = () => {
	const [rows, setRows] = useState<Row[]>([]);
	const [editingRowId, setEditingRowId] = useState<number>(-1);
	const [isFetching, setIsFetching] = useState<boolean>(false);
	useEffect(() => {
		setIsFetching(true);
		(async () => {
			const data = await getList();
			setRows(data);
			setIsFetching(false);
		})();
	}, []);

	function deleteRow(id: number | null) {
		if (id) {
			setIsFetching(true);
			TableService.deleteRow(rows, setRows, id);
			setIsFetching(false);
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
		setIsFetching(true);
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
		setIsFetching(false);
	};
	function addRow(parentId: number | null) {
		setIsFetching(true);
		TableService.addRow(rows, setRows, parentId, setEditingRowId);
		setIsFetching(false);
	}
	function createRow(
		parentId: number | null,
		rowName: string,
		salary: number,
		equipmentCosts: number,
		supportCosts: number,
		estimatedProfit: number
	) {
		setIsFetching(true);
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
		setIsFetching(false);
	}
	return (
		<div className={styles.main}>
			<div className={styles.nameRow}>
				<div className={styles.shortRow}>Уровень</div>
				<div className={styles.longRow}>Наименование работ</div>
				<div>Основная з/п</div>
				<div>Оборудование</div>
				<div>Накладные расходы</div>
				<div>Сметная прибыль</div>
			</div>
			<div className={styles.treeWrapper}>
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
					isFetching={isFetching}
				/>
			</div>
		</div>
	);
};
export default Table;
