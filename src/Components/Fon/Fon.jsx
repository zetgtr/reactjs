import React from "react";
import "./Fon.css";
import { useDispatch, useSelector } from "react-redux";
import { addFonAction } from "../../Store/Settings/actions";
import { fonSelector } from "../../Store/Settings/selector";
import imgStockFon from "../../img/MessageFon.jpg";
import { Button, CircularProgress } from "@mui/material";

export const Fon = ({ radioFavorites, hendleGetFon }) => {
  const dispatch = useDispatch();
  const { fonSearchUrl, favorites, fon, loading, error } =
    useSelector(fonSelector);
  const addFon = (url) => {
    dispatch(addFonAction({ url }));
  };
  const fonStyle = {
    backgroundImage: `url(${fonSearchUrl?.urls?.full ?? imgStockFon})`,
  };
  return (
    <>
      {!radioFavorites && (
        <div className="fonSettings" style={fonStyle}>
          {loading && <CircularProgress color="success" />}
          {error && (
            <>
              <h1 style={{ color: "red" }}>Произошла ошибка</h1>
              <Button
                onClick={hendleGetFon}
                variant="contained"
                href="#contained-buttons"
              >
                Перезагрузить?
              </Button>
            </>
          )}
        </div>
      )}
      {radioFavorites && (
        <div
          className="favoritesConteiner"
          style={{ backgroundImage: `url(${fon.url})` }}
        >
          {favorites.map((item) => (
            <img
              key={item.id}
              className="imgFavorites"
              onClick={() => addFon(item.urlFull)}
              src={item.urlSmall}
              alt=""
            />
          ))}
        </div>
      )}
    </>
  );
};
