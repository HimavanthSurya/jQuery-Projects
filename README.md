# jQuery-Projects

- __Attribute-Based Selectors__
  - [attribute]
  - [attribute=value] --> $("[id = first]")
  - [attribute != value]
  - [attribute ^= value]
  - [attribute $= value]
  - $[attribute *= value]
  - $[attribute |= value]
  - $[attribute ~=value]
- __position-based selectors__
  - `$('li:eq(2)')          // Selects the third <li> element (index 2) within the matched set`
  - `$('li:gt(2)')          // Selects all <li> elements with an index greater than 2`
  - `$('li:lt(2)')          // Selects the first two <li> elements (index 0 and 1) within the matched set`
  - `$('li:even')           // Selects all <li> elements at even indexes`
  - `$('li:odd')            // Selects all <li> elements at odd indexes`
  - `$('li:first')          // Selects the first <li> element within the matched set`
  - `$('li:last')           // Selects the last <li> element within the matched set`
  - `$('li:not(.special)')  // Selects all <li> elements that do not have the class "special"`
