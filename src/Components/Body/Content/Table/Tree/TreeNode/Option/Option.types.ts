export interface OptionProps {
	onClickId: number | null;
	onClickMethod: (id: number | null) => void;
	Icon: ({ color }: { color: string }) => JSX.Element;
	color: string;
	level?: number
}
