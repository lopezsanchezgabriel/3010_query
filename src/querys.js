/*Comenzaremos con las querys de los ejemplos 
que aparecen en la documentación*/

/*Los materiales con status igual a D */
db.inventory.find( { status: "D" } )

/*Los materiales con status igual a la siguiente lista [A, D] */
db.inventory.find( { status: { $in: [ "A", "D" ] } } )


/*Los materiales con status igual a A y qty menor a 30 (AND implícito)*/
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

/*Los materiales con status igual a A o qty menor a 30 (OR explícito)*/
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

/*Los materiales con status igual a A y, que tengan una qty menor a 30 
o empiecen por la letra p (AND implícito y OR explícito)*/
db.inventory.find( {
    status: "A",
    $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )


/*Materiales que, no tengan el campo size y su status sea D, o tengan
el campo size y su uom sea in (3, OR explícito y, AND implícito y 
explícito)*/
db.inventory.find( 
    { $or: [ 
        {size: { $exists: false }, status: "D" }, 
        {$and: [ { size: { $exists: true } }, { "size.uom": "in" } ] } ] 
} )

/*Materiales que empiecen por pe y su status sea C (AND explícito)*/
db.inventory.find( 
        {$and: [ { item: { $regex: /^pe/ } }, { status: "C" } ]
} )

