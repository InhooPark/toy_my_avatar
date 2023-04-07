import { useEffect, useRef } from "react";
import "./App.scss";
import React, { useState } from "react";

function App() {
  // // Character Setting
  const [type, setType] = useState("body");
  // type
  const hairType = [
    "bald",
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
  const topType = ["basic", "floral", "overalls", "sailor", "skull", "spaghetti", "sporty", "stripe", "suit"];
  const bottomType = ["basic", "skirt", "suit"];
  const specialType = ["dress", "clown1", "clown2", "pumpkin1", "pumpkin2", "spooky", "witch"];

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
  const [acc, setAcc] = useState("earring"); // acc Type - beardColor = hairColor
  const [earring, setEarring] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [glassessun, setGlassessun] = useState(0);
  const [hat, setHat] = useState(0);
  const [mask, setMask] = useState(0);
  const [tile, setTile] = useState(0); // 0 = blank(transparent)
  const [beard, setBeard] = useState(false);

  function numberPlus(type) {
    switch (type) {
      case "body":
        if (body === 7) setBody(0);
        else setBody(body + 1);
        break;
      case "hair":
        if (hair === 15) setHair(0);
        else setHair(hair + 1);
        break;
      case "hairColor":
        if (hairColor === 13) setHairColor(0);
        else setHairColor(hairColor + 1);
        break;
      case "top":
        if (top === 8) setTop(0);
        else setTop(top + 1);
        break;
      case "topColor":
        if (topColor === 9) setTopColor(0);
        else setTopColor(topColor + 1);
        break;
      case "bottom":
        if (bottom === 2) setBottom(0);
        else setBottom(bottom + 1);
        break;
      case "bottomColor":
        if (bottomColor === 9) setBottomColor(0);
        else setBottomColor(bottomColor + 1);
        break;
      case "special":
        if (special === 6) setSpecial(0);
        else setSpecial(special + 1);
        break;
      case "specialColor":
        if (specialColor === 9) setSpecialColor(0);
        else setSpecialColor(specialColor + 1);
        break;
      case "shoes":
        if (shoes === 9) setShoes(0);
        else setShoes(shoes + 1);
        break;
      case "tile":
        if (tile === 4) setTile(0);
        else setTile(tile + 1);
        break;
      case "earring":
        setMask(0);
        if (earring === 4) setEarring(0);
        else setEarring(earring + 1);
        break;
      case "glasses":
        setMask(0);
        setGlassessun(0);
        if (glasses === 10) setGlasses(0);
        else setGlasses(glasses + 1);
        break;
      case "glassessun":
        setMask(0);
        setGlasses(0);
        if (glassessun === 10) setGlassessun(0);
        else setGlassessun(glassessun + 1);
        break;
      case "hat":
        setMask(0);
        if (hat === 5) setHat(0);
        else setHat(hat + 1);
        break;
      case "mask":
        setHat(0);
        if (mask === 3) setMask(0);
        else setMask(mask + 1);
        break;
      default:
        return;
    }
  }
  function numberMinus(type) {
    switch (type) {
      case "body":
        if (body === 0) setBody(7);
        else setBody(body - 1);
        break;
      case "hair":
        if (hair === 0) setHair(15);
        else setHair(hair - 1);
        break;
      case "hairColor":
        if (hairColor === 0) setHairColor(13);
        else setHairColor(hairColor - 1);
        break;
      case "top":
        if (top === 0) setTop(8);
        else setTop(top - 1);
        break;
      case "topColor":
        if (topColor === 0) setTopColor(9);
        else setTopColor(topColor - 1);
        break;
      case "bottom":
        if (bottom === 0) setBottom(2);
        else setBottom(bottom - 1);
        break;
      case "bottomColor":
        if (bottomColor === 0) setBottomColor(9);
        else setBottomColor(bottomColor - 1);
        break;
      case "special":
        if (special === 0) setSpecial(6);
        else setSpecial(special - 1);
        break;
      case "specialColor":
        if (specialColor === 0) setSpecialColor(9);
        else setSpecialColor(specialColor - 1);
        break;
      case "shoes":
        if (shoes === 0) setShoes(9);
        else setShoes(shoes - 1);
        break;
      case "tile":
        if (tile === 0) setTile(4);
        else setTile(tile - 1);
        break;
      case "earring":
        setMask(0);
        if (earring === 0) setEarring(4);
        else setEarring(earring - 1);
        break;
      case "glasses":
        setMask(0);
        setGlassessun(0);
        if (glasses === 0) setGlasses(10);
        else setGlasses(glasses - 1);
        break;
      case "glassessun":
        setMask(0);
        setGlasses(0);
        if (glassessun === 0) setGlassessun(10);
        else setGlassessun(glassessun - 1);
        break;
      case "hat":
        setMask(0);
        if (hat === 0) setHat(5);
        else setHat(hat - 1);
        break;
      case "mask":
        setHat(0);
        if (mask === 0) setMask(3);
        else setMask(mask - 1);
        break;
      default:
        return;
    }
  }
  function beardCheck(e) {
    setBeard(e.target.checked);
  }
  function beardSetting() {
    const checkboxTarget = document.getElementById("beard");
    checkboxTarget.checked = beard;
  }

  useEffect(() => {
    if (type !== clothe) setClothe("normal");

    if (type === "hair") beardSetting();
  }, [type]);

  useEffect(() => {
    if (special != 1) setSpecialColor(0);
  }, [special]);
  // // Canvas Setting
  const canvasRef = useRef(null);
  const canvasSize = 240;

  function saveCharacter() {
    const myChar = canvasRef.current.toDataURL();
    const link = document.createElement("a");
    link.href = myChar;
    link.download = "MyAvatar";
    link.click();
  }

  useEffect(() => {
    if (!canvasRef) return;

    const ctx = canvasRef.current.getContext("2d");
    const tileimg = new Image();
    const bodyimg = new Image();
    const hairimg = new Image();
    const topimg = new Image();
    const bottomimg = new Image();
    const specialimg = new Image();
    const shoesimg = new Image();
    const beardimg = new Image();
    const earringimg = new Image();
    const glassesimg = new Image();
    const glassessunimg = new Image();
    const hatimg = new Image();
    const maskimg = new Image();

    if (hairType[hair] !== "bald") {
      hairimg.src = `/toy_my_avatar/img/hair/${hairType[hair]}/${hairType[hair]}-${("000" + (hairColor + 1)).slice(-3)}.png`;
    } else {
      hairimg.src = "/toy_my_avatar/img/hair/bald/bald-001.png";
    }
    bodyimg.src = `/toy_my_avatar/img/body/body0${body + 1}.png`;
    tileimg.src = `/toy_my_avatar/img/tile/tile-00${tile + 1}.png`;
    topimg.src = `/toy_my_avatar/img/clothes/top/${topType[top]}/${topType[top]}-${("000" + (topColor + 1)).slice(-3)}.png`;
    bottomimg.src = `/toy_my_avatar/img/clothes/bottom/${bottomType[bottom]}/${bottomType[bottom]}-${("000" + (bottomColor + 1)).slice(-3)}.png`;
    shoesimg.src = `/toy_my_avatar/img/clothes/shoes/shoes-${("000" + (shoes + 1)).slice(-3)}.png`;
    specialimg.src = `/toy_my_avatar/img/clothes/special/${specialType[special]}/${specialType[special]}-${("000" + (specialColor + 1)).slice(-3)}.png`;
    beardimg.src = `/toy_my_avatar/img/acc/beard/beard-${("000" + (hairColor + 1)).slice(-3)}.png`;
    earringimg.src = `/toy_my_avatar/img/acc/earring/earring-${("000" + (earring + 1)).slice(-3)}.png`;
    glassesimg.src = `/toy_my_avatar/img/acc/glasses/glasses-${("000" + (glasses + 1)).slice(-3)}.png`;
    glassessunimg.src = `/toy_my_avatar/img/acc/glassessun/glassessun-${("000" + (glassessun + 1)).slice(-3)}.png`;
    hatimg.src = `/toy_my_avatar/img/acc/hat/hat-${("000" + (hat + 1)).slice(-3)}.png`;
    maskimg.src = `/toy_my_avatar/img/acc/mask/mask-${("000" + (mask + 1)).slice(-3)}.png`;

    function draw() {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      ctx.drawImage(tileimg, 0, 0, canvasSize, canvasSize);
      ctx.drawImage(bodyimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);
      ctx.drawImage(hairimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);
      ctx.drawImage(shoesimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);
      if (clothe == "normal") {
        ctx.drawImage(topimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);
        ctx.drawImage(bottomimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);
      } else {
        ctx.drawImage(specialimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);
      }
      if (beard) ctx.drawImage(beardimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);

      ctx.drawImage(earringimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);
      ctx.drawImage(glassesimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);
      ctx.drawImage(glassessunimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);
      ctx.drawImage(hatimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);
      ctx.drawImage(maskimg, canvasSize / 4, canvasSize / 8, canvasSize / 2, canvasSize / 2);
    }
    tileimg.onload = draw;
    bodyimg.onload = draw;
    hairimg.onload = draw;
    shoesimg.onload = draw;
    if (clothe === "normal") {
      topimg.onload = draw;
      bottomimg.onload = draw;
    } else {
      specialimg.onload = draw;
    }
    beardimg.onload = draw;
    earringimg.onload = draw;
    glassesimg.onload = draw;
    glassessunimg.onload = draw;
    hatimg.onload = draw;
    maskimg.onload = draw;
  }, [body, hair, hairColor, top, topColor, bottom, bottomColor, special, specialColor, shoes, tile, beard, earring, glasses, glassessun, hat, mask]);

  return (
    <div className="App">
      <header className="header">
        <h1> My Avatar </h1>
        <div className="saveBtn">
          <button onClick={saveCharacter}>Save My Avatar</button>
        </div>
      </header>

      <main className="main">
        <div className="canvas_wrap">
          <canvas className="canvas" ref={canvasRef} width={canvasSize} height={canvasSize} />
        </div>

        <div className="control">
          <div className="type_wrap">
            <button type="button" onClick={() => setType("body")}>
              피부
            </button>
            <button type="button" onClick={() => setType("hair")}>
              머리
            </button>
            <button type="button" onClick={() => setType("clothe")}>
              옷
            </button>
            <button type="button" onClick={() => setType("shoes")}>
              신발
            </button>
            <button type="button" onClick={() => setType("acc")}>
              악세서리
            </button>
            <button type="button" onClick={() => setType("tile")}>
              배경
            </button>
          </div>

          <div className="setting_char">
            {type === "body" ? (
              <div className="body_btn">
                <p>피부</p>
                <div className="body_btn_wrap">
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
                <div className="beard">
                  <label>
                    <input type="checkbox" id="beard" onChange={beardCheck} />
                    수염
                  </label>
                </div>
                <div className="hair_type_btn">
                  <p>머리</p>
                  <div className="hair_btn_wrap">
                    <button type="button" onClick={() => numberMinus("hair")}>
                      &lt;
                    </button>
                    <p>{hair}</p>
                    <button type="button" onClick={() => numberPlus("hair")}>
                      &gt;
                    </button>
                  </div>
                </div>
                {hair === 0 ? (
                  <></>
                ) : (
                  <div className="hair_color_btn">
                    <p>머리 색</p>
                    <div className="hair_color_btn_wrap">
                      <button type="button" onClick={() => numberMinus("hairColor")}>
                        &lt;
                      </button>
                      <p>{hairColor}</p>
                      <button type="button" onClick={() => numberPlus("hairColor")}>
                        &gt;
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : type === "clothe" ? (
              <div className="cloth_btn">
                <div className="clothe_type_btn_wrap">
                  <button onClick={() => setClothe("normal")}>상 하의</button>
                  <button onClick={() => setClothe("special")}>한벌</button>
                </div>

                {clothe === "normal" ? (
                  <div className="clothe_normal_btn">
                    <div className="top_btn">
                      <p>상의</p>
                      <div className="clothe_top_btn_wrap">
                        <button type="button" onClick={() => numberMinus("top")}>
                          &lt;
                        </button>
                        <p>{top}</p>
                        <button type="button" onClick={() => numberPlus("top")}>
                          &gt;
                        </button>
                      </div>
                    </div>
                    <div className="top_color_btn">
                      <p>상의 색</p>
                      <div className="clothe_top_color_btn_wrap">
                        <button type="button" onClick={() => numberMinus("topColor")}>
                          &lt;
                        </button>
                        <p>{topColor}</p>
                        <button type="button" onClick={() => numberPlus("topColor")}>
                          &gt;
                        </button>
                      </div>
                    </div>
                    <div className="bottom_btn">
                      <p>하의</p>
                      <div className="clothe_bottom_btn_wrap">
                        <button type="button" onClick={() => numberMinus("bottom")}>
                          &lt;
                        </button>
                        <p>{bottom}</p>
                        <button type="button" onClick={() => numberPlus("bottom")}>
                          &gt;
                        </button>
                      </div>
                    </div>
                    <div className="bottom_color_btn">
                      <p>하의 색</p>
                      <div className="clothe_bottom_color_btn_wrap">
                        <button type="button" onClick={() => numberMinus("bottomColor")}>
                          &lt;
                        </button>
                        <p>{bottomColor}</p>
                        <button type="button" onClick={() => numberPlus("bottomColor")}>
                          &gt;
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="clothe_special_btn">
                    <div className="special_btn">
                      <p>한벌옷</p>
                      <div className="clothe_special_btn_wrap">
                        <button type="button" onClick={() => numberMinus("special")}>
                          &lt;
                        </button>
                        <p>{special}</p>
                        <button type="button" onClick={() => numberPlus("special")}>
                          &gt;
                        </button>
                      </div>
                    </div>
                    {special === 0 ? (
                      <div className="special_color_btn">
                        <p>한벌옷 색</p>
                        <div className="clothe_special_color_btn_wrap">
                          <button type="button" onClick={() => numberMinus("specialColor")}>
                            &lt;
                          </button>
                          <p>{specialColor}</p>
                          <button type="button" onClick={() => numberPlus("specialColor")}>
                            &gt;
                          </button>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </div>
            ) : type === "shoes" ? (
              <div className="shoes_btn">
                <p>신발</p>
                <div className="clothe_shoes_btn_wrap">
                  <button type="button" onClick={() => numberMinus("shoes")}>
                    &lt;
                  </button>
                  <p>{shoes}</p>
                  <button type="button" onClick={() => numberPlus("shoes")}>
                    &gt;
                  </button>
                </div>
              </div>
            ) : type === "tile" ? (
              <div className="tile_btn">
                <p>배경</p>
                <div className="tile_btn_wrap">
                  <button type="button" onClick={() => numberMinus("tile")}>
                    &lt;
                  </button>
                  <p>{tile}</p>
                  <button type="button" onClick={() => numberPlus("tile")}>
                    &gt;
                  </button>
                </div>
              </div>
            ) : type === "acc" ? (
              <div className="acc_btn">
                <div className="acc_type_btn_wrap">
                  <button type="button" onClick={() => setAcc("earring")}>
                    귀고리
                  </button>
                  <button type="button" onClick={() => setAcc("glasses")}>
                    안경
                  </button>
                  <button type="button" onClick={() => setAcc("glassessun")}>
                    선글라스
                  </button>
                  <button type="button" onClick={() => setAcc("hat")}>
                    모자
                  </button>
                  <button type="button" onClick={() => setAcc("mask")}>
                    가면
                  </button>
                </div>
                <div className="acc_wrap">
                  {acc === "earring" ? (
                    <div className="earring_btn">
                      <p>귀고리</p>
                      <div className="earring_btn_wrap">
                        <button type="button" onClick={() => numberMinus("earring")}>
                          &lt;
                        </button>
                        <p>{earring}</p>
                        <button type="button" onClick={() => numberPlus("earring")}>
                          &gt;
                        </button>
                      </div>
                    </div>
                  ) : acc === "glasses" ? (
                    <div className="glasses_btn">
                      <p>안경</p>
                      <div className="glasses_btn_wrap">
                        <button type="button" onClick={() => numberMinus("glasses")}>
                          &lt;
                        </button>
                        <p>{glasses}</p>
                        <button type="button" onClick={() => numberPlus("glasses")}>
                          &gt;
                        </button>
                      </div>
                    </div>
                  ) : acc === "glassessun" ? (
                    <div className="glassessun_btn">
                      <p>선글라스</p>
                      <div className="glassessun_btn_wrap">
                        <button type="button" onClick={() => numberMinus("glassessun")}>
                          &lt;
                        </button>
                        <p>{glassessun}</p>
                        <button type="button" onClick={() => numberPlus("glassessun")}>
                          &gt;
                        </button>
                      </div>
                    </div>
                  ) : acc === "hat" ? (
                    <div className="hat_btn">
                      <p>모자</p>
                      <div className="hat_btn_wrap">
                        <button type="button" onClick={() => numberMinus("hat")}>
                          &lt;
                        </button>
                        <p>{hat}</p>
                        <button type="button" onClick={() => numberPlus("hat")}>
                          &gt;
                        </button>
                      </div>
                    </div>
                  ) : acc === "mask" ? (
                    <div className="mask_btn">
                      <p>가면</p>
                      <div className="mask_btn_wrap">
                        <button type="button" onClick={() => numberMinus("mask")}>
                          &lt;
                        </button>
                        <p>{mask}</p>
                        <button type="button" onClick={() => numberPlus("mask")}>
                          &gt;
                        </button>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
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
