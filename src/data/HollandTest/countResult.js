import { personalityType } from './personalityTypes';

export default function СountResult(result) {
  let typeCounts = {
    realisticType: 0,
    intellectualType: 0,
    socialType: 0,
    conventionalType: 0,
    enterprisingType: 0,
    artisticType: 0,
  };

  const typeMap = {
    'Реалистический тип': 'realisticType',
    'Интеллектуальный тип': 'intellectualType',
    'Социальный тип': 'socialType',
    'Конвенциальный тип': 'conventionalType',
    'Предприимчивый тип': 'enterprisingType',
    'Артистический тип': 'artisticType',
  };

  function raiseValue(typeName) {
    const typeKey = typeMap[typeName];
    if (typeKey) {
      typeCounts[typeKey] += 1;
    }
  }

  for (const key in personalityType) {
    personalityType[key].forEach((element) => {
      if (result.includes(element)) {
        raiseValue(key);
      }
    });
  }

  let renamedTypeCounts = {};
  for (const [rusKey, engKey] of Object.entries(typeMap)) {
    renamedTypeCounts[rusKey] = typeCounts[engKey];
  }

  localStorage.setItem('typeCounts', JSON.stringify(renamedTypeCounts));

  return typeCounts;
}
