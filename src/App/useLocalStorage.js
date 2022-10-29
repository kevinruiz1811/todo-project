import React from "react";

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  SAVE: "SAVE",
  SINCRONIZE: "SINCRONIZE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ERROR:
      return {
        ...state,
        error: true,
      };

    case actionTypes.SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        sincronizeItem: true,
        item: action.payload,
      };

    case actionTypes.SAVE:
      return {
        ...state,
        error: false,
        loading: false,
        sincronizedItem: true,
        item: action.payload,
      };

    case actionTypes.SINCRONIZE:
      return {
        ...state,
        loading: true,
        sincronizedItem: false,
      };

    default:
      break;
  }
};

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );

  const { sincronizedItem, error, loading, item } = state;

  // ACTION CREATORS
  const onError = (error) => {
    dispatch({ type: actionTypes.ERROR, payload: error });
  };

  const onSuccess = (parsedItem) => {
    dispatch({ type: actionTypes.SUCCESS, payload: parsedItem });
  };

  const onSave = (item) => {
    dispatch({ type: actionTypes.SAVE, payload: item });
  };

  const onSincronize = () => {
    dispatch({ type: actionTypes.SINCRONIZE });
  };

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  const sincronizeItem = () => {
    onSincronize();
  };

  const saveItem = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      onSave(newTodos);
    } catch (error) {
      onError(error);
    }
  };

  return { item, saveItem, loading, error, sincronizeItem };
}

export { useLocalStorage };
