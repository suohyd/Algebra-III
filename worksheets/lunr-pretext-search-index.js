var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Abhay Soman School of Mathematics and Statistics University of Hyderabad  Last Updated:       "
},
{
  "id": "activity-tutorial-1",
  "level": "1",
  "url": "activity-tutorial-1.html",
  "type": "Worksheet",
  "number": "",
  "title": "Tutorial-1",
  "body": " Tutorial-1   Following exercises are taken from Section 13.1 of the book Abstract Algebra by Dummit and Foote.      Show that is irreducible in . If is a root of this polynomial, compute , and in .      Show that is irreducible over , and let be its root. Compute the powers of in . Find the degree of the field extension .      Show that if is a root of a monic polynomial in , then .      Show that is irreducible for all .     "
},
{
  "id": "activity-tutorial-1-3-1",
  "level": "2",
  "url": "activity-tutorial-1.html#activity-tutorial-1-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Show that is irreducible in . If is a root of this polynomial, compute , and in .   "
},
{
  "id": "activity-tutorial-1-3-2",
  "level": "2",
  "url": "activity-tutorial-1.html#activity-tutorial-1-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Show that is irreducible over , and let be its root. Compute the powers of in . Find the degree of the field extension .   "
},
{
  "id": "activity-tutorial-1-3-3",
  "level": "2",
  "url": "activity-tutorial-1.html#activity-tutorial-1-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Show that if is a root of a monic polynomial in , then .   "
},
{
  "id": "activity-tutorial-1-3-4",
  "level": "2",
  "url": "activity-tutorial-1.html#activity-tutorial-1-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Show that is irreducible for all .   "
},
{
  "id": "activity-tutorial-2",
  "level": "1",
  "url": "activity-tutorial-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Tutorial-2",
  "body": " Tutorial-2   Following exercises are taken from Section 13.2 of the book Abstract Algebra by Dummit and Foote.      Let be a finite field of characteristic . Show that the number of elements in is for some natural number .      Suppose that and . Obtain fields of cardinality and by adjoining roots of either or to or .      Find the minimal polynomial of over .      Determine the following degrees.       Show that and are irreducible over .     "
},
{
  "id": "activity-tutorial-2-3-1",
  "level": "2",
  "url": "activity-tutorial-2.html#activity-tutorial-2-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let be a finite field of characteristic . Show that the number of elements in is for some natural number .   "
},
{
  "id": "activity-tutorial-2-3-2",
  "level": "2",
  "url": "activity-tutorial-2.html#activity-tutorial-2-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Suppose that and . Obtain fields of cardinality and by adjoining roots of either or to or .   "
},
{
  "id": "activity-tutorial-2-3-3",
  "level": "2",
  "url": "activity-tutorial-2.html#activity-tutorial-2-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Find the minimal polynomial of over .   "
},
{
  "id": "activity-tutorial-2-3-4",
  "level": "2",
  "url": "activity-tutorial-2.html#activity-tutorial-2-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Determine the following degrees.    "
},
{
  "id": "activity-tutorial-2-3-5",
  "level": "2",
  "url": "activity-tutorial-2.html#activity-tutorial-2-3-5",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Show that and are irreducible over .   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
