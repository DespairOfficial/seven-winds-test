import { Row } from '../../../../../../interfaces/Row';
import styles from './TreeNode.style.module.scss';
import Tree from '../Tree';
import { FileIcon, Trash, Folder } from '../../../../../../Icons';
import { useState } from 'react';

interface TreeNodeProps {
	node: Row;
	depth: number;
	parentId: number | null;
	editingRowId: number;
	setEditingRowId: React.Dispatch<React.SetStateAction<number>>;
	onDelete: (id: number) => void;
	onUpdate: (
		id: number,
		rowName: string,
		salary: number,
		equipmentCosts: number,
		supportCosts: number,
		estimatedProfit: number
	) => void;
	onAdd: (parentId: number | null) => void;
}
const TreeNode = (props: TreeNodeProps) => {
	let {
		node,
		depth,
		parentId,
		editingRowId,
		setEditingRowId,
		onDelete,
		onUpdate,
		onAdd,
	} = props;

	const [rowName, setRowName] = useState<string>(node.rowName);
	const [salary, setSalary] = useState<number>(node.salary);
	const [equipmentCosts, setEquipmentCosts] = useState<number>(
		node.equipmentCosts
	);
	const [supportCosts, setSupportCosts] = useState<number>(node.supportCosts);
	const [estimatedProfit, setEstimatedProfit] = useState<number>(
		node.estimatedProfit
	);

	const [isHovered, setIsHovered] = useState<boolean>(false);

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(node.id===0){
		}
		onUpdate(
			node.id,
			rowName,
			salary,
			equipmentCosts,
			supportCosts,
			estimatedProfit
		);
		setEditingRowId(-1);
	};

	depth += 1;
	const { child } = node;
	return (
		<>
			<div
				className={styles.main}
				onDoubleClick={() => {
					setEditingRowId(node.id);
				}}
			>
				<div className={styles.optionsWrapper}>
					<div
						className={styles.options}
						style={{ paddingLeft: `${(depth - 1) * 2}rem` }}
					>
						<div
							className={styles.icons}
							onMouseEnter={() => {
								setIsHovered(true);
							}}
							onMouseLeave={() => {
								setIsHovered(false);
							}}
						>
							{depth == 1 && (
								<div
									className={styles.option}
									onClick={() => {
										onAdd(parentId);
									}}
								>
									<Folder color={'#5f98f5'} />
									<div className={styles.level}>1</div>
								</div>
							)}

							{depth == 2 && (
								<div
									className={styles.option}
									onClick={() => {
										onAdd(parentId);
									}}
								>
									<Folder color={'#95ffac'} />
									<div className={styles.level}>2</div>
								</div>
							)}

							{depth < 2 && isHovered && (
								<div
									className={styles.option}
									onClick={() => {
										onAdd(node.id);
									}}
								>
									<Folder color={'#95ffac'} />
									<div className={styles.level}>2</div>
								</div>
							)}
							{depth == 3 && (
								<div
									className={styles.option}
									onClick={() => {
										onAdd(parentId);
									}}
								>
									<FileIcon />
								</div>
							)}

							{depth < 3 && isHovered && (
								<div
									className={styles.option}
									onClick={() => {
										onAdd(node.id);
									}}
								>
									<FileIcon />
								</div>
							)}

							{isHovered && (
								<div
									className={styles.option}
									onClick={() => {
										onDelete(node.id);
									}}
								>
									<Trash />
								</div>
							)}
						</div>
					</div>
				</div>

				<form
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							submitForm(e);
						}
					}}
					className={
						styles.form +
						' ' +
						(editingRowId === node.id && styles.editable)
					}
				>
					<input
						className={styles.longRow}
						value={rowName}
						disabled={editingRowId !== node.id}
						onChange={(e) => {
							setRowName(e.target.value);
						}}
					></input>
					<input
						value={salary}
						disabled={editingRowId !== node.id}
						onChange={(e) => {
							setSalary(parseInt(e.target.value));
						}}
					></input>
					<input
						value={equipmentCosts}
						disabled={editingRowId !== node.id}
						onChange={(e) => {
							setEquipmentCosts(parseInt(e.target.value));
						}}
					></input>

					<input
						value={supportCosts}
						disabled={editingRowId !== node.id}
						onChange={(e) => {
							setSupportCosts(parseInt(e.target.value));
						}}
					></input>

					<input
						value={estimatedProfit}
						disabled={editingRowId !== node.id}
						onChange={(e) => {
							setEstimatedProfit(parseInt(e.target.value));
						}}
					></input>
				</form>
			</div>
			<Tree
				treeData={child}
				depth={depth}
				parentId={node.id}
				editingRowId={editingRowId}
				setEditingRowId={setEditingRowId}
				onDelete={onDelete}
				onUpdate={onUpdate}
				onAdd={onAdd}
			/>
		</>
	);
};
export default TreeNode;
