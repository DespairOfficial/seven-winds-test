import styles from './TreeNode.style.module.scss';
import Tree from '../Tree';
import { FileIcon, Trash, Folder } from '../../../../../../Icons';
import { useState } from 'react';
import { TreeNodeProps } from './TreeNode.types';
import Option from './Option';
import Input from './Input';

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
		onCreate,
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
		if (node.id === 0) {
			onCreate(
				parentId,
				rowName,
				salary,
				equipmentCosts,
				supportCosts,
				estimatedProfit
			);
		} else {
			onUpdate(
				node.id,
				rowName,
				salary,
				equipmentCosts,
				supportCosts,
				estimatedProfit
			);
		}
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
								<Option
									onClickMethod={onAdd}
									Icon={Folder}
									onClickId={parentId}
									color={'#5f98f5'}
									level={1}
								/>
							)}

							{depth == 2 && (
								<Option
									onClickMethod={onAdd}
									Icon={Folder}
									onClickId={parentId}
									color={'#95ffac'}
									level={2}
								/>
							)}

							{depth < 2 && isHovered && (
								<Option
									onClickMethod={onAdd}
									Icon={Folder}
									onClickId={node.id}
									color={'#95ffac'}
									level={2}
								/>
							)}
							{depth == 3 && (
								<Option
									onClickMethod={onAdd}
									Icon={FileIcon}
									onClickId={parentId}
									color={'#7890b2'}
								/>
							)}

							{depth < 3 && isHovered && (
								<Option
									onClickMethod={onAdd}
									Icon={FileIcon}
									onClickId={node.id}
									color={'#7890b2'}
								/>
							)}

							{isHovered && (
								<Option
									onClickMethod={onDelete}
									Icon={Trash}
									onClickId={node.id}
									color={'#df4444'}
								/>
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
					<Input
						type="text"
						state={rowName}
						setState={setRowName}
						editingRowId={editingRowId}
						nodeId={node.id}
					/>
					<Input
						type="number"
						state={salary}
						setState={setSalary}
						editingRowId={editingRowId}
						nodeId={node.id}
					/>
					<Input
						type="number"
						state={equipmentCosts}
						setState={setEquipmentCosts}
						editingRowId={editingRowId}
						nodeId={node.id}
					/>
					<Input
						type="number"
						state={supportCosts}
						setState={setSupportCosts}
						editingRowId={editingRowId}
						nodeId={node.id}
					/>
					<Input
						type="number"
						state={estimatedProfit}
						setState={setEstimatedProfit}
						editingRowId={editingRowId}
						nodeId={node.id}
					/>
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
				onCreate={onCreate}
			/>
		</>
	);
};
export default TreeNode;
