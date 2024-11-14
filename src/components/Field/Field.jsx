import styles from './Field.module.css';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const Field = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
	field,
	setField,
}) => {
	const squareState = (value, index) => {
		if (value.length !== 0 || isGameEnded) {
			return;
		}

		const nextField = field.map((item, itemIndex) => {
			if (itemIndex === index) {
				return currentPlayer;
			}

			return item;
		});

		const hasEmptySquares = nextField.some((item) => item === '');

		if (!hasEmptySquares) {
			setIsGameEnded(true);
			setIsDraw(true);
		}

		const isWinner = WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => nextField[index] === currentPlayer),
		);

		if (isWinner) {
			setIsGameEnded(true);
		} else {
			setCurrentPlayer(currentPlayer === '❌' ? '⭕' : '❌');
		}

		setField(nextField);
	};

	return <FieldLayout field={field} squareState={squareState} />;
};

const FieldLayout = ({ field, squareState }) => (
	<div className={styles.fieldContainer}>
		<div className={styles.squareContainer}>
			{field.map((value, index) => (
				<div
					className={styles.square}
					key={index}
					onClick={() => {
						squareState(value, index);
					}}
				>
					{value}
				</div>
			))}
		</div>
	</div>
);
