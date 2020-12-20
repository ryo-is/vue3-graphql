/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./graphql/schema.gql":
/*!****************************!*\
  !*** ./graphql/schema.gql ***!
  \****************************/
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"hello"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"test"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]}],"loc":{"start":0,"end":45}};
    doc.loc.source = {"body":"type Query {\n  hello: String\n  test: String\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
const schema_gql_1 = __importDefault(__webpack_require__(/*! ../graphql/schema.gql */ "./graphql/schema.gql"));
const resolvers = {
    Query: {
        hello: () => {
            return 'hello qraphql!!!';
        },
        test: () => {
            return 'Start QraphQL!!!';
        },
    },
};
const server = new apollo_server_express_1.ApolloServer({ typeDefs: schema_gql_1.default, resolvers });
const app = express_1.default();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});


/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-express");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi9ncmFwaHFsL3NjaGVtYS5ncWwiLCJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3NlcnZlci9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovL3NlcnZlci9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9zZXJ2ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2VydmVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsZUFBZSxrQ0FBa0Msc0NBQXNDLDhCQUE4Qiw0Q0FBNEMsaUNBQWlDLDhCQUE4Qix3QkFBd0IsMkJBQTJCLGdDQUFnQyxpQkFBaUIsRUFBRSxpQ0FBaUMsNkJBQTZCLHdCQUF3QiwyQkFBMkIsZ0NBQWdDLGlCQUFpQixFQUFFLFNBQVM7QUFDbmYsc0JBQXNCLG9CQUFvQixvQ0FBb0MsNkNBQTZDOzs7QUFHM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsaUZBQThCO0FBQzlCLDBHQUFxRDtBQUNyRCwrR0FBNkM7QUFRN0MsTUFBTSxTQUFTLEdBQUc7SUFDaEIsS0FBSyxFQUFFO1FBQ0wsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUNWLE9BQU8sa0JBQWtCLENBQUM7UUFDNUIsQ0FBQztRQUNELElBQUksRUFBRSxHQUFHLEVBQUU7WUFDVCxPQUFPLGtCQUFrQixDQUFDO1FBQzVCLENBQUM7S0FDRjtDQUNGLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyxJQUFJLG9DQUFZLENBQUMsRUFBRSxRQUFRLEVBQVIsb0JBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBRXpELE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QixNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUVoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRTtJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUMvRSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDNUJILG1EOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPYmplY3RUeXBlRGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJRdWVyeVwifSxcImludGVyZmFjZXNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcImZpZWxkc1wiOlt7XCJraW5kXCI6XCJGaWVsZERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaGVsbG9cIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRlc3RcIn0sXCJhcmd1bWVudHNcIjpbXSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU3RyaW5nXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXX1dfV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjo0NX19O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwidHlwZSBRdWVyeSB7XFxuICBoZWxsbzogU3RyaW5nXFxuICB0ZXN0OiBTdHJpbmdcXG59XCIsXCJuYW1lXCI6XCJHcmFwaFFMIHJlcXVlc3RcIixcImxvY2F0aW9uT2Zmc2V0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxfX07XG4gIFxuXG4gICAgdmFyIG5hbWVzID0ge307XG4gICAgZnVuY3Rpb24gdW5pcXVlKGRlZnMpIHtcbiAgICAgIHJldHVybiBkZWZzLmZpbHRlcihcbiAgICAgICAgZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgaWYgKGRlZi5raW5kICE9PSAnRnJhZ21lbnREZWZpbml0aW9uJykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgdmFyIG5hbWUgPSBkZWYubmFtZS52YWx1ZVxuICAgICAgICAgIGlmIChuYW1lc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIFxuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGRvYztcbiAgICBcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCB0eXBlRGVmcyBmcm9tICcuLi9ncmFwaHFsL3NjaGVtYS5ncWwnO1xuXG4vLyBjb25zdCB0eXBlRGVmcyA9IGdxbGBcbi8vICAgdHlwZSBRdWVyeSB7XG4vLyAgICAgaGVsbG86IFN0cmluZ1xuLy8gICB9XG4vLyBgO1xuXG5jb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgaGVsbG86ICgpID0+IHtcbiAgICAgIHJldHVybiAnaGVsbG8gcXJhcGhxbCEhISc7XG4gICAgfSxcbiAgICB0ZXN0OiAoKSA9PiB7XG4gICAgICByZXR1cm4gJ1N0YXJ0IFFyYXBoUUwhISEnO1xuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHsgdHlwZURlZnMsIHJlc29sdmVycyB9KTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCB9KTtcblxuYXBwLmxpc3Rlbih7IHBvcnQ6IDQwMDAgfSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhg8J+agCBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDo0MDAwJHtzZXJ2ZXIuZ3JhcGhxbFBhdGh9YCk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=