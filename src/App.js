import { useEffect } from "react";
import "./App.scss";
import React, { useState } from "react";

function App() {
  const [type, setType] = useState();

  // type
  const hairType = [
    "bob",
    "braids",
    "buzzcut",
    "curly",
    "emo",
    "extralong",
    "extralongskirt",
    "frenchcurl",
    "gentleman",
    "longstraight",
    "longstraightskirt",
    "midiwave",
    "ponytail",
    "spacebuns",
    "wavy",
  ];
  const topType = ["basic", "floral", "sailor", "skull", "spaghetti", "sporty", "stripe", "suit"];
  const bottomType = ["basic", "skirt", "suit"];
  const specialType = ["dress", "overalls", "clown1", "clown2", "pumpkin1", "pumkin2", "spooky", "witch"];
  // setting
  const [body, setBody] = useState(0); // only skin
  const [hair, setHair] = useState(0);
  const [hairColor, setHairColor] = useState(0);
  const [clothe, setClothe] = useState("normal"); // normal(top, bottom) / special(onepiece)
  const [top, setTop] = useState(0); // 0 === basic
  const [topColor, setTopColor] = useState(0);
  const [bottom, setBottom] = useState(0); // 0 === basic
  const [bottomColor, setBottomColor] = useState(0);
  const [special, setSpecial] = useState(0); // 0 dress 1 overall 2~~~ onepiece
  const [specialColor, setSpecialColor] = useState(0); // only nonespecial
  const [shoes, setShoes] = useState(0); // only color
  const [tile, setTile] = useState(0); // 0 = blank(transparent)

  function numberPlus(type) {
    switch (type) {
      case "body":
        if (body == 7) setBody(0);
        else setBody(body + 1);
        break;
      case "hair":
        if (hair == 14) setHair(0);
        else setHair(hair + 1);
        break;
      case "hairColor":
        if (hairColor == 13) setHairColor(0);
        else setHairColor(hairColor + 1);
        break;
      case "top":
        if (top == 7) setTop(0);
        else setTop(top + 1);
        break;
      case "topColor":
        if (topColor == 9) setTopColor(0);
        else setTopColor(topColor + 1);
        break;
      case "bottom":
        if (bottom == 2) setBottom(0);
        else setBottom(bottom + 1);
        break;
      case "bottomColor":
        if (bottomColor == 9) setBottomColor(0);
        else setBottomColor(bottomColor + 1);
        break;
      case "special":
        if (special == 7) setSpecial(0);
        else setSpecial(special + 1);
        break;
      case "specialColor":
        if (specialColor == 9) setSpecialColor(0);
        else setSpecialColor(specialColor + 1);
        break;
      case "shoes":
        if (shoes == 9) setShoes(0);
        else setShoes(shoes + 1);
        break;
      case "tile":
        if (tile == 4) setTile(0);
        else setTile(tile + 1);
        break;
      default:
        return;
    }
  }
  function numberMinus(type) {
    switch (type) {
      case "body":
        if (body == 0) setBody(7);
        else setBody(body - 1);
        break;
      case "hair":
        if (hair == 0) setHair(14);
        else setHair(hair - 1);
        break;
      case "hairColor":
        if (hairColor == 0) setHairColor(13);
        else setHairColor(hairColor - 1);
        break;
      case "top":
        if (top == 0) setTop(7);
        else setTop(top - 1);
        break;
      case "topColor":
        if (topColor == 0) setTopColor(9);
        else setTopColor(topColor - 1);
        break;
      case "bottom":
        if (bottom == 0) setBottom(2);
        else setBottom(bottom - 1);
        break;
      case "bottomColor":
        if (bottomColor == 0) setBottomColor(9);
        else setBottomColor(bottomColor - 1);
        break;
      case "special":
        if (special == 0) setSpecial(7);
        else setSpecial(special - 1);
        break;
      case "specialColor":
        if (specialColor == 0) setSpecialColor(9);
        else setSpecialColor(specialColor - 1);
        break;
      case "shoes":
        if (shoes == 0) setShoes(9);
        else setShoes(shoes - 1);
        break;
      case "tile":
        if (tile == 0) setTile(4);
        else setTile(tile - 1);
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    if (type !== clothe) setClothe("normal");
  }, [type]);

  return (
    <div className="App">
      <header className="header">
        <h1> My Avatar </h1>
      </header>

      <main className="main">
        <canvas className="canvas"></canvas>
        <div className="control">
          <button type="button" onClick={() => setType("body")}>
            body
          </button>
          <button type="button" onClick={() => setType("hair")}>
            hair
          </button>
          <button type="button" onClick={() => setType("clothe")}>
            clothe
          </button>
          <button type="button" onClick={() => setType("tile")}>
            tile
          </button>
          <button type="button" onClick={() => setType("shoes")}>
            shoes
          </button>

          <div className="setting_char">
            {type === "body" ? (
              <div className="body_btn">
                <div className="body_btn_wrap">
                  BODY
                  <button type="button" onClick={() => numberMinus("body")}>
                    &lt;
                  </button>
                  <p>{body}</p>
                  <button type="button" onClick={() => numberPlus("body")}>
                    &gt;
                  </button>
                </div>
              </div>
            ) : type === "hair" ? (
              <div className="hair_btn">
                <div className="hair_btn_wrap">
                  HAIR
                  <button type="button" onClick={() => numberMinus("hair")}>
                    &lt;
                  </button>
                  <p>{hair}</p>
                  <button type="button" onClick={() => numberPlus("hair")}>
                    &gt;
                  </button>
                </div>
                <div className="hair_color_btn_wrap">
                  HAIR COLOR
                  <button type="button" onClick={() => numberMinus("hairColor")}>
                    &lt;
                  </button>
                  <p>{hairColor}</p>
                  <button type="button" onClick={() => numberPlus("hairColor")}>
                    &gt;
                  </button>
                </div>
              </div>
            ) : type === "clothe" ? (
              <div className="cloth_btn">
                <div className="clothe_type_btn_wrap">
                  <button onClick={() => setClothe("normal")}>상 하의</button>
                  <button onClick={() => setClothe("special")}>한벌</button>
                </div>

                {clothe === "normal" ? (
                  <div className="clothe_normal_btn_wrap">
                    <div className="clothe_top_btn_wrap">
                      TOP
                      <button type="button" onClick={() => numberMinus("top")}>
                        &lt;
                      </button>
                      <p>{top}</p>
                      <button type="button" onClick={() => numberPlus("top")}>
                        &gt;
                      </button>
                    </div>
                    <div className="clothe_top_color_btn_wrap">
                      TOP Color
                      <button type="button" onClick={() => numberMinus("topColor")}>
                        &lt;
                      </button>
                      <p>{topColor}</p>
                      <button type="button" onClick={() => numberPlus("topColor")}>
                        &gt;
                      </button>
                    </div>
                    <div className="clothe_bottom_btn_wrap">
                      BOTTOM
                      <button type="button" onClick={() => numberMinus("bottom")}>
                        &lt;
                      </button>
                      <p>{bottom}</p>
                      <button type="button" onClick={() => numberPlus("bottom")}>
                        &gt;
                      </button>
                    </div>
                    <div className="clothe_bottom_color_btn_wrap">
                      BOTTOM COLOR
                      <button type="button" onClick={() => numberMinus("bottomColor")}>
                        &lt;
                      </button>
                      <p>{bottomColor}</p>
                      <button type="button" onClick={() => numberPlus("bottomColor")}>
                        &gt;
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="clothe_special_btn_wrap">
                    <div className="clothe_special_btn_wrap">
                      SPECIAL
                      <button type="button" onClick={() => numberMinus("special")}>
                        &lt;
                      </button>
                      <p>{special}</p>
                      <button type="button" onClick={() => numberPlus("special")}>
                        &gt;
                      </button>
                    </div>
                    {special < 2 ? (
                      <div className="clothe_special_color_btn_wrap">
                        SPECIAL COLOR
                        <button type="button" onClick={() => numberMinus("specialColor")}>
                          &lt;
                        </button>
                        <p>{specialColor}</p>
                        <button type="button" onClick={() => numberPlus("specialColor")}>
                          &gt;
                        </button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </div>
            ) : type === "shoes" ? (
              <div className="clothe_shoes_btn_wrap">
                SHOE
                <button type="button" onClick={() => numberMinus("shoes")}>
                  &lt;
                </button>
                <p>{shoes}</p>
                <button type="button" onClick={() => numberPlus("shoes")}>
                  &gt;
                </button>
              </div>
            ) : type === "tile" ? (
              <div className="tile_btn">
                <div className="tile_btn_wrap">
                  TILE
                  <button type="button" onClick={() => numberMinus("tile")}>
                    &lt;
                  </button>
                  <p>{tile}</p>
                  <button type="button" onClick={() => numberPlus("tile")}>
                    &gt;
                  </button>
                </div>
              </div>
            ) : (
              <div className="none_btn"></div>
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Copyright 2023. PIH</p>
      </footer>
    </div>
  );
}

export default App;
