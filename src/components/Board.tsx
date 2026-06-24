export type BoardDimensions = {
  x: number;
  y: number;
};

type BoardProps = {
  dimensions: BoardDimensions;
  robot: any;
};

function Board(props: BoardProps) {
  let { dimensions, robot } = props;
  let { x, y } = dimensions;

  const prepareBoard = (x: number, y: number) => {
    let board = [];
    for (let i = x - 1; i >= 0; i--) {
      let row = [];
      for (let j = 0; j < y; j++) {
        if (robot && robot.x == j && robot.y == i) {
          row.push("true");
          continue;
        }
        row.push([j, i]);
      }
      board.push(row);
    }

    return (
      <>
        {board.map((row) => {
          return (
            <div key={row.toString()} style={{ width: "fit-content" }}>
              <>
                {row.map((cell) => {
                  return (
                    <span key={cell.toString()} style={{ padding: "5px" }}>
                      {cell == "true" ? "robo" : "#" + cell}
                    </span>
                  );
                })}
              </>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <section
        style={{
          border: "1px solid",
          margin: "auto",
          width: "fit-content",
          padding: "10px",
        }}
      >
        {prepareBoard(x, y)}
      </section>
    </>
  );
}

export default Board;
