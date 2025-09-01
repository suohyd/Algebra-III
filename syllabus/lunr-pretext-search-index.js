var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "#syllabus",
  "type": "Article",
  "number": "",
  "title": "Algebra-III",
  "body": " Algebra-III  MM 505     Abhay Soman School of Mathematics and Statistics University of Hyderabad  Last Updated:          Course Information     Course Description  An introduction to Galois Theory    Credits  4    Course Designations and Attributes     Breadth  Fields and Galois theory    Level  M.Sc.        Requisite  Students should have basic knowledge of group theory (Algebra-I course) and ring theory (Algebra-II course).    Instructional modality  In-person      Learning Outcomes     Define various notions from field extensions, for example algebraic, transcendental, normal separable, the degree of an extension, etc.    Identify and apply the above notions to various examples.    State and understand the Galois correspondence, and analyze some examples.    Understand how to apply the Galois correspondence to other areas in mathematics, like classical or algebraic geometry, or in commutative algebra.        Meeting Times and Locations  In LHC 2, CR 111, Tuesday Friday 10:00 11:00 am. On Monday the class will meet in LHC 2, CR 111, from 14:00 15:00.      Course Staff   Instructor   Abhay Soman      Title  Assistant Professor    Email   abhaysoman@uohyd.ac.in          Office Hours  Students are welcome to attend the office hour of the instructor from 16:00 17:00 on Tuesday and Friday.     Textbook and Other Required Materials     Textbook  The required course text is the Abstract Algebra by Dummit and Foote.        Assessments    Tests and Exams  This course will have three minor tests and a final major exam. Each minor exam will be of 20 marks and the major exam will be of 60 marks. The best two minor exam marks in addition to the major marks will be considered for the final grade. The dates and times for these assessments are:   Minor I  To be announced.    Minor II  To be announced.    Minor III  To be announced.    Major Exam  To be announced.         Grading  The grades will be assigned as per the following table. To be updated soon.    Marks  Grade    88 and above  A+    75 to 87  A    65 to 74  B+    58 to 64  B    50 to 57  C    40 to 49  D    39 and below  F       "
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
