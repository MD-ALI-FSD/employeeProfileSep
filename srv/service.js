require("dotenv").config();
const Buffer = require("buffer").Buffer;

const axios = require("axios");
const cds = require("@sap/cds"); // Importing the cds module.
const { getJobRequisition } = require("./src/jobRequisition");
const { getUsersDetails } = require("./src/user");
const { getPerPersonal } = require("./src/perPersonal");
const { getJobApplication } = require("./src/jobApplication"); // Import the handler
const { getJobApplicationInterview } = require("./src/jobApplicationInterview"); // Import the handler
const { getPositionsDetails } = require("./src/position"); // Import the handler
const { getDetails } = require("./src/details");
const { getPromotionHistory } = require("./src/promotionHistory");

module.exports = cds.service.impl(async (srv) => {
  // Getting the entities from the services.
  const {
    User,
    JobApplicationInterview,
    Position,
    PerPerson,
    PerPersonal,
    InsideWorkExperience,
    OutsideWorkExperience,
    Photo,
    EventReasonNav,
    EmpJob,
    Background_Education,
    Education,
    PicklistLabel,
    PickListValueV2,
    PicklistOption,
    Training,
    PerformanceEvaluation,
    PerformanceHistory,
    Phone,
    Email,
    NineBoxRating,
    Dependents,
  } = srv.entities;

  srv.on("READ", User, getUsersDetails);
  srv.on("READ", Position, getPositionsDetails);
  srv.on("READ", PerPerson, getDetails);
  srv.on("READ", PerPersonal, getDetails);
  srv.on("READ", InsideWorkExperience, getDetails);
  srv.on("READ", OutsideWorkExperience, getDetails);
  srv.on("READ", Photo, getDetails);
  srv.on("READ", EventReasonNav, getDetails);

  // srv.on("READ", FOPayGrade, getDetails);
  srv.on("READ", Background_Education, getDetails);
  srv.on("READ", Education, getDetails);
  srv.on("READ", PicklistLabel, getDetails);
  srv.on("READ", PickListValueV2, getDetails);
  srv.on("READ", PicklistOption, getDetails);
  srv.on("READ", Training, getDetails);
  srv.on("READ", PerformanceEvaluation, getDetails);
  srv.on("READ", PerformanceHistory, getDetails);
  srv.on("READ", Phone, getDetails);
  srv.on("READ", Email, getDetails);
  srv.on("READ", NineBoxRating, getDetails);
  srv.on("READ", Dependents, getDetails);

  srv.on(
    ["CREATE", "UPDATE"],
    JobApplicationInterview,
    getJobApplicationInterview
  );

  // New handler for EmpJob to proxy the API call1
  srv.on("READ", EmpJob, async (req) => {
    console.log("inside EmpJobPromotionHistory");

    // const userId = req.query.userId;
    const filterObject = req.req.query;
    const userIdString = filterObject["$filter"];

    const match = userIdString.match(/userId eq '([^']+)'/);
    let userId;
    if (match && match[1]) {
      userId = match[1];
      console.log("userId inside id==>", userId); // Output: 556393
    }
    console.log("Received userId:", userId);

    try {
      // API call to SuccessFactors
      const response = await axios.get(
        `https://api22preview.sapsf.com/odata/v2/EmpJob?$filter=userId eq '${userId}' and (eventReason eq 'PROM01' or eventReason eq 'PROM03' or eventReason eq 'TRAS01' or eventReason eq 'TRAS02' or eventReason eq 'TRAS03' or eventReason eq 'TRAS04' or eventReason eq 'TRAS05' or eventReason eq 'TRAS06' or eventReason eq 'TRAS09' or eventReason eq 'TRAS13' or eventReason eq 'TRAS15' or eventReason eq 'TRAS16' or eventReason eq 'DATA03' or eventReason eq 'DATA07' or eventReason eq 'AS01' or eventReason eq 'HIRENEW' or eventReason eq 'HIREEXT12')&fromDate=1900-01-01&$expand=positionNav,employeeClassNav,eventReasonNav,departmentNav,payGradeNav,eventReasonNav/nameTranslationNav&$format=json`,
        {
          headers: {
            Authorization: process.env.MOFA_OAUTH_TOKEN,
          },
        }
      );

      // const response = await axios.get(
      //   `https://api22preview.sapsf.com/odata/v2/EmpJob?$filter=userId eq ${userId} and event eq '29498'&fromDate=1990-01-01&$format=json&$expand=positionNav,employeeClassNav,payGradeNav,departmentNav`,
      //   {
      //     headers: {
      //       Authorization: process.env.MOFA_OAUTH_TOKEN,
      //     },
      //   }
      // );

      // console.log("empJob results==>", response.data.d.results);
      // Process and return the data as required
      return response.data.d.results; // Adjust based on the API response structure
    } catch (error) {
      console.error("Error fetching EmpJob data:", error);
      req.error(500, "Failed to fetch EmpJob data from SuccessFactors API");
    }
  });
});

//In your SAP CAP (Cloud Application Programming) service implementation, srv.entities represents the entities defined in your CDS(Core Data Services) model. When you define your data model using CDS, these entities are automatically made available in the service context (srv) when the service is implemented.
//Here's a breakdown of how it all ties together:
//CDS Model Definition:
//You define your data model using CDS in .cds files. This typically includes entity definitions, relationships, and other data model aspects.
