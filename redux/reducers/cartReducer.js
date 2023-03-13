import { ActionSheetIOS } from "react-native";

let defaultState = {
    selectedItems: {items:[], restaurantName:''}
}



let cartReducer = (state= defaultState, action)=>{
    switch(action.type) {
        case 'ADD TO CART': {
             // making a deep copy of original state
            let newState= {...state};

            if(action.payload.checkboxValue){ 
                console.log('ADD TO CART') 
           
            
            // updating the selectedItems, action.payload is whatever we sent in
            newState.selectedItems= {
                items: [...newState.selectedItems.items, action.payload],
                // plus the new restaurantName
                restaurantName: action.payload.restaurantName,
            };

            
           }
           else{
             console.log('REMOVE FROM CART')
             newState.selectedItems= {
                items:[
                    //if item is found in the cart but checkboxvalue is false, filter it out 
                    ...newState.selectedItems.items.filter((item) => item.title != action.payload.title )
                    // remember to change above to NOT EQUAL sign- time:4h.07
                ],
                restaurantName: action.payload.restaurantName,
              }
            }
           
            console.log(newState,'🧨')  ;
            return newState;
        }

        default:
            return state;
    }
      
};

export default cartReducer;