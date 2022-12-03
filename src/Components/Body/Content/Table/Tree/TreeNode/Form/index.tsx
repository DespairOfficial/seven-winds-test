import { FormProps } from './Form.types';
import styles from './Form.styles.module.scss';
import { useState } from 'react';
import Input from './Input';
const Form = ({ node, editingRowId, setEditingRowId, onUpdate, onCreate, parentId }: FormProps) => {
	const [rowName, setRowName] = useState<string>(node.rowName);
	const [salary, setSalary] = useState<number>(node.salary);
	const [equipmentCosts, setEquipmentCosts] = useState<number>(
		node.equipmentCosts
	);
	const [supportCosts, setSupportCosts] = useState<number>(node.supportCosts);
	const [estimatedProfit, setEstimatedProfit] = useState<number>(
		node.estimatedProfit
	);

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
	return (
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
	);
};
export default Form;
