require("dotenv").config();
const axios = require("axios");

const { getService } = require("./util/serviceOperation");
const getDetails = async (req) => {
  const oSrv = await getService("sf_api_service");
  return oSrv.tx(req).run(req.query);
};

module.exports = { getDetails };
