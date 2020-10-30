/*Se añadirán todos los documentos del los ejemplos 
junto con otros nuevos*/
db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    { item: "ebook", qty: 80, size: { h: 8, w: 10, uom: "cm" }, status: "B" },
    { item: "pen", qty: 100, status: "D" },
    { item: "pencil", qty: 100, status: "C" },
    { item: "eraser", qty: 7,  status: "B" },
    { item: "clipboard", qty: 60, size: { h: 27, w: 18, uom: "cm" }, status: "C" },
    { item: "marker", qty: 32,  status: "C" },
    { item: "scissors", qty: 94,  status: "B" },
    { item: "envelopes", qty: 19, size: { h: 6, w: 9, uom: "cm" }, status: "E" },
 ]);
 