/**
 * Daily Challenge #226 - Array to HTML Table
 * https://dev.to/thepracticaldev/daily-challenge-226-array-to-html-table-3c52
 */

function toTable(data: string[][], headers = false, index = false): HTMLTableElement {
  const tableEl = document.createElement('table');

  if (index) {
    data.forEach((row, idx) => row.unshift(idx.toString()));
  }

  if (headers) {
    const headersData = data.splice(0, 1)[0];

    if (index) {
      headersData[0] = '';
    }

    const theadElement = tableEl.createTHead();
    theadElement.append(createTableRow('th', headersData));
  }

  const tbodyElement = tableEl.createTBody();
  for (const rowData of data) {
    tbodyElement.append(createTableRow('td', rowData));
  }

  return tableEl;
}

function createTableRow(el: 'td' | 'th', data: string[]): HTMLTableRowElement {
  const rowElement = document.createElement('tr');

  for (const d of data) {
    rowElement.append(createTableCell(el, d));
  }

  return rowElement;
}

function createTableCell(
  el: 'td' | 'th',
  content: string
): HTMLTableCellElement | HTMLTableHeaderCellElement {
  const cellElement = document.createElement(el);
  cellElement.textContent = content;
  return cellElement;
}

console.log(
  toTable(
    [
      ['lorem', 'ipsum'],
      ['dolor', 'sit amet'],
      ['dolor', 'sit amet'],
      ['dolor', 'sit amet']
    ],
    true,
    true
  ).outerHTML
);
