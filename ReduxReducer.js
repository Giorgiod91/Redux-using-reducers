const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  }
  
  const reducing  = (state= initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      return {
        ...state,
        supplies: state.supplies +15,
        days: state.days +1
        
      }
    }
    case  'travel': {
       if(state.supplies - ( 20 * action.payload) <= 0) {
          return state; }
          else { 
        return {
        ...state,
       supplies:  state.supplies - 20*action.payload,
          distance: state.distance + 10*action.payload,
          days: state.days + action.payload,
    
  
        
      } }
       
      }
    
    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
          days: state.days + 1
      }
    }
    case "sell": {
      return {
        ...state,
        supplies: state.supplies -20,
        cash: state.cash + 5
      }
    }
    case "buy": {
      return {
        ...state,
        supplies: state.supplies +25,
        cash: state.cash -15
      }
    }
  
    case "theft": {
      return {
        ...state,
        
        cash: state.cash /2
      }
    }
  
  
    default: {
      return state;
    }
  }};
  
  
  //starting game calling reduver with an undefined state and empty object
  let wagon =  reducing(undefined, {});
  console.log(wagon);
  //case travel with payload : 1
  wagon = reducing(wagon, {type: "travel", payload: 1} );
  //print new state of variable wagon
  console.log(wagon);
  //case gather with no payload 
  wagon = reducing(wagon, {type: "gather"});
  //print new state of variable wagon
  console.log(wagon);
  //case tippedWagon with no payload
  wagon = reducing(wagon, {type: "tippedWagon"});
  //print new state of variable wagon
  console.log(wagon);
  //case travel 
  wagon = reducing(wagon, {type: "travel", payload: 3});
  //print new state of variable wagon
  console.log(wagon);
  //case travel to try out negativ value of supplies
  wagon = reducing(wagon, {type: "travel", payload: 1} );
  //print new state of variable wagon
  console.log(wagon);
  //new case sell give away 20 supplies to gain 5 cash
  wagon = reducing(wagon, {type: "sell"} );
  //print new state of variable wagon
  console.log(wagon);
  //new case buy gain 25 supplies for 15 cash
  wagon = reducing(wagon, {type: "buy"} );
  //print new state of variable wagon
  console.log(wagon);
  //new case theft getting half the cash stealed
  wagon = reducing(wagon, {type: "theft"} );
  //print new state of variable wagon
  console.log(wagon);
  