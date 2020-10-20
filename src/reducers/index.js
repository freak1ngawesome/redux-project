const ititialState = {
  menu: [],
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