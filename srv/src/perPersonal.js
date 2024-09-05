const { getService } = require("./util/serviceOperation");
const getPerPersonal = async (req) => {
  console.log("perpersonal new");
  const { PerPersonal } = cds.entities;
  const oSrv = await getService("sf_api_service");

  // Parse the query parameters
  const queryParams = req.query;
  console.log("queryParams==>", queryParams);

  // Extract the 'personIdExternal' from the query parameters
  let personIdExternal;
  if (queryParams.$filter) {
    // Assuming the filter format is "$filter=personIdExternal eq 'value'"
    const filterMatch = queryParams.$filter.match(
      /personIdExternal eq '([^']+)'/
    );
    if (filterMatch) {
      personIdExternal = filterMatch[1];
    }
  }

  console.log("personIdExternal==>", personIdExternal);

  // Construct the query based on the extracted personIdExternal
  let query;
  if (personIdExternal) {
    query = SELECT.from(PerPersonal)
      .where({ personIdExternal: personIdExternal })
      .columns("displayName", "personIdExternal", "maritalStatus", {
        maritalStatusNav: "*",
      });
  } else {
    query = SELECT.from(PerPersonal).columns(
      "displayName",
      "personIdExternal",
      "maritalStatus",
      {
        maritalStatusNav: "*",
      }
    );
  }

  // Execute the query
  const response = await oSrv.tx(req).run(query);
  return response;

  return oSrv.tx(req).run(req.query);
};

module.exports = { getPerPersonal };
