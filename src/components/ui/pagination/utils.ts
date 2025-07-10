type PaginationItem = number | string;

export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number = 1,
  edgeCount: number = 0,
): PaginationItem[] {
  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  const range = Array.from({ length: totalPages }).map((_, i) => {
    const pageNumber = i + 1;

    if (pageNumber >= leftSibling && pageNumber <= rightSibling)
      return pageNumber;
    if (pageNumber >= 1 && pageNumber <= 1 + edgeCount) return pageNumber;
    if (pageNumber >= totalPages - edgeCount && pageNumber <= totalPages)
      return pageNumber;
    if (pageNumber === 1 || pageNumber === totalPages) return pageNumber;

    return null;
  });

  const totalRange = compactPagination(range);

  return totalRange;
}

function compactPagination(arr: (number | null)[]): (number | string)[] {
  const result: (number | string)[] = [];
  let inNullSequence = false;

  for (const item of arr) {
    if (item === null) {
      if (!inNullSequence) {
        result.push('…');
        inNullSequence = true;
      }
    } else {
      result.push(item);
      inNullSequence = false;
    }
  }

  return result;
}
