export default [
    { label: 'Player Name', name: 'playername', type: 'text' },
    { label: 'Age', name: 'age', type: 'number', min: '10', max: '99' },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'Country', name: 'country', type: 'text' },
    { label: 'Gender', name: 'gender', type: 'radio', options: [
        { 
            data: 'Male', 
            id: 'Male' 
        }, { 
            data: 'Female', 
            id: 'Female' 
        }] 
    },
    { label: 'Handedness', name: 'handedness', type: 'text' },
    { label: 'Broom', name: 'broom', type: 'text' },
    { label: 'Position', name: 'position', type: 'select', options: [
        {
            data: 'Beater',
            id: 'Beater'
        }, {
            data: 'Chaser',
            id: 'Chaser'
        } , {
            data: 'Keeper',
            id: 'Keeper'
        }, {
            data: 'Seeker',
            id: 'Seeker'
        }
    ] },
    { label: 'Team', name: 'team', type: 'select', options: [
        {
            data: 'Gryffindor',
            id: 'Gryffindor'
        }, {
            data: 'Hufflepuff',
            id: 'Hufflepuff'
        }, {
            data: 'Ravenclaw',
            id: 'Ravenclaw'
        }, {
            data: 'Slytherin',
            id: 'Slytherin'
        }
    ] },
    { label: 'Favorite Color', name: 'favoritecolor', type: 'color' },
    { label: 'Headshot', name: 'headshot', type: 'text' }
];