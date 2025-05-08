import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const usePropertyStore = defineStore('location', () => {
	const properties = ref([
		{
			'id': '1',
			'name': 'Wide Loft 1',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
		},
		{
			'id': '21',
			'name': 'Wide Loft 21',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'price': 112,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.857034, 50.201036]}
		},
		{
			'id': '22',
			'name': 'Wide Loft 22',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'price': 151,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.857034, 50.201036]}
		},
		{
			'id': '23',
			'name': 'Wide Loft 23',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'price': 85,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.857034, 50.201036]}
		},
		{
			'id': '24',
			'name': 'Wide Loft 24',
			'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			'price': 100,
			'location': 'Kyiv Region',
			'geometry': {'type': 'Point', 'coordinates': [30.857034, 50.201036]}
		},
		{
			id: '25',
			name: 'Modern Loft 1',
			description: 'Beautiful apartment in Lviv.',
			price: 120,
			location: 'Lviv Region',
			geometry: { type: 'Point', coordinates: [24.031592, 49.842957] }
		},
		{
			id: '26',
			name: 'Modern Loft 2',
			description: 'Cozy apartment in Odesa.',
			price: 130,
			location: 'Odesa Region',
			geometry: { type: 'Point', coordinates: [30.732620, 46.482526] }
		},
		{
			id: '27',
			name: 'Modern Loft 3',
			description: 'Spacious apartment in Kharkiv.',
			price: 110,
			location: 'Kharkiv Region',
			geometry: { type: 'Point', coordinates: [36.230383, 49.993500] }
		},
		{
			id: '28',
			name: 'Modern Loft 4',
			description: 'Stylish apartment in Dnipro.',
			price: 140,
			location: 'Dnipro Region',
			geometry: { type: 'Point', coordinates: [35.045630, 48.464717] }
		},
		{
			id: '29',
			name: 'Modern Loft 5',
			description: 'Comfortable apartment in Zaporizhzhia.',
			price: 115,
			location: 'Zaporizhzhia Region',
			geometry: { type: 'Point', coordinates: [35.139567, 47.838800] }
		},
		{
			id: '30',
			name: 'Modern Loft 6',
			description: 'Elegant apartment in Vinnytsia.',
			price: 125,
			location: 'Vinnytsia Region',
			geometry: { type: 'Point', coordinates: [28.481013, 49.232780] }
		},
		{
			id: '31',
			name: 'Modern Loft 7',
			description: 'Luxury apartment in Ivano-Frankivsk.',
			price: 150,
			location: 'Ivano-Frankivsk Region',
			geometry: { type: 'Point', coordinates: [24.709722, 48.922633] }
		},
		{
			id: '32',
			name: 'Modern Loft 8',
			description: 'Charming apartment in Chernihiv.',
			price: 100,
			location: 'Chernihiv Region',
			geometry: { type: 'Point', coordinates: [31.284877, 51.498206] }
		},
	]);

	const searchQuery = ref('');
	const currentPage = ref(1);
	const itemsPerPage = ref(8);
	const totalPages = computed(() => {
		return Math.ceil(filteredProperties.value.length / itemsPerPage.value);
	});

	const filteredProperties = computed(() => {
		const query = searchQuery.value.toLowerCase();
		return properties.value.filter(p =>
			p.name.toLowerCase().includes(query) ||
			p.location.toLowerCase().includes(query)
		);
	});

	const paginatedProperties = computed(() => {
		const start = (currentPage.value - 1) * itemsPerPage.value;
		return filteredProperties.value.slice(start, start + itemsPerPage.value);
	});

	const setPage = (page) =>  {
		if (page >= 1 && page <= totalPages.value) {
			currentPage.value = page;
		}
	}

	const setSearchQuery = (query) => {
		searchQuery.value = query;
	}

	const getSingleProperty = (id) => {
		return properties.value.find(p => p.id === id);
	}

	return {
		properties,
		searchQuery,
		currentPage,
		totalPages,
		itemsPerPage,
		filteredProperties,
		paginatedProperties,
		setPage,
		setSearchQuery,
		getSingleProperty,
	};
})
