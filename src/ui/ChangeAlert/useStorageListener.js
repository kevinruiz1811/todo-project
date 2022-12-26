import React from "react";

function useStorageListener(sincronize) {
  const [storageChange, setstorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("Hubo cambios en el Local Storage");
      setstorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronize();
    setstorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };
