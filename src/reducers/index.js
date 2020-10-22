const ititialState = {
  menu: [{
			"title": "Cesar salad",
			"price": 12,
			"url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
			"category": "salads",
			"id": 1
		},
		{
			"title": "Pizza Margherita",
			"price": 10,
			"url": "https://yourfamilychef.ru/upload/iblock/129/129211eb41f1c086a95f746703ba8545.JPG",
			"category": "pizza",
			"id": 2
		},
		{
			"title": "Pizza Napoletana",
			"price": 13,
			"url": "https://www.pizzanapoletana.org/struttura/pagine_bicolor/mobile/decalogo_avpn_1.jpg",
			"category": "pizza",
			"id": 3
		},
		{
			"title": "Greece salad",
			"price": 8,
			"url": "https://assets.epicurious.com/photos/576454fb42e4a5ed66d1df6b/master/pass/greek-salad.jpg",
			"category": "salads",
			"id": 4
		},
		{
			"title": "Cowboy Steak",
			"price": 25,
			"url": "https://i.cbc.ca/1.4491288.1516208229!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cowboysteak.jpg",
			"category": "meat",
			"id": 5
		}],
  loading: true,
  items: []
}

const reducer = (state = ititialState, action) => {
  switch (action.type){
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false
      }
      case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true
      }
      case 'ITEM_ADD_TO_CART':
        const id = action.payload
        const cardItems = state.items
        console.log(1);
        const indX = cardItems.findIndex(item => item.id === id)
        if ( indX > -1){
          ++cardItems[indX]['count']
          console.log(3);
          return {
            ...state,
            items: [...cardItems]
          }
        }
        const newItem = state.menu.find(item => item.id === id)
        newItem.count = 1
            console.log(2);
            return{
              ...state,
              items: [...state.items, newItem]
            }
        
      case 'ITEM_REMOVE_FROM_CART':
        const idx = action.payload
        const itemIndex = state.items.findIndex(elem => elem.id === idx)
        return {
          ...state,
          items: [
            ...state.items.slice(0,itemIndex),
            ...state.items.slice(itemIndex + 1)
          ]
        }
    default:
      return state
  }
} 

export default reducer
