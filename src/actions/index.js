export const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  }
}

export const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED',
  }
}

export const addedToCart = (id) => {
  return {
    type: 'ITEM_ADD_TO_CART',
    payload: id
  }
}

export const deleteFromCart = (id) => {
  return {
    type: 'ITEM_REMOVE_FROM_CART',
    payload: id
  }
}