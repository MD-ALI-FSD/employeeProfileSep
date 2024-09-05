require("dotenv").config();
const axios = require("axios");

const { getService } = require("./util/serviceOperation");

const getPromotionHistory = async (req) => {
  console.log("inside promotion history");
  const oSrv = await getService("sf_api_service");

  // Extract filter parameters from the request
  const { userId, event, fromDate } = req.data;
  console.log("userId event fromDarw==>", userId, event, fromDate);
  // Format the date into the required OData format
  const formattedDate = new Date("1990-01-01T00:00:00Z").toISOString();
  // Build CAP query
  const query = SELECT.from("EmpJob").where({
    userId: "556393",
    event: "29498",
    lastModifiedOn: { ">=": "1990-01-01" },
  });

  // Execute the query using the service transaction context
  const results = await oSrv.tx(req).run(query);
  console.log("promotion history results==>", results);
  return results;
};

module.exports = { getPromotionHistory };
