import { useDispatch, useSelector } from "react-redux";
import {
  addFavoritesAction,
  delliteFonAction,
  delliteFullFavoritesAction,
  getDogRequestAction,
} from "../../Store/Settings/actions";
import { fonSelector } from "../../Store/Settings/selector";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import { Fon } from "../../Components/Fon";

export const Settings = () => {
  const [radioFavorites, setRadioFavorites] = React.useState(false);
  const changeClickFavorites = () => {
    setRadioFavorites(!radioFavorites);
  };
  const dispatch = useDispatch();
  const hendleGetFon = () => {
    dispatch(getDogRequestAction());
  };
  const { fon } = useSelector(fonSelector);
  const addFavorites = () => {
    dispatch(addFavoritesAction());
  };
  const delliteFon = (url) => {
    dispatch(delliteFonAction({ url }));
  };
  const delliteFullFavorotes = () => {
    dispatch(delliteFullFavoritesAction());
  };
  return (
    <div className="App settingConteiner">
      <div className="MenuMobail">
        <div
          className="AuthorMessege AuthorMessegeSettings"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="Menu"></div>
          <h2>Настройка фона</h2>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Выбрать новый фон"
                onChange={changeClickFavorites}
              />
              <FormControlLabel
                onChange={changeClickFavorites}
                value="male"
                control={<Radio />}
                label="Избраное"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          {!radioFavorites && (
            <div className="ButtonMobile">
              <Button
                sx={{ marginTop: "20px", marginBottom: "10px" }}
                onClick={hendleGetFon}
                variant="contained"
                href="#contained-buttons"
              >
                Дальше
              </Button>
              <Button
                onClick={addFavorites}
                variant="contained"
                href="#contained-buttons"
              >
                Добавить в избранное
              </Button>
            </div>
          )}
          {radioFavorites && (
            <div className="ButtonMobile">
              <Button
                sx={{ marginTop: "20px", marginBottom: "10px" }}
                onClick={() => delliteFon(fon)}
                variant="contained"
                href="#contained-buttons"
              >
                Удалить фон
              </Button>
              <Button
                onClick={delliteFullFavorotes}
                variant="contained"
                href="#contained-buttons"
              >
                Очистить избранное
              </Button>
            </div>
          )}
        </div>
      </div>
      <Fon radioFavorites={radioFavorites} hendleGetFon={hendleGetFon} />
    </div>
  );
};
