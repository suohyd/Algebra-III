var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-polynomials",
  "level": "1",
  "url": "sec-polynomials.html",
  "type": "Section",
  "number": "",
  "title": "Polynomials",
  "body": " Polynomials  Let be a ring with unity. We give definition of a polynomial in one variable with coefficients in a ring .   Polynomial in one variable   A polynomial in one variable with coefficients in a ring is defined as a map such that the image of under is denoted by and the set is finite.      Given we define such that and for all .      We define such that and for all .     Ring of polynomials   For two polynomials their addition, is defined as the addition of functions, i.e., . Their product is defined as follows:   The set of all polynomials in one indeterminate with coefficients in a ring is denoted by . The set is a ring with unity, where the unity is the polynomial such that and for all .     Note that every polynomial can be uniquely written as . So, from now onwards write for the polynomial that maps to for and to for .  As usual, for a nonzero polynomial the largest integer for which the coefficient of is not zero is called the leading coefficient of and is called the degree of . A polynomial is called a monic polynomial if the leading coefficient is .    Polynomial function   Let be a ring and let be a polynomial in . The polynomial function is defined as follows:      Root of a polynomial   Keep notation as in . An element is called a root of the polynomial if .      Convince yourself that the usual definition given in terms of formal sums of monomials is equivalent to the definition given above.      Convince yourself that distinguishes a polynomial and a polynomial function.  Indeed, let be a finite field. The polynomial is not a zero polynomial, but the polynomial function is a zero function.     Ring of polynomials in several variables   Let . The ring of polynomials in variables with coefficients in a ring is denoted by . It is defined in a similar way as above .    We state the following theorem without proof. The proof is similar to the proof of the division algorithm in field case.   Euclidean Division   Let be a commutative ring with unity and be polynomials. If the leading coefficient of is invertible in , then there exist unique polynomials such that and .      Let . We show that divides .  Suppose that . Note that . As is a monic polynomial in , there exists such that with . Therefore, for all . As is an infinite field, we get that . Hence, by separating the odd and the even degree terms, we get that , i.e., . Therefore, divides .      Let be a commutative ring with unity. Show that is a root of a polynomial if and only if divides .    "
},
{
  "id": "def-polynomial",
  "level": "2",
  "url": "sec-polynomials.html#def-polynomial",
  "type": "Definition",
  "number": "1",
  "title": "Polynomial in one variable.",
  "body": " Polynomial in one variable   A polynomial in one variable with coefficients in a ring is defined as a map such that the image of under is denoted by and the set is finite.   "
},
{
  "id": "sec-polynomials-4",
  "level": "2",
  "url": "sec-polynomials.html#sec-polynomials-4",
  "type": "Example",
  "number": "2",
  "title": "",
  "body": "  Given we define such that and for all .   "
},
{
  "id": "sec-polynomials-5",
  "level": "2",
  "url": "sec-polynomials.html#sec-polynomials-5",
  "type": "Example",
  "number": "3",
  "title": "",
  "body": "  We define such that and for all .   "
},
{
  "id": "def-ring-of-polynomials",
  "level": "2",
  "url": "sec-polynomials.html#def-ring-of-polynomials",
  "type": "Definition",
  "number": "4",
  "title": "Ring of polynomials.",
  "body": " Ring of polynomials   For two polynomials their addition, is defined as the addition of functions, i.e., . Their product is defined as follows:   The set of all polynomials in one indeterminate with coefficients in a ring is denoted by . The set is a ring with unity, where the unity is the polynomial such that and for all .   "
},
{
  "id": "sec-polynomials-7",
  "level": "2",
  "url": "sec-polynomials.html#sec-polynomials-7",
  "type": "Remark",
  "number": "5",
  "title": "",
  "body": " Note that every polynomial can be uniquely written as . So, from now onwards write for the polynomial that maps to for and to for .  As usual, for a nonzero polynomial the largest integer for which the coefficient of is not zero is called the leading coefficient of and is called the degree of . A polynomial is called a monic polynomial if the leading coefficient is .  "
},
{
  "id": "def-polynomial-function",
  "level": "2",
  "url": "sec-polynomials.html#def-polynomial-function",
  "type": "Definition",
  "number": "6",
  "title": "Polynomial function.",
  "body": " Polynomial function   Let be a ring and let be a polynomial in . The polynomial function is defined as follows:    "
},
{
  "id": "def-root-of-a-polynomial",
  "level": "2",
  "url": "sec-polynomials.html#def-root-of-a-polynomial",
  "type": "Definition",
  "number": "7",
  "title": "Root of a polynomial.",
  "body": " Root of a polynomial   Keep notation as in . An element is called a root of the polynomial if .   "
},
{
  "id": "sec-polynomials-10",
  "level": "2",
  "url": "sec-polynomials.html#sec-polynomials-10",
  "type": "Checkpoint",
  "number": "8",
  "title": "",
  "body": "  Convince yourself that the usual definition given in terms of formal sums of monomials is equivalent to the definition given above.   "
},
{
  "id": "sec-polynomials-11",
  "level": "2",
  "url": "sec-polynomials.html#sec-polynomials-11",
  "type": "Checkpoint",
  "number": "9",
  "title": "",
  "body": "  Convince yourself that distinguishes a polynomial and a polynomial function.  Indeed, let be a finite field. The polynomial is not a zero polynomial, but the polynomial function is a zero function.   "
},
{
  "id": "def-ring-of-polynomials-in-several-variables",
  "level": "2",
  "url": "sec-polynomials.html#def-ring-of-polynomials-in-several-variables",
  "type": "Definition",
  "number": "10",
  "title": "Ring of polynomials in several variables.",
  "body": " Ring of polynomials in several variables   Let . The ring of polynomials in variables with coefficients in a ring is denoted by . It is defined in a similar way as above .   "
},
{
  "id": "thm-euclidean-division",
  "level": "2",
  "url": "sec-polynomials.html#thm-euclidean-division",
  "type": "Theorem",
  "number": "11",
  "title": "Euclidean Division.",
  "body": " Euclidean Division   Let be a commutative ring with unity and be polynomials. If the leading coefficient of is invertible in , then there exist unique polynomials such that and .   "
},
{
  "id": "sec-polynomials-15",
  "level": "2",
  "url": "sec-polynomials.html#sec-polynomials-15",
  "type": "Example",
  "number": "12",
  "title": "",
  "body": "  Let . We show that divides .  Suppose that . Note that . As is a monic polynomial in , there exists such that with . Therefore, for all . As is an infinite field, we get that . Hence, by separating the odd and the even degree terms, we get that , i.e., . Therefore, divides .   "
},
{
  "id": "sec-polynomials-16",
  "level": "2",
  "url": "sec-polynomials.html#sec-polynomials-16",
  "type": "Checkpoint",
  "number": "13",
  "title": "",
  "body": "  Let be a commutative ring with unity. Show that is a root of a polynomial if and only if divides .   "
},
{
  "id": "sec-characteristic-of-ring",
  "level": "1",
  "url": "sec-characteristic-of-ring.html",
  "type": "Section",
  "number": "",
  "title": "Characteristic of a ring",
  "body": " Characteristic of a ring  In this section we define the characteristic of a ring that contains a subfield .    Let be a unique ring homomorphism. The kernel of is generated by the unique positive integer , . The integer is called the characteristic of .      Find the characteristic of the following fields.       Find the characteristic of the following rings.     "
},
{
  "id": "def-characteristic-of-ring",
  "level": "2",
  "url": "sec-characteristic-of-ring.html#def-characteristic-of-ring",
  "type": "Definition",
  "number": "14",
  "title": "",
  "body": "  Let be a unique ring homomorphism. The kernel of is generated by the unique positive integer , . The integer is called the characteristic of .   "
},
{
  "id": "sec-characteristic-of-ring-4",
  "level": "2",
  "url": "sec-characteristic-of-ring.html#sec-characteristic-of-ring-4",
  "type": "Checkpoint",
  "number": "15",
  "title": "",
  "body": "  Find the characteristic of the following fields.    "
},
{
  "id": "sec-characteristic-of-ring-5",
  "level": "2",
  "url": "sec-characteristic-of-ring.html#sec-characteristic-of-ring-5",
  "type": "Checkpoint",
  "number": "16",
  "title": "",
  "body": "  Find the characteristic of the following rings.    "
},
{
  "id": "sec-prime-subfield",
  "level": "1",
  "url": "sec-prime-subfield.html",
  "type": "Section",
  "number": "",
  "title": "Prime subfield",
  "body": " Prime subfield  We begin with the definition of a prime subfield of a field .    A field is said to be prime if it is isomorphic to or to one of the finite fields .      Let be a ring with a subfield. Then has a unique subfield which is a prime field. Furthermore, is contained in every subfield of , and also in the center of .    Let be a unique ring homomorphism, and let be a subfield of . We put . Note that . Therefore, is either or it is generated by some prime number . If , then is injective and can be extended to a field isomomorphism of with a subfield . If then, defines an isomorphism from to a subfield .    "
},
{
  "id": "def-prime-subfield",
  "level": "2",
  "url": "sec-prime-subfield.html#def-prime-subfield",
  "type": "Definition",
  "number": "17",
  "title": "",
  "body": "  A field is said to be prime if it is isomorphic to or to one of the finite fields .   "
},
{
  "id": "thm-prime-subfield",
  "level": "2",
  "url": "sec-prime-subfield.html#thm-prime-subfield",
  "type": "Theorem",
  "number": "18",
  "title": "",
  "body": "  Let be a ring with a subfield. Then has a unique subfield which is a prime field. Furthermore, is contained in every subfield of , and also in the center of .    Let be a unique ring homomorphism, and let be a subfield of . We put . Note that . Therefore, is either or it is generated by some prime number . If , then is injective and can be extended to a field isomomorphism of with a subfield . If then, defines an isomorphism from to a subfield .   "
},
{
  "id": "sec-F-algebra",
  "level": "1",
  "url": "sec-F-algebra.html",
  "type": "Section",
  "number": "",
  "title": "F-algebra",
  "body": " F-algebra  We begin by defining an -algebra, where is a field.    Let be a field. An -algebra or an algebra over a field is an associative ring with unity together with a ring homomorphism . The ring is also given an -vector space structure by defining the scalar multiplication .     Suppose that is an -algebra. Then, is both a ring and an -vector space. Furthermore, the ring and vector space structures are compatible, i.e., for and we have the following. Similarly, we have the following by using the fact that .   Therefore,     Note that for and we have . Also, . Hence, .        Let be a field. Then, the polynomial ring is an -algebra.    The ring of matrices with entries in , denoted by , is an -algebra.    If is a field extension, then is an -algebra.        Algebra homomorphism   Suppose that is a field and that are -algebras. An -algebra homomorphism from to is a ring homomorphism as well as an -linear map.     Evaluation as an algebra homomorphism   Let be a field extension, and let . The evaluation map given by is an -algebra homomorphism.    "
},
{
  "id": "def-F-algebra",
  "level": "2",
  "url": "sec-F-algebra.html#def-F-algebra",
  "type": "Definition",
  "number": "19",
  "title": "",
  "body": "  Let be a field. An -algebra or an algebra over a field is an associative ring with unity together with a ring homomorphism . The ring is also given an -vector space structure by defining the scalar multiplication .   "
},
{
  "id": "sec-F-algebra-4",
  "level": "2",
  "url": "sec-F-algebra.html#sec-F-algebra-4",
  "type": "Observation",
  "number": "20",
  "title": "",
  "body": " Suppose that is an -algebra. Then, is both a ring and an -vector space. Furthermore, the ring and vector space structures are compatible, i.e., for and we have the following. Similarly, we have the following by using the fact that .   Therefore,   "
},
{
  "id": "sec-F-algebra-5",
  "level": "2",
  "url": "sec-F-algebra.html#sec-F-algebra-5",
  "type": "Observation",
  "number": "21",
  "title": "",
  "body": " Note that for and we have . Also, . Hence, .  "
},
{
  "id": "sec-F-algebra-6",
  "level": "2",
  "url": "sec-F-algebra.html#sec-F-algebra-6",
  "type": "Example",
  "number": "22",
  "title": "",
  "body": "     Let be a field. Then, the polynomial ring is an -algebra.    The ring of matrices with entries in , denoted by , is an -algebra.    If is a field extension, then is an -algebra.      "
},
{
  "id": "def-algebra-homomorphism",
  "level": "2",
  "url": "sec-F-algebra.html#def-algebra-homomorphism",
  "type": "Definition",
  "number": "23",
  "title": "Algebra homomorphism.",
  "body": " Algebra homomorphism   Suppose that is a field and that are -algebras. An -algebra homomorphism from to is a ring homomorphism as well as an -linear map.   "
},
{
  "id": "ex-evaluation-map-as-algebra-homomorphism",
  "level": "2",
  "url": "sec-F-algebra.html#ex-evaluation-map-as-algebra-homomorphism",
  "type": "Example",
  "number": "24",
  "title": "Evaluation as an algebra homomorphism.",
  "body": " Evaluation as an algebra homomorphism   Let be a field extension, and let . The evaluation map given by is an -algebra homomorphism.   "
},
{
  "id": "sec-field-generated-by",
  "level": "1",
  "url": "sec-field-generated-by.html",
  "type": "Section",
  "number": "",
  "title": "Field generated by a subset",
  "body": " Field generated by a subset    Let be an extension of fields and be a subset of .   The ring generated by is the intersection of all subrings of containing , denoted by . If then, we write .    The field generated by is the intersection of all subfields of containing , denoted by . If then, we write .         Let be a field extension, and let . Then, and      Consider the evaluation -algebra homomorphism given by . The image of this homomorphism is a subring of containing . By the closure of addition and multiplication the image of is contained in every subring of containing and . Thus, the image of is the ring generated by , i.e., .  A similar argument shows the statement about .    Keep the notations of the above . If the kernel of the evaluation homomorphism (note that as ring homomorphisms maps unity to unity and that is not a zero ring) then, is a field. Therefore, we ge that  The is nonzero (resp. zero) if and only if is a root of some nonzero polynomial in , i.e., is algebraic (resp., transcendental) over .    "
},
{
  "id": "def-field-generated-by-a-subset",
  "level": "2",
  "url": "sec-field-generated-by.html#def-field-generated-by-a-subset",
  "type": "Definition",
  "number": "25",
  "title": "",
  "body": "  Let be an extension of fields and be a subset of .   The ring generated by is the intersection of all subrings of containing , denoted by . If then, we write .    The field generated by is the intersection of all subfields of containing , denoted by . If then, we write .      "
},
{
  "id": "prop-field-generated-by-a-subset",
  "level": "2",
  "url": "sec-field-generated-by.html#prop-field-generated-by-a-subset",
  "type": "Proposition",
  "number": "26",
  "title": "",
  "body": "  Let be a field extension, and let . Then, and    "
},
{
  "id": "sec-field-generated-by-4",
  "level": "2",
  "url": "sec-field-generated-by.html#sec-field-generated-by-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Consider the evaluation -algebra homomorphism given by . The image of this homomorphism is a subring of containing . By the closure of addition and multiplication the image of is contained in every subring of containing and . Thus, the image of is the ring generated by , i.e., .  A similar argument shows the statement about .  "
},
{
  "id": "sec-field-generated-by-5",
  "level": "2",
  "url": "sec-field-generated-by.html#sec-field-generated-by-5",
  "type": "Remark",
  "number": "27",
  "title": "",
  "body": " Keep the notations of the above . If the kernel of the evaluation homomorphism (note that as ring homomorphisms maps unity to unity and that is not a zero ring) then, is a field. Therefore, we ge that  The is nonzero (resp. zero) if and only if is a root of some nonzero polynomial in , i.e., is algebraic (resp., transcendental) over .   "
},
{
  "id": "sec-field-extensions",
  "level": "1",
  "url": "sec-field-extensions.html",
  "type": "Section",
  "number": "",
  "title": "Field extensions",
  "body": " Field extensions    Suppose that is an isomorphism of fields. Let be an irreducible polynomial and let be a polynomial obtained from by applying to coefficients of . If (resp., ) is a root of (resp., ) in some field extension of (resp., ), then there is an isomorphism mapping to and .     Note that is also irreducible. Indeed, induces an isomorphism of rings by defining . Furthermore, this isomorphism induces an isomorphism of given by . In the following diagram, we can consider the isomorphism .          Degree of a tower of field extensions   Suppose that and , where is a primitive cube root of unity. Suppose that and that . We show that .  First of all note that and hence . Furthermore, is the minimal polynomial of over and hence , and is a basis of . The minimal polynomial of over is , which is irreducible over since it has no roots in . Therefore, , and is a basis of .  We claim that is a basis of . Let . There exists a unique such that . Furthermore, there exists a unique and , for such that and . In particular, we can write . This shows that can be expressed as a linear combination of the elements in . Hence, this set spans over . To show that it is linearly independent, suppose that there are such that As is a basis of over , we get that Using the fact that is a basis of over , we get that and for all . This shows that .      Let be a field and let be an algebraic closure of . If is an algebraic field extension, then there exists an embedding which is the identity on .     Let . This is a nonempty set as , where is the inclusion map. We define a partial order on by setting if and . Suppose that is a chain in . Then, is a field and we define if . One may verify that is a well-defined embedding which is identity on . So, we can apply Zorn's lemma to get a maximal element . We claim that . Indeed, if then, is algebraic over . Let be the minimal polynomial of over . By using , we may take as an algebraic closure of . Suppose that is a root of . Hence, there is an embedding extending . Since, , we get an embedding . By the maximality of we conclude that . As was arbitrary, we get that .    Uniqueness of algebraic closure   Let be a field and let and be two algebraic closures of . Then, there exists an isomorphism such that .     We apply with , to get an embedding which is the identity on . By the isomorphism theorem , and hence is algebraically closed. However, is an algebraic extension. This shows that , and hence is a required isomorphism.     Let be an algebraic field extension and let be algebraically closed field. Show that .    "
},
{
  "id": "thm-iso-simple-field-extensions",
  "level": "2",
  "url": "sec-field-extensions.html#thm-iso-simple-field-extensions",
  "type": "Theorem",
  "number": "28",
  "title": "",
  "body": "  Suppose that is an isomorphism of fields. Let be an irreducible polynomial and let be a polynomial obtained from by applying to coefficients of . If (resp., ) is a root of (resp., ) in some field extension of (resp., ), then there is an isomorphism mapping to and .   "
},
{
  "id": "sec-field-extensions-3",
  "level": "2",
  "url": "sec-field-extensions.html#sec-field-extensions-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Note that is also irreducible. Indeed, induces an isomorphism of rings by defining . Furthermore, this isomorphism induces an isomorphism of given by . In the following diagram, we can consider the isomorphism .        "
},
{
  "id": "ex-degree-of-field-extension",
  "level": "2",
  "url": "sec-field-extensions.html#ex-degree-of-field-extension",
  "type": "Example",
  "number": "30",
  "title": "Degree of a tower of field extensions.",
  "body": " Degree of a tower of field extensions   Suppose that and , where is a primitive cube root of unity. Suppose that and that . We show that .  First of all note that and hence . Furthermore, is the minimal polynomial of over and hence , and is a basis of . The minimal polynomial of over is , which is irreducible over since it has no roots in . Therefore, , and is a basis of .  We claim that is a basis of . Let . There exists a unique such that . Furthermore, there exists a unique and , for such that and . In particular, we can write . This shows that can be expressed as a linear combination of the elements in . Hence, this set spans over . To show that it is linearly independent, suppose that there are such that As is a basis of over , we get that Using the fact that is a basis of over , we get that and for all . This shows that .   "
},
{
  "id": "prop-embedding-into-algebraic-closure",
  "level": "2",
  "url": "sec-field-extensions.html#prop-embedding-into-algebraic-closure",
  "type": "Proposition",
  "number": "31",
  "title": "",
  "body": "  Let be a field and let be an algebraic closure of . If is an algebraic field extension, then there exists an embedding which is the identity on .   "
},
{
  "id": "sec-field-extensions-6",
  "level": "2",
  "url": "sec-field-extensions.html#sec-field-extensions-6",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Let . This is a nonempty set as , where is the inclusion map. We define a partial order on by setting if and . Suppose that is a chain in . Then, is a field and we define if . One may verify that is a well-defined embedding which is identity on . So, we can apply Zorn's lemma to get a maximal element . We claim that . Indeed, if then, is algebraic over . Let be the minimal polynomial of over . By using , we may take as an algebraic closure of . Suppose that is a root of . Hence, there is an embedding extending . Since, , we get an embedding . By the maximality of we conclude that . As was arbitrary, we get that .  "
},
{
  "id": "thm-uniqueness-of-algebraic-closure",
  "level": "2",
  "url": "sec-field-extensions.html#thm-uniqueness-of-algebraic-closure",
  "type": "Theorem",
  "number": "32",
  "title": "Uniqueness of algebraic closure.",
  "body": " Uniqueness of algebraic closure   Let be a field and let and be two algebraic closures of . Then, there exists an isomorphism such that .   "
},
{
  "id": "sec-field-extensions-8",
  "level": "2",
  "url": "sec-field-extensions.html#sec-field-extensions-8",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": " We apply with , to get an embedding which is the identity on . By the isomorphism theorem , and hence is algebraically closed. However, is an algebraic extension. This shows that , and hence is a required isomorphism.  "
},
{
  "id": "sec-field-extensions-9",
  "level": "2",
  "url": "sec-field-extensions.html#sec-field-extensions-9",
  "type": "Checkpoint",
  "number": "33",
  "title": "",
  "body": "  Let be an algebraic field extension and let be algebraically closed field. Show that .   "
},
{
  "id": "sec-normal-extension",
  "level": "1",
  "url": "sec-normal-extension.html",
  "type": "Section",
  "number": "",
  "title": "Normal field extension",
  "body": " Normal field extension   Normal field extension   A field extension is said to be a normal field extension if is the splitting field of some family of polynomials in .     If is a normal field extension then, is algebraic.     The following are equivalent for a field extension :     is a normal extension.    If is an -embedding of into an algebraic closure of containing then, is an automorphism of .    Every irreducible polynomial in that has at least one root in completely splits in .       Suppose that is a normal extension, and that is an -embedding of into an algebraic closure of . We need to show that is an automorphism of . Assume that is a splitting field of . Therefore, is also a splitting field of over . As and are generated over by the same roots, we have .  Now assume that every -embedding of is an automorphism of . Let be an irreducible polynomial with a root . For any other root there is an isomomorphism given by and for all . By the extension theorem for field homomorphisms, extends to an -embedding . By our assumption, is an automorphism of . Therefore, . Thus, every root of lies in .   "
},
{
  "id": "def-normal-field-extension",
  "level": "2",
  "url": "sec-normal-extension.html#def-normal-field-extension",
  "type": "Definition",
  "number": "34",
  "title": "Normal field extension.",
  "body": " Normal field extension   A field extension is said to be a normal field extension if is the splitting field of some family of polynomials in .   "
},
{
  "id": "normal-implies-algebraic",
  "level": "2",
  "url": "sec-normal-extension.html#normal-implies-algebraic",
  "type": "Note",
  "number": "35",
  "title": "",
  "body": " If is a normal field extension then, is algebraic.  "
},
{
  "id": "thm-equivalent-conditions-normal-field-extension",
  "level": "2",
  "url": "sec-normal-extension.html#thm-equivalent-conditions-normal-field-extension",
  "type": "Theorem",
  "number": "36",
  "title": "",
  "body": "  The following are equivalent for a field extension :     is a normal extension.    If is an -embedding of into an algebraic closure of containing then, is an automorphism of .    Every irreducible polynomial in that has at least one root in completely splits in .     "
},
{
  "id": "sec-normal-extension-5",
  "level": "2",
  "url": "sec-normal-extension.html#sec-normal-extension-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Suppose that is a normal extension, and that is an -embedding of into an algebraic closure of . We need to show that is an automorphism of . Assume that is a splitting field of . Therefore, is also a splitting field of over . As and are generated over by the same roots, we have .  Now assume that every -embedding of is an automorphism of . Let be an irreducible polynomial with a root . For any other root there is an isomomorphism given by and for all . By the extension theorem for field homomorphisms, extends to an -embedding . By our assumption, is an automorphism of . Therefore, . Thus, every root of lies in .  "
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
