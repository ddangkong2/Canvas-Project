import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import Palette from "./service/Palette.jsx";

function mappingScroll(target, in_min, in_max, out_min, out_max) {
  return (
    ((target - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

function App() {
  const canvasRef = useRef();
  const colorRef = useRef("black");
  const [canvasSize, setCanvasSize] = useState(500);
  const [ctx, setCtx] = useState();
  const [palette, setPalette] = useState(false);
  const coordinateRef = useRef({ x: -1, y: -1 });
  const coordinateSnapshotRef = useRef({ x: -1, y: -1 });
  const clickedRef = useRef(false);
  const throttleRef = useRef(false);
  const xRef = useRef(0);
  const yRef = useRef(0);

  function mappingCoordinate(target, outMax) {
    // 원래 매핑 함수와 같이 동작하지만 캔버스 범위에 있어서 500으로 고정되어 있으니까 이렇게 함수가 만들어졌다.
    // 캔버스 자체의 사이즈를 바꾸면 이 함수만 바꿔주면 된다. 나름 잘 만들었네. 그런데 여기서 canvas의 사이즈를 어떻게 가져오지?
    return Math.floor((target / outMax) * canvasRef.current.width);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCtx(context);

    context.strokeStyle = "rgba(0,0,0,.2)";
    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;
    for (let x = 0.5; x <= canvasWidth; x += 10) {
      context.moveTo(x, 0);
      context.lineTo(x, canvasWidth);
    }
    for (let y = 0.5; y <= canvasHeight + 3; y += 10) {
      context.moveTo(0, y);
      context.lineTo(canvasHeight, y);
    }
    context.stroke();
  }, []);

  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      if (throttleRef.current) return;
      else {
        throttleRef.current = true;
        // 캔버스 위 포인터를 중심으로 확대, 축소를 위한 코드
        xRef.current = canvasRef.current.scrollWidth / e.pageX;
        yRef.current = canvasRef.current.scrollHeight / e.pageY;

        if (e.deltaY > 0) {
          // down
          setCanvasSize((val) => (val -= 200));
          window.scrollTo(
            canvasRef.current.scrollWidth / xRef.current - e.clientX,
            canvasRef.current.scrollHeight / yRef.current - e.clientY
          );
        } else {
          // up
          setCanvasSize((val) => (val += 200));
          window.scrollTo(
            canvasRef.current.scrollWidth / xRef.current - e.clientX,
            canvasRef.current.scrollHeight / yRef.current - e.clientY
          );
        }
        setTimeout(() => {
          throttleRef.current = false;
        }, 30);
      }
    },
    { passive: false }
  );

  const onMouseDown = (e) => {
    // e.nativeEvent.offsetX, Y는 canvas에 적용된 이벤트라 캔버스 상에서의 pageX, Y 역할을 한다.
    // 그리고 offsetX, offsetY는 이를 캔버스의 고정된 사이즈(500)에 맞추어 값을 항상 내도록 한다.
    coordinateRef.current = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    };
    coordinateSnapshotRef.current = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    };
    clickedRef.current = true;
  };

  const onMouseUp = (e) => {
    // coordinateSnapshotRef로 클릭인지 드래근지 판단
    if (
      coordinateRef.current.x === coordinateSnapshotRef.current.x &&
      coordinateRef.current.y === coordinateSnapshotRef.current.y
    ) {
      // 1,1,9,9로 찍으면 됨
      if (!palette) {
        setPalette(true);
      } else {
        const x =
          Math.floor(
            mappingCoordinate(coordinateSnapshotRef.current.x, canvasSize) / 10
          ) *
            10 +
          1;
        const y =
          Math.floor(
            mappingCoordinate(coordinateSnapshotRef.current.y, canvasSize) / 10
          ) *
            10 +
          1;
        ctx.fillStyle = colorRef.current;
        ctx.fillRect(x, y, 9, 9);
      }
    }
    clickedRef.current = false;
  };

  const drag = (e) => {
    if (clickedRef.current) {
      const x = e.nativeEvent.offsetX - coordinateRef.current.x;
      const y = e.nativeEvent.offsetY - coordinateRef.current.y;
      if (x !== 0 && y !== 0) {
        window.scrollBy(-x, -y);
      }
      coordinateRef.current = {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      };
    }
  };

  const handleLeaveMouse = () => {
    clickedRef.current = false;
  };

  const preventMotion = (e) => {
    e.preventDefault();
  };

  const onChangeColor = (color) => {
    colorRef.current = color;
  };

  const removePalette = () => {
    setPalette(false);
  };

  const onIncrease = () => {
    const scrollRangeY =
      document.scrollingElement.scrollHeight -
      document.scrollingElement.clientHeight;
    const scrollRangeX =
      document.scrollingElement.scrollWidth -
      document.scrollingElement.clientWidth;

    const arrangeY = mappingScroll(window.scrollY, 0, scrollRangeY, 0, 200);
    const arrangeX = mappingScroll(window.scrollX, 0, scrollRangeX, 0, 200);

    setCanvasSize((val) => (val += 200));
    window.scrollBy(arrangeX, arrangeY);
  };

  const onDecrease = () => {
    const scrollRangeY =
      document.scrollingElement.scrollHeight -
      document.scrollingElement.clientHeight;
    const scrollRangeX =
      document.scrollingElement.scrollWidth -
      document.scrollingElement.clientWidth;

    const arrangeY = mappingScroll(window.scrollY, 0, scrollRangeY, 0, 200);
    const arrangeX = mappingScroll(window.scrollX, 0, scrollRangeX, 0, 200);

    setCanvasSize((val) => (val -= 200));
    window.scrollBy(-arrangeX, -arrangeY);
  };

  const onGoBack = (e) => {
    setCanvasSize(500);
  };

  // 나중에 about으로 사용될 모달 대충 만들어봄
  // 모달을 jsx 상에서 저렇게 할 지 css 옵션을 hidden으로 줄지 뭐가 성능이 나은지 확인해봐야 할거 같음
  // const [modal, setModal] = useState(true);
  // const modalClick = () => {
  //   setCanvasSize(500);
  //   setModal(false);
  // };
  return (
    <div className={styles.App}>
      {/* {modal && (
        <div className={styles.modal}>
          <button className={styles.modalBtn} onClick={modalClick}></button>
        </div>
      )} */}
      <canvas
        style={{ width: `${canvasSize}px`, height: `${canvasSize}px` }}
        className={styles.canvas}
        ref={canvasRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={drag}
        onMouseLeave={handleLeaveMouse}
        onContextMenu={preventMotion}
        width="500"
        height="500"
      ></canvas>
      {palette && (
        <div className={styles.colorContainer}>
          <button className={styles.deleteBtn} onClick={removePalette}>
            X
          </button>
          <Palette onChangeColor={onChangeColor} />
        </div>
      )}
      <div className={styles.btnSet}>
        <button className={styles.funcBtn} onClick={onIncrease}>
          +
        </button>
        <button className={styles.funcBtn} onClick={onDecrease}>
          -
        </button>
        <button className={styles.funcBtn} onClick={onGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default App;
