// countResult.js для теста Люшера
export default function countResult(selectedColors) {
	// 1. Проверка входных данных
	if (!selectedColors || selectedColors.length !== 8) {
		throw new Error('Для теста Люшера требуется 8 цветов');
	}

	// 2. Основные параметры интерпретации
	const colorMeanings = {
		yellow: { energy: 2, stress: -1, meaning: 'оптимизм, активность' },
		blue: { energy: 1, stress: -2, meaning: 'спокойствие, удовлетворенность' },
		green: { energy: 1, stress: 0, meaning: 'уверенность, стабильность' },
		gray: { energy: -1, stress: 2, meaning: 'нейтральность, усталость' },
		black: { energy: -2, stress: 3, meaning: 'тревога, протест' },
		red: { energy: 3, stress: 1, meaning: 'возбуждение, агрессия' },
		brown: { energy: 0, stress: 1, meaning: 'чувственность, физический комфорт' },
		'dark-red': { energy: 2, stress: 2, meaning: 'сильное возбуждение, напряжение' },
	};

	// 3. Анализ позиций
	const analysis = {
		primaryNeeds: selectedColors.slice(0, 2), // Истинные стремления
		currentState: selectedColors.slice(2, 4), // Актуальное состояние
		neutralColors: selectedColors.slice(4, 6), // Безразличные цвета
		rejectedColors: selectedColors.slice(6, 8), // Подавляемые потребности
	};

	// 4. Расчет показателей
	let totalEnergy = 0;
	let totalStress = 0;
	const stressFactors = [];

	selectedColors.forEach((color, position) => {
		const colorData = colorMeanings[color];
		totalEnergy += colorData.energy;
		totalStress += colorData.stress;

		// Особые случаи
		if (position < 2 && ['gray', 'black', 'dark-red'].includes(color)) {
			stressFactors.push(`Тревожный цвет ${color} в приоритетах`);
		}
		if (position >= 6 && ['blue', 'green', 'yellow'].includes(color)) {
			stressFactors.push(`Подавленная позитивная потребность: ${color}`);
		}
	});

	// 5. Определение общего состояния
	let emotionalState;
	if (totalStress > 10) emotionalState = 'Острое стрессовое состояние';
	else if (totalStress > 5) emotionalState = 'Эмоциональное напряжение';
	else if (totalEnergy > 5) emotionalState = 'Активное, энергичное состояние';
	else emotionalState = 'Сбалансированное состояние';

	// 6. Формирование результатов
	const result = {
		emotionalState,
		energyLevel: totalEnergy,
		stressLevel: totalStress,
		stressFactors: stressFactors.length ? stressFactors : ['Нет явных факторов стресса'],
		colorInterpretations: selectedColors.map((color) => ({
			color,
			position: selectedColors.indexOf(color) + 1,
			meaning: colorMeanings[color].meaning,
		})),
		recommendations: getRecommendations(totalEnergy, totalStress),
	};

	return result;
}

function getRecommendations(energy, stress) {
	const recommendations = [];

	if (stress > 5) {
		recommendations.push(
			'Техники релаксации (дыхательные упражнения, медитация)',
			'Снижение нагрузки в ближайшие дни'
		);
	}

	if (energy < 0) {
		recommendations.push('Умеренная физическая активность', 'Прогулки на свежем воздухе');
	}

	if (energy > 5) {
		recommendations.push(
			'Направьте энергию в продуктивное русло',
			'Спортивная активность для снятия напряжения'
		);
	}

	return recommendations.length ? recommendations : ['Продолжайте текущий режим'];
}
