function TableSkeleton({ cols = 2, rows = 10 }) {
  return (
    <>
      {new Array(rows).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {new Array(cols).map((_, colIndex) => (
            <td key={colIndex}>
              <div className="skeleton h-4 rounded-sm"></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default TableSkeleton;
