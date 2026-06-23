type BoardProps = {
  x: number;
  y: number;
};

function Board(props: BoardProps) {
  const prepareBoard = (x: number, y: number) => {
    let board = [];
    for (let i = x - 1; i >= 0; i--) {
      let row = [];
      for (let j = 0; j < y; j++) {
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
                      #{cell}
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
        {prepareBoard(props.x, props.y)}
      </section>
    </>
  );
}

export default Board;
