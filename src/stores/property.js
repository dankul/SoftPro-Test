import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const usePropertyStore = defineStore('location', () => {
	const property = ref([
		{
			'id': '1',
			'name': 'Wide Loft 1',
			'description': 'Spacious apartment number 1.',
			'price': 99,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.857034, 50.201036]}
		},
		{
			'id': '2',
			'name': 'Wide Loft 2',
			'description': 'Spacious apartment number 2.',
			'price': 135,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.272272, 50.288603]}
		},
		{
			'id': '3',
			'name': 'Wide Loft 3',
			'description': 'Spacious apartment number 3.',
			'price': 138,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.322386, 50.293482]}
		},
		{
			'id': '4',
			'name': 'Wide Loft 4',
			'description': 'Spacious apartment number 4.',
			'price': 104,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.404122, 50.131761]}
		},
		{
			'id': '5',
			'name': 'Wide Loft 5',
			'description': 'Spacious apartment number 5.',
			'price': 147,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.801925, 50.579997]}
		},
		{
			'id': '6',
			'name': 'Wide Loft 6',
			'description': 'Spacious apartment number 6.',
			'price': 109,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.352179, 50.2344]}
		},
		{
			'id': '7',
			'name': 'Wide Loft 7',
			'description': 'Spacious apartment number 7.',
			'price': 91,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.813215, 50.345198]}
		},
		{
			'id': '8',
			'name': 'Wide Loft 8',
			'description': 'Spacious apartment number 8.',
			'price': 113,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.574458, 50.747416]}
		},
		{
			'id': '9',
			'name': 'Wide Loft 9',
			'description': 'Spacious apartment number 9.',
			'price': 158,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.275687, 50.262916]}
		},
		{
			'id': '10',
			'name': 'Wide Loft 10',
			'description': 'Spacious apartment number 10.',
			'price': 160,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.230533, 50.185654]}
		},
		{
			'id': '11',
			'name': 'Wide Loft 11',
			'description': 'Spacious apartment number 11.',
			'price': 96,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.528687, 50.235515]}
		},
		{
			'id': '12',
			'name': 'Wide Loft 12',
			'description': 'Spacious apartment number 12.',
			'price': 111,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.45172, 50.585923]}
		},
		{
			'id': '13',
			'name': 'Wide Loft 13',
			'description': 'Spacious apartment number 13.',
			'price': 123,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.869072, 50.728083]}
		},
		{
			'id': '14',
			'name': 'Wide Loft 14',
			'description': 'Spacious apartment number 14.',
			'price': 104,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.137552, 50.568076]}
		},
		{
			'id': '15',
			'name': 'Wide Loft 15',
			'description': 'Spacious apartment number 15.',
			'price': 92,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.03019, 50.341713]}
		},
		{
			'id': '16',
			'name': 'Wide Loft 16',
			'description': 'Spacious apartment number 16.',
			'price': 83,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.818382, 50.280361]}
		},
		{
			'id': '17',
			'name': 'Wide Loft 17',
			'description': 'Spacious apartment number 17.',
			'price': 187,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.473463, 50.572815]}
		},
		{
			'id': '18',
			'name': 'Wide Loft 18',
			'description': 'Spacious apartment number 18.',
			'price': 126,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.519505, 50.244064]}
		},
		{
			'id': '19',
			'name': 'Wide Loft 19',
			'description': 'Spacious apartment number 19.',
			'price': 184,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.615741, 50.775015]}
		},
		{
			'id': '20',
			'name': 'Wide Loft 20',
			'description': 'Spacious apartment number 20.',
			'price': 140,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.419198, 50.480431]}
		}
	]);

	const searchQuery = ref('');
	const currentPage = ref(1);
	const itemsPerPage = ref(5);
	const totalPages = computed(() => {
		return Math.ceil(filteredProperty.value.length / itemsPerPage.value);
	});

	const filteredProperty = computed(() => {
		const query = searchQuery.value.toLowerCase();
		return property.value.filter(p =>
			p.name.toLowerCase().includes(query) ||
			p.location.toLowerCase().includes(query)
		);
	});

	const paginatedProperty = computed(() => {
		const start = (currentPage.value - 1) * itemsPerPage.value;
		return filteredProperty.value.slice(start, start + itemsPerPage.value);
	});

	return {
		property,
		searchQuery,
		currentPage,
		totalPages,
		itemsPerPage,
		filteredProperty,
		paginatedProperty,
	};
})
