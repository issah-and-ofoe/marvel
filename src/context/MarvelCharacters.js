import React, { useContext, useEffect, useState } from "react";

const MarvelCharactersContext = React.createContext();
export const useMarvelCharacters = () => useContext(MarvelCharactersContext);

const MarvelCharactersProvider = () => {
  const [marvelCharacters, setMarvelCharacters] = useState([]);

  useEffect(() => {
    getMarvelCharacters();
  }, []);

  const getMarvelCharacters = async function () {
    //function for getting the marvel characters
  };

  let values = {
      marvelCharacters
  };
  return (
    <MarvelCharactersContext.Provider
      value={values}
    ></MarvelCharactersContext.Provider>
  );
};

export default MarvelCharactersProvider;
