import styles from './Information.module.css';

export const Information = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	setField,
}) => {
	const results = () => {
		if (isDraw === true) {
			return 'Ничья';
		}

		if (isDraw === false && isGameEnded === true) {
			return `Победа: ${currentPlayer}`;
		}

		return `Ходит: ${currentPlayer}`;
	};

	const resetButton = () => {
		setCurrentPlayer('✖');
		setIsGameEnded(false);
		setIsDraw(false);
		setField((prev) => prev.map((item) => ''));
	};

	return <InformationLayout results={results} resetButton={resetButton} />;
};

const InformationLayout = ({ results, resetButton }) => (
	<div className={styles.informationContainer}>
		<div className={styles.gameState}>{results()}</div>
		<button className={styles.resetButton} onClick={resetButton}>
			Начать заного
		</button>
	</div>
);
