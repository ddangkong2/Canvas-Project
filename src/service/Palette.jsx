import React from "react";
import styles from "./Palette.module.css";

// 콜백을 불러와서 colorRef를 바꿔줘야 될듯
const Palette = ({ onChangeColor }) => {
  const onClick = (e) => {
    onChangeColor(e.target.dataset.color);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.colorBtn} ${styles.color1}`}
        data-color="rgb(255, 0, 0)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color2}`}
        data-color="rgb(237,27,36)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color3}`}
        data-color="rgb(246,151,121)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color4}`}
        data-color="rgb(242,108,79)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color5}`}
        data-color="rgb(237,27,36)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color6}`}
        data-color="rgb(157,11,14)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color7}`}
        data-color="rgb(123,0,2)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color11}`}
        data-color="rgb(255,255,0)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color12}`}
        data-color="rgb(254,242,0)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color13}`}
        data-color="rgb(250,173,129)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color14}`}
        data-color="rgb(247,142,85)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color15}`}
        data-color="rgb(243,101,35)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color16}`}
        data-color="rgb(161,65,14)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color17}`}
        data-color="rgb(123,46,0)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color21}`}
        data-color="rgb(0,255,0)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color22}`}
        data-color="rgb(0,166,82)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color23}`}
        data-color="rgb(253,199,139)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color24}`}
        data-color="rgb(251,174,92)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color25}`}
        data-color="rgb(247,148,29)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color26}`}
        data-color="rgb(163,97,10)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color27}`}
        data-color="rgb(125,73,0)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color31}`}
        data-color="rgb(0,255,255)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color32}`}
        data-color="rgb(0,173,239)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color33}`}
        data-color="rgb(255,247,154)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color34}`}
        data-color="rgb(255,244,103)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color35}`}
        data-color="rgb(254,240,0)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color36}`}
        data-color="rgb(172,160,0)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color37}`}
        data-color="rgb(131,123,0)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color41}`}
        data-color="rgb(0,0,255)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color42}`}
        data-color="rgb(46,49,146)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color43}`}
        data-color="rgb(196,223,156)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color44}`}
        data-color="rgb(171,211,114)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color45}`}
        data-color="rgb(141,199,63)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color46}`}
        data-color="rgb(89,133,38)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color47}`}
        data-color="rgb(64,103,23)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color51}`}
        data-color="rgb(255,0,255)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color52}`}
        data-color="rgb(237,1,138)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color53}`}
        data-color="rgb(162,211,156)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color54}`}
        data-color="rgb(122,197,115)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color55}`}
        data-color="rgb(58,181,73)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color56}`}
        data-color="rgb(27,123,49)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color57}`}
        data-color="rgb(0,97,31)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color61}`}
        data-color="rgb(255,255,255)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color62}`}
        data-color="rgb(116,116,116)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color63}`}
        data-color="rgb(130,201,157)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color64}`}
        data-color="rgb(125,207,166)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color65}`}
        data-color="rgb(0,166,82)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color66}`}
        data-color="rgb(0,114,53)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color67}`}
        data-color="rgb(0,88,38)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color71}`}
        data-color="rgb(230,230,230)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color72}`}
        data-color="rgb(102,102,102)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color73}`}
        data-color="rgb(124,205,199)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color74}`}
        data-color="rgb(97,206,200)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color75}`}
        data-color="rgb(2,167,159)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color76}`}
        data-color="rgb(0,115,108)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color77}`}
        data-color="rgb(0,89,83)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color81}`}
        data-color="rgb(218,218,218)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color82}`}
        data-color="rgb(89,89,89)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color83}`}
        data-color="rgb(110,208,247)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color84}`}
        data-color="rgb(0,191,243)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color85}`}
        data-color="rgb(0,173,239)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color86}`}
        data-color="rgb(0,119,162)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color87}`}
        data-color="rgb(1,91,126)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color91}`}
        data-color="rgb(205,205,205)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color92}`}
        data-color="rgb(75,75,75)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color93}`}
        data-color="rgb(126,166,215)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color94}`}
        data-color="rgb(67,139,201)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color95}`}
        data-color="rgb(0,114,187)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color96}`}
        data-color="rgb(0,76,128)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color97}`}
        data-color="rgb(0,54,100)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color101}`}
        data-color="rgb(192,192,192)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color102}`}
        data-color="rgb(62,62,62)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color103}`}
        data-color="rgb(132,147,202)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color104}`}
        data-color="rgb(86,116,186)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color105}`}
        data-color="rgb(0,84,165)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color106}`}
        data-color="rgb(0,52,112)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color107}`}
        data-color="rgb(0,33,87)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color111}`}
        data-color="rgb(180,180,180)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color112}`}
        data-color="rgb(48,48,48)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color113}`}
        data-color="rgb(131,130,187)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color114}`}
        data-color="rgb(96,92,168)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color115}`}
        data-color="rgb(44,48,147)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color116}`}
        data-color="rgb(27,20,100)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color117}`}
        data-color="rgb(13,1,77)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color121}`}
        data-color="rgb(167,167,167)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color122}`}
        data-color="rgb(33,33,33)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color123}`}
        data-color="rgb(162,135,190)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color124}`}
        data-color="rgb(133,95,168)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color125}`}
        data-color="rgb(102,46,145)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color126}`}
        data-color="rgb(68,14,98)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color127}`}
        data-color="rgb(51,0,75)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color131}`}
        data-color="rgb(154,154,154)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color132}`}
        data-color="rgb(20,20,0)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color133}`}
        data-color="rgb(188,142,191)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color134}`}
        data-color="rgb(165,100,168)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color135}`}
        data-color="rgb(146,39,143)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color136}`}
        data-color="rgb(99,4,96)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color137}`}
        data-color="rgb(76,0,74)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color141}`}
        data-color="rgb(141,141,141)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color142}`}
        data-color="rgb(10,10,10)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color143}`}
        data-color="rgb(245,154,195)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color144}`}
        data-color="rgb(240,110,170)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color145}`}
        data-color="rgb(237,0,140)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color146}`}
        data-color="rgb(159,0,93)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color147}`}
        data-color="rgb(123,0,70)"
        onClick={onClick}
      ></button>

      <button
        className={`${styles.colorBtn} ${styles.color151}`}
        data-color="rgb(129,129,129)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color152}`}
        data-color="rgb(0,0,0)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color153}`}
        data-color="rgb(247,152,158)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color154}`}
        data-color="rgb(242,109,126)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color155}`}
        data-color="rgb(237,20,91)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color156}`}
        data-color="rgb(158,0,58)"
        onClick={onClick}
      ></button>
      <button
        className={`${styles.colorBtn} ${styles.color157}`}
        data-color="rgb(122,0,37)"
        onClick={onClick}
      ></button>
    </div>
  );
};

export default Palette;
