//Change the serverBaseUrl to the URL of your server
const serverBaseUrl = "http://localhost:4004";
const workExpImg = "./images/suitcase.png";
const certificateImg = "./images/certificate.png";
const whiteBoardImg = "./images/whiteBoard.png";
const growthImg = "./images/growth.png";

//Detect the browser language
const userLang = navigator.language || navigator.userLanguage;
// var currentLanguage = userLang;
var currentLanguage = "ar-SA";
// en_US en-US
if (currentLanguage === "en-US") currentLanguage = "en_US";
else if (currentLanguage === "ar-SA") currentLanguage = "ar_SA";

//***************Fetching Data From Success Factor****************/
async function getSFPerPersonData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/PerPerson?$filter=personIdExternal eq '${Id}'`
    );
    // console.log("getSFPerPersonData==>", response.data.value);
    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getSFPerPersonalData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/PerPersonal?$filter=personIdExternal eq '${Id}'&$expand=maritalStatusNav,personNav,nativePreferredLangNav,salutationNav`
    );
    // console.log("PerPersonal SUCCESS FACTOR==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// getSFPerPersonalData(556393);

async function getSFEmpJobData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/EmpJob?$filter=userId eq '${Id}'&$expand=positionNav,employeeClassNav`
    );
    // console.log("getSFEmpJobData==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// getSFEmpJobData(5679);
async function getSFEmpJobPromotionHistoryData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/EmpJob?$filter=userId eq '${Id}'`
    );

    console.log("getSFEmpJobPromotionHistoryDataaa==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getSFEmpJobPromotionHistoryData(556393);

async function getSFEmpJobFOPayGrade(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/FOPayGrade?$filter=internalCode eq ${Id}`
    );

    // console.log("getSFEmpJobFOPayGrade==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// getSFEmpJobFOPayGrade("GL4");
async function getSFEmployeeEducationData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/Background_Education?$filter=userId eq '${Id}'&$expand=degreeNav,majorNav`
    );
    // console.log("getSFEmployeeEducationData==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// getSFEmployeeEducationData(556393);
async function getnewEducationData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/Education?$filter=cust_Qualification1_worker eq '${Id}'&$expand=cust_SpecializationNav,cust_AcademicDegreeNav,cust_CountryofUniversityNav`
    );
    console.log("getnewEducationData==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getnewEducationData(556393);

async function getInsideWorkExperienceData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/InsideWorkExperience?$filter=userId eq '${Id}'`
    );

    // console.log(
    //   "getInsideWorkExperienceData SUCCESS FACTOR==>",
    //   response.data.value
    // );

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// getInsideWorkExperienceData(556393);

async function getOutsideWorkExperienceData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/OutsideWorkExperience?$filter=userId eq '${Id}'&$expand=businessTypeNav`
    );

    // console.log(
    //   "getOutsideWorkExperienceData SUCCESS FACTOR==>",
    //   response.data.value
    // );

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// getOutsideWorkExperienceData(556393);

async function getEmployeePhotoData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/Photo?$format=json&$filter=userId eq '${Id}'`
    );
    // console.log("Photo SUCCESS FACTOR==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getEmployeeTrainingData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/Training?$format=json&$filter=cust_TrainingCourses_externalCode eq '${Id}'`
    );
    // console.log("Photo SUCCESS FACTOR==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getPerformanceEvaluationData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/PerformanceEvaluation?$format=json&$filter=userId eq '${Id}'`
    );
    // console.log("Photo SUCCESS FACTOR==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getPerformanceHistoryData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/PerformanceHistory?$format=json&$filter=cust_PerformanceHistory_externalCode eq '${Id}'&$expand=cust_ScoreinwordsNav`
    );
    // console.log("getPerformanceHistoryData==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// getPerformanceHistoryData(556393);

async function getEmployeePhoneData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/Phone?$format=json&$filter=personIdExternal eq '${Id}'`
    );
    // console.log("Photo SUCCESS FACTOR==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getEmployeeEmailData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/Email?$format=json&$filter=personIdExternal eq '${Id}'`
    );
    // console.log("Photo SUCCESS FACTOR==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getUserData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/User?$format=json&$filter=userId eq '${Id}'`
    );
    console.log("getUserData==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getUserData(5679);

async function getNineBoxRaingData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/NineBoxRating?$format=json&$filter=cust_Nineboxx_worker eq '${Id}'`
    );
    console.log("cust_Nineboxx_worker==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getNineBoxRaingData(556393);
async function getSFPickListOptionData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/PicklistOption?$filter=id eq ${Id}`
    );
    // console.log("getSFPickListData==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// getSFPickListOptionData(29354);
async function getPicklistLabelData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/PicklistLabel?$format=json&$filter=optionId eq ${Id}`
    );
    // console.log("getPicklistLabelData==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getPickListValueV2Data(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/PickListValueV2?$format=json&$filter=optionId eq ${Id}`
    );
    // console.log("getPicklistLabelData==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// getPickListValueV2Data(39226);

async function getDependentsData(Id) {
  try {
    const response = await axios.get(
      `${serverBaseUrl}/serviceCatalog/Dependents?$format=json&$filter=cust_Dep_Parent_externalCode eq '${Id}'&$expand=cust_RelationshipNav`
    );
    // console.log("getDependentsData==>", response.data.value);

    return response.data.value;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// getDependentsData(556393);

let dataInsideWorkFD,
  dataOutsideWorkFD,
  dataEducationFD,
  dataNewEducationFD,
  dataTrainingFD,
  dataPerformaceEvaluationFD,
  dataPerformaceHistoryFD,
  dataPermotionHistoryFD,
  degreeArray,
  majorArray,
  outsideArray;
async function fetchAllSFDatas(Id) {
  //***********INSIDE WORK*********************//
  dataInsideWorkFD = await getInsideWorkExperienceData(Id);

  //***********OUTSIDE WORK*********************//
  dataOutsideWorkFD = await getOutsideWorkExperienceData(Id);

  outsideArray = [];
  dataOutsideWorkFD.forEach(async (data) => {
    const data3 = await getPicklistLabelData(data.businessTypeNav.id);
    outsideArray.push(data3);
  });

  //***********EDUCATION DATA*********************//
  // dataEducationFD = await getSFEmployeeEducationData(Id);
  // degreeArray = [];
  // dataEducationFD.forEach(async (data) => {
  //   const data3 = await getPicklistLabelData(data.degreeNav.id);
  //   degreeArray.push(data3);
  // });
  //**********New Education***********/
  dataNewEducationFD = await getnewEducationData(Id);

  // majorArray = [];
  // dataEducationFD.forEach(async (data) => {
  //   const data4 = await getPicklistLabelData(data.majorNav.id);
  //   majorArray.push(data4);
  // });

  //******************TRAINING DATA***************//
  dataTrainingFD = await getEmployeeTrainingData(Id);

  //***************PERFORMANCE EVALUATION****************//
  dataPerformaceEvaluationFD = await getPerformanceEvaluationData(Id);

  //***************PERFORMANCE HISTORY****************//
  dataPerformaceHistoryFD = await getPerformanceHistoryData(Id);

  //***************PERMOTION HISTORY****************//
  dataPermotionHistoryFD = await getSFEmpJobPromotionHistoryData(Id);
}
// fetchAllSFDatas("556393");
//*******************Dummy Datas*******************/
async function fetchData() {
  try {
    const responseEng = await fetch("./model/i18nEnglish.json");
    const responseEnglish = await responseEng.json();
    const responseArab = await fetch("./model/i18nArabic.json");
    const responseArabic = await responseArab.json();
    // console.log("responseEnglish==>", responseEnglish);
    // console.log("responseArabic==>", responseArabic);

    let dat;
    if (currentLanguage === "ar_SA") {
      dat = responseArabic;
    } else {
      dat = responseEnglish;
    }

    return dat;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
// fetchData();

async function getCurrentLabel(array, currentLanguage) {
  for (const item of array) {
    // console.log("item.locale,currentLanguage==>", item.locale, currentLanguage);
    if (item.locale === currentLanguage) {
      return item.label;
    }
  }
  return null; // or any default value you want to return if the locale is not found
}

//***************Generating Sections Dynamically***************************/
function getMonthName(month) {
  const monthNamesEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthNamesAr = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  // Select the month name array based on the current language

  let monthNames;
  if (currentLanguage === "ar_SA") {
    monthNames = monthNamesAr;
  } else {
    monthNames = monthNamesEn;
  }

  let monthName = monthNames[month];
  // console.log("month name func==>", monthName);

  return monthName;
}

function convertToDateString(dateString) {
  // Extract the timestamp in milliseconds from the string
  // const timestamp = parseInt(dateString.replace(/\/Date\((\d+)\)\//, "$1"), 10);
  const timestamp = parseInt(dateString.match(/\d+/)[0]);

  // Create a new Date object from the timestamp
  const date = new Date(timestamp);

  // Format the date to YYYY-MM-DD
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so we add 1
  const day = String(date.getDate()).padStart(2, "0");
  // console.log("convertToDateString==>", year);
  return `${year}-${month}-${day}`;
}
convertToDateString("/Date(1671926400000)/");

async function generateFinal(subIndex) {
  const subDetailMain5 = document.querySelector(`.sub-detail${subIndex}-0`);
  subDetailMain5.innerHTML = "";

  const dataPerformanceHistory = dataPermotionHistoryFD;

  const payGradeNavArray = dataPerformanceHistory
    .filter((item) => item.event === "29498")
    .map((item) => ({
      positionEntryDate: item.positionEntryDate,
      payGradeNav: item.payGradeNav,
      eventReasonNav: item.eventReasonNav,
    }));

  const uniquePayGrades = payGradeNavArray.reduce((acc, current) => {
    // Check if the externalCode already exists in the accumulator
    if (
      !acc.some(
        (item) =>
          item.payGradeNav.externalCode === current.payGradeNav.externalCode
      )
    ) {
      acc.push(current); // If not, add it to the accumulator
    }
    return acc;
  }, []);
  console.log("uniquePayGrades before==>", uniquePayGrades);
  // uniquePayGrades.sort(
  //   (a, b) =>
  //     new Date(convertToDateString(b.positionEntryDate)) -
  //     new Date(convertToDateString(a.positionEntryDate))
  // );
  // console.log("uniquePayGrades after==>", uniquePayGrades);
  // Initialize the HTML content
  let htmlContent = '<div class="box">';

  if (uniquePayGrades.length !== 0) {
    let countBoxes = 0;
    uniquePayGrades.forEach((detail, index) => {
      countBoxes++;
      if (countBoxes <= 3) {
        // console.log("perfrom==>", detail.endDate);
        const formattedDate = convertToDateString(detail.positionEntryDate);
        // console.log("formattedDate==>", formattedDate);
        let date = new Date(formattedDate);
        let year = date.getFullYear();

        let gradeTitle, promotionType;
        if (currentLanguage === "ar_SA") {
          gradeTitle = detail.payGradeNav.customString1;
          promotionType = detail.eventReasonNav.nameTranslationNav.value_ar_SA;
        } else {
          gradeTitle = detail.payGradeNav.name;
          promotionType = detail.eventReasonNav.nameTranslationNav.value_en_US;
        }
        htmlContent += `
          <div class="pentagon pen${index + 1}">
            <div class="rectangle rectangle${index + 1}">
              <span>${year}</span>
              <span>${gradeTitle}</span>
              <span>${promotionType}</span>
            </div>
            <div class="triangle2 triangle2${index + 1}"></div>
          </div>`;
      }
    });
  } else {
    htmlContent += `
        <div dir="rtl" >
          <span ></span>
          <span >Data Not Available</span>
        </div>`;
  }

  // dataPormotionHistory.forEach((detail, index) => {
  //   htmlContent += `
  //   <div class="pentagon pen${index + 1}">
  //     <div class="rectangle rectangle${index + 1}">
  //       <span>${detail.year}</span>
  //       <span>${detail.title}</span>

  //     </div>
  //     <div class="triangle2 triangle2${index + 1}"></div>
  //   </div>`;
  // });

  // Close the HTML content
  htmlContent += "</div>";

  // Set the generated HTML to the subDetailMain5 element
  subDetailMain5.innerHTML = htmlContent;
}
async function generateSections1() {
  try {
    const locali18nData = await fetchData();
    // console.log("generateSections1 locali18nData==>", locali18nData);
    let data = locali18nData.headers1;

    let dataInsideWorkF = dataPermotionHistoryFD;
    let dataInsideWork = dataInsideWorkF.filter(
      (item) => item.event !== "29498"
    );
    dataInsideWork.sort(
      (a, b) =>
        new Date(convertToDateString(b.startDate)) -
        new Date(convertToDateString(a.startDate))
    );

    const leftContainer1 = document.querySelector(".left-div11");
    leftContainer1.innerHTML = "";

    //DATA-HEADINGS
    data.reverse().forEach((header, hindex) => {
      //CREATE HEADERS-FP+DF(PART 1)
      var imgSrc1 = "";
      if (hindex === 3) {
        imgSrc1 = workExpImg;
      } else if (hindex === 2) {
        imgSrc1 = certificateImg;
      } else if (hindex === 1) {
        imgSrc1 = whiteBoardImg;
      } else if (hindex === 0) {
        imgSrc1 = certificateImg;
      }

      let htmlHeading1 = `
        <div class="first-part index-${hindex}">
          <div dir="rtl" lang="ar" style="margin-top: 24px" class="heading">
           <span class="section1-heading-${hindex}"> ${header.headerTitle} 
          </span>
          </div>
          <div style="margin-top: 24px; margin-right:80px" class="circle">
            <img
              class="imgStyle"
              src="${imgSrc1}"
              style="position: absolute; z-index: 2; right: 6px; top: 7px"
            />
          </div>
        </div>
        <div class="sub-detail1-${hindex}">
        </div>`;

      leftContainer1.insertAdjacentHTML("afterbegin", htmlHeading1);
      const subDetailMain1 = document.querySelector(`.sub-detail1-${hindex}`);

      // CREATE DF-NO(PART 2)
      let htmlSubHeading1 = "";
      let countInsideWork = 0;
      if (hindex === 3 && dataInsideWork.length !== 0) {
        // console.log("dataInsideWork hindex==>", hindex, dataInsideWork);
        //DATA-SUBDETAILS
        dataInsideWork.forEach((detail, subindex) => {
          // let date = detail.startDate;
          if (countInsideWork <= 6) {
            countInsideWork++;
            const formattedStartDate = convertToDateString(detail.startDate);
            // const formattedEndDate = convertToDateString(detail.endDate);
            // Get the next element's startDate, or use a fallback if it's the last element
            const nextDetail = dataInsideWork[subindex - 1];
            const formattedEndDate = nextDetail
              ? convertToDateString(nextDetail.startDate)
              : convertToDateString(detail.endDate);

            let date = new Date(formattedStartDate);
            let year = date.getFullYear();
            let date2 = new Date(formattedEndDate);
            let year2 = date2.getFullYear();
            if (countInsideWork === 1 && currentLanguage === "ar_SA") {
              year2 = "حتى تاريخه";
            } else if (countInsideWork === 1 && currentLanguage !== "ar_SA") {
              year2 = "Till Now";
            }

            let department, position;
            if (currentLanguage === "ar_SA") {
              department = detail.departmentNav.description_ar_SA;
              position = detail.positionNav.externalName_ar_SA;
            } else if (currentLanguage !== "ar_SA") {
              department = detail.departmentNav.description_en_US;
              position = detail.positionNav.jobTitle;
            }
            htmlSubHeading1 += `
            <div dir="rtl" class="details details-insidework">
              <span class="yr">${year}</span>
                 
              <span>-</span>
              <span class="yr">${year2}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${department} - ${position}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 3 && dataInsideWork.length === 0) {
        htmlSubHeading1 += `
            
            <div dir="rtl" class="details details-insidework">
              <span class="yr"></span>
                 
              <span></span>
              <span class="yr"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
              
            </div>`;
      }

      // const dataInsideWork = dataInsideWorkFD; //No Arabic
      // dataInsideWork.sort(
      //   (a, b) => new Date(b.startDate) - new Date(a.startDate)
      // );
      // if (hindex === 3 && dataInsideWork.length !== 0) {
      //   // console.log("dataInsideWork hindex==>", hindex, dataInsideWork);
      //   //DATA-SUBDETAILS
      //   dataInsideWork.forEach((detail, subindex) => {
      //     // let date = detail.startDate;
      //     if (subindex <= 3) {
      //       let date = new Date(detail.startDate);
      //       let year = date.getFullYear();
      //       let date2 = new Date(detail.endDate);
      //       let year2 = date2.getFullYear();
      //       if (subindex === 0 && currentLanguage === "ar_SA") {
      //         year2 = "حتى تاريخه";
      //       } else if (subindex === 0 && currentLanguage !== "ar_SA") {
      //         year2 = "Till Now";
      //       }
      //       htmlSubHeading1 += `
      //       <div dir="rtl" class="details details-insidework">
      //         <span class="yr">${year}</span>

      //         <span>-</span>
      //         <span class="yr">${year2}</span>
      //         <span style="color: #c8b789;">|</span>
      //         <span class="detail-name">${detail.title}</span>

      //       </div>`;
      //     }
      //   });
      // } else if (hindex === 3 && dataInsideWork.length === 0) {
      //   htmlSubHeading1 += `
      //       <div dir="rtl" class="details">
      //         <span class="yr"></span>
      //         <span class="detail-name">Data Not Available</span>
      //       </div>`;
      // }

      // const dataEducation = dataEducationFD;
      // const degree = degreeArray;
      // const major = majorArray;

      const dataNewEducation = dataNewEducationFD;
      dataNewEducation.sort(
        (a, b) => new Date(b.cust_AwardedDate) - new Date(a.cust_AwardedDate)
      );
      if (hindex === 2 && dataNewEducation.length !== 0) {
        let deg;
        let maj;
        //DATA-SUBDETAILS
        dataNewEducation.forEach((detail, subindex) => {
          if (subindex <= 3) {
            let degree, specialization, universityName, countryOfUniversity;
            if (currentLanguage === "ar_SA") {
              degree = detail.cust_AcademicDegreeNav[0].label_ar_SA;
              specialization = detail.cust_SpecializationNav[0].label_ar_SA;
              universityName = detail.cust_UniverisytName;
              countryOfUniversity =
                detail.cust_CountryofUniversityNav[0].externalName_ar_SA;
            } else {
              degree = detail.cust_AcademicDegreeNav[0].label_en_US;
              specialization = detail.cust_SpecializationNav[0].label_en_US;
              universityName = detail.cust_UniverisytName;
              countryOfUniversity =
                detail.cust_CountryofUniversityNav[0].externalName_en_US;
            }

            let date = new Date(detail.cust_Qualification1_effectiveStartDate);
            let year = date.getFullYear();
            let date1 = new Date(detail.cust_AwardedDate);
            let year1 = date1.getFullYear();
            // Get the current month
            let month = date.getMonth(); // returns a number from 0 to 11
            const monthName = getMonthName(month);
            htmlSubHeading1 += `
            <div dir="rtl" class="details details-education">
              <span class="yr">${year1}</span>
              <span>-</span>
              <span class="detail-name">${monthName}</span>
              <span style="color: #c8b789;">|</span>
              <text class="detail-description">${specialization}/${universityName}/${countryOfUniversity}</text>
              </div>
            </div>`;
          }
        });
      } else if (hindex === 2 && dataNewEducation.length === 0) {
        htmlSubHeading1 += `
            <div dir="rtl" class="details details-education">
              <span class="yr"></span>
              <span></span>
              <span class="detail-name"></span>
              <span style="color: #c8b789;"></span>
              <text class="detail-description">Data Not Available</text>
              </div>
            </div>`;
      }
      // <span class="detail-name">${detail.degreeNav.localeLabel}</span>

      const dataTraining1 = dataTrainingFD;
      dataTraining1.sort(
        (a, b) =>
          new Date(b.cust_TrainingCourses_effectiveStartDate) -
          new Date(a.cust_TrainingCourses_effectiveStartDate)
      );
      if (hindex === 1 && dataTraining1.length !== 0) {
        //DATA-SUBDETAILS
        dataTraining1.forEach((detail, subindex) => {
          // console.log("dataTraing1==>", detail);
          if (subindex <= 3) {
            // let date = detail.startDate;
            let date = new Date(detail.cust_TrainingCourses_effectiveStartDate);
            let year = date.getFullYear();
            let month = date.getMonth(); // returns a number from 0 to 11
            const monthName = getMonthName(month);
            htmlSubHeading1 += `
            <div dir="rtl" class="details details-education">
              <span class="yr">${year}</span>
              <span>-</span>
              <span class="detail-name">${monthName}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${detail.cust_CourseName}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 1 && dataTraining1.length === 0) {
        htmlSubHeading1 += `
          <div dir="rtl" class="details details-education">
              <span class="yr"></span>
              <span></span>
              <span class="detail-name"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
              
            </div>
            `;
      }

      const dataPerformaceEvaluation = dataPerformaceHistoryFD;
      dataPerformaceEvaluation.sort(
        (a, b) => new Date(b.cust_RatingYear) - new Date(a.cust_RatingYear)
      );
      if (hindex === 0 && dataPerformaceEvaluation.length !== 0) {
        //DATA-SUBDETAILS
        dataPerformaceEvaluation.forEach((detail, subindex) => {
          if (subindex <= 3) {
            let evaluationLabel;
            if (currentLanguage === "ar_SA") {
              evaluationLabel = detail.cust_ScoreinwordsNav[0].label_ar_SA;
            } else {
              evaluationLabel = detail.cust_ScoreinwordsNav[0].label_en_US;
            }
            let date = new Date(detail.cust_RatingYear);
            let year = date.getFullYear();

            htmlSubHeading1 += `
            <div dir="rtl" class="details details-performanceEvaluation">
              <span class="yr">${year}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${evaluationLabel}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 0 && dataPerformaceEvaluation.length === 0) {
        htmlSubHeading1 += `
          div dir="rtl" class="details details-performanceEvaluation">
              <span class="yr"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
              
            </div>`;
      }
      //<text class="detail-description">${detail.details.detailDiscription}</text>
      subDetailMain1.innerHTML = htmlSubHeading1;
    });
  } catch (error) {
    console.error("Error generating sections:", error);
  }
}

async function generateSections2() {
  generateFinal(2);
}

async function generateSections3() {
  try {
    const locali18nData = await fetchData();
    // console.log("generateSections1 locali18nData==>", locali18nData);
    let data = locali18nData.headers3;

    let dataInsideWorkF = dataPermotionHistoryFD;
    let dataInsideWork = dataInsideWorkF.filter(
      (item) => item.event !== "29498"
    );
    dataInsideWork.sort(
      (a, b) =>
        new Date(convertToDateString(b.startDate)) -
        new Date(convertToDateString(a.startDate))
    );

    const leftContainer3 = document.querySelector(".left-div33");
    leftContainer3.innerHTML = "";

    //DATA-HEADINGS
    data.reverse().forEach((header, hindex) => {
      //CREATE HEADERS-FP+DF(PART 1)
      var imgSrc1 = "";
      if (hindex === 3) {
        imgSrc1 = workExpImg;
      } else if (hindex === 2) {
        imgSrc1 = certificateImg;
      } else if (hindex === 1) {
        imgSrc1 = whiteBoardImg;
      } else if (hindex === 0) {
        imgSrc1 = certificateImg;
      }

      let htmlHeading3 = `
        <div class="first-part index-${hindex}">
          <div dir="rtl" lang="ar" style="margin-top: 24px" class="heading">
           <span class="section1-heading-${hindex}"> ${header.headerTitle} 
          </span>
          </div>
          <div style="margin-top: 24px; margin-right:80px" class="circle">
            <img
              class="imgStyle"
              src="${imgSrc1}"
              style="position: absolute; z-index: 2; right: 6px; top: 7px"
            />
          </div>
        </div>
        <div class="sub-detail3-${hindex}">
        </div>`;

      leftContainer3.insertAdjacentHTML("afterbegin", htmlHeading3);
      const subDetailMain3 = document.querySelector(`.sub-detail3-${hindex}`);

      // CREATE DF-NO(PART 2)
      let htmlSubHeading3 = "";
      let countInsideWork = 0;
      if (hindex === 3 && dataInsideWork.length !== 0) {
        // console.log("dataInsideWork hindex==>", hindex, dataInsideWork);
        //DATA-SUBDETAILS
        dataInsideWork.forEach((detail, subindex) => {
          // let date = detail.startDate;
          if (countInsideWork <= 6) {
            countInsideWork++;
            const formattedStartDate = convertToDateString(detail.startDate);
            // const formattedEndDate = convertToDateString(detail.endDate);
            const nextDetail = dataInsideWork[subindex - 1];
            const formattedEndDate = nextDetail
              ? convertToDateString(nextDetail.startDate)
              : convertToDateString(detail.endDate);

            let date = new Date(formattedStartDate);
            let year = date.getFullYear();
            let date2 = new Date(formattedEndDate);
            let year2 = date2.getFullYear();
            if (countInsideWork === 1 && currentLanguage === "ar_SA") {
              year2 = "حتى تاريخه";
            } else if (countInsideWork === 1 && currentLanguage !== "ar_SA") {
              year2 = "Till Now";
            }

            let department, position;
            if (currentLanguage === "ar_SA") {
              department = detail.departmentNav.description_ar_SA;
              position = detail.positionNav.externalName_ar_SA;
            } else if (currentLanguage !== "ar_SA") {
              department = detail.departmentNav.description_en_US;
              position = detail.positionNav.jobTitle;
            }
            htmlSubHeading3 += `
            <div dir="rtl" class="details details-insidework">
              <span class="yr">${year}</span>
                 
              <span>-</span>
              <span class="yr">${year2}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${department} - ${position}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 3 && dataInsideWork.length === 0) {
        htmlSubHeading3 += `
            <div dir="rtl" class="details details-insidework">
              <span class="yr"></span>
                 
              <span></span>
              <span class="yr"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
              
            </div>`;
      }

      // const dataInsideWork = dataInsideWorkFD; //No Arabic
      // dataInsideWork.sort(
      //   (a, b) => new Date(b.startDate) - new Date(a.startDate)
      // );
      // if (hindex === 3 && dataInsideWork.length !== 0) {
      //   // console.log("dataInsideWork hindex==>", hindex, dataInsideWork);
      //   //DATA-SUBDETAILS
      //   dataInsideWork.forEach((detail, subindex) => {
      //     // let date = detail.startDate;
      //     if (subindex <= 3) {
      //       let date = new Date(detail.startDate);
      //       let year = date.getFullYear();
      //       let date2 = new Date(detail.endDate);
      //       let year2 = date2.getFullYear();
      //       if (subindex === 0 && currentLanguage === "ar_SA") {
      //         year2 = "حتى تاريخه";
      //       } else if (subindex === 0 && currentLanguage !== "ar_SA") {
      //         year2 = "Till Now";
      //       }
      //       htmlSubHeading1 += `
      //       <div dir="rtl" class="details details-insidework">
      //         <span class="yr">${year}</span>

      //         <span>-</span>
      //         <span class="yr">${year2}</span>
      //         <span style="color: #c8b789;">|</span>
      //         <span class="detail-name">${detail.title}</span>

      //       </div>`;
      //     }
      //   });
      // } else if (hindex === 3 && dataInsideWork.length === 0) {
      //   htmlSubHeading1 += `
      //       <div dir="rtl" class="details">
      //         <span class="yr"></span>
      //         <span class="detail-name">Data Not Available</span>
      //       </div>`;
      // }

      const dataNewEducation = dataNewEducationFD;
      dataNewEducation.sort(
        (a, b) => new Date(b.cust_AwardedDate) - new Date(a.cust_AwardedDate)
      );
      if (hindex === 2 && dataNewEducation.length !== 0) {
        let deg;
        let maj;
        //DATA-SUBDETAILS
        dataNewEducation.forEach((detail, subindex) => {
          if (subindex <= 3) {
            let degree, specialization, universityName, countryOfUniversity;
            if (currentLanguage === "ar_SA") {
              degree = detail.cust_AcademicDegreeNav[0].label_ar_SA;
              specialization = detail.cust_SpecializationNav[0].label_ar_SA;
              universityName = detail.cust_UniverisytName;
              countryOfUniversity =
                detail.cust_CountryofUniversityNav[0].externalName_ar_SA;
            } else {
              degree = detail.cust_AcademicDegreeNav[0].label_en_US;
              specialization = detail.cust_SpecializationNav[0].label_en_US;
              universityName = detail.cust_UniverisytName;
              countryOfUniversity =
                detail.cust_CountryofUniversityNav[0].externalName_en_US;
            }

            let date = new Date(detail.cust_Qualification1_effectiveStartDate);
            let year = date.getFullYear();
            let date1 = new Date(detail.cust_AwardedDate);
            let year1 = date1.getFullYear();
            // Get the current month
            let month = date.getMonth(); // returns a number from 0 to 11
            const monthName = getMonthName(month);
            htmlSubHeading3 += `
            <div dir="rtl" class="details details-education">
              <span class="yr">${year1}</span>
              <span>-</span>
              <span class="detail-name">${monthName}</span>
              <span style="color: #c8b789;">|</span>
              <text class="detail-description">${specialization}/${universityName}/${countryOfUniversity}</text>
              </div>
            </div>`;
          }
        });
      } else if (hindex === 2 && dataNewEducation.length === 0) {
        htmlSubHeading3 += `
            <div dir="rtl" class="details details-education">
              <span class="yr"></span>
              <span></span>
              <span class="detail-name"></span>
              <span style="color: #c8b789;"></span>
              <text class="detail-description">Data Not Available</text>
              </div>
            </div>`;
      }
      // <span class="detail-name">${detail.degreeNav.localeLabel}</span>

      const dataTraining1 = dataTrainingFD;
      dataTraining1.sort(
        (a, b) =>
          new Date(b.cust_TrainingCourses_effectiveStartDate) -
          new Date(a.cust_TrainingCourses_effectiveStartDate)
      );
      if (hindex === 1 && dataTraining1.length !== 0) {
        //DATA-SUBDETAILS
        dataTraining1.forEach((detail, subindex) => {
          // console.log("dataTraing1==>", detail);
          if (subindex <= 3) {
            // let date = detail.startDate;
            let date = new Date(detail.cust_TrainingCourses_effectiveStartDate);
            let year = date.getFullYear();
            let month = date.getMonth(); // returns a number from 0 to 11
            const monthName = getMonthName(month);
            htmlSubHeading3 += `
            <div dir="rtl" class="details details-education">
              <span class="yr">${year}</span>
              <span>-</span>
              <span class="detail-name">${monthName}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${detail.cust_CourseName}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 1 && dataTraining1.length === 0) {
        htmlSubHeading3 += `
          <div dir="rtl" class="details details-education">
              <span class="yr"></span>
              <span></span>
              <span class="detail-name"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
              
            </div>
            `;
      }

      const dataPerformaceEvaluation = dataPerformaceHistoryFD;
      dataPerformaceEvaluation.sort(
        (a, b) => new Date(b.cust_RatingYear) - new Date(a.cust_RatingYear)
      );
      if (hindex === 0 && dataPerformaceEvaluation.length !== 0) {
        //DATA-SUBDETAILS
        dataPerformaceEvaluation.forEach((detail, subindex) => {
          if (subindex <= 3) {
            let evaluationLabel;
            if (currentLanguage === "ar_SA") {
              evaluationLabel = detail.cust_ScoreinwordsNav[0].label_ar_SA;
            } else {
              evaluationLabel = detail.cust_ScoreinwordsNav[0].label_en_US;
            }
            let date = new Date(detail.cust_RatingYear);
            let year = date.getFullYear();

            htmlSubHeading3 += `
            <div dir="rtl" class="details details-performanceEvaluation">
              <span class="yr">${year}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${evaluationLabel}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 0 && dataPerformaceEvaluation.length === 0) {
        htmlSubHeading3 += `
           <div dir="rtl" class="details details-performanceEvaluation">
              <span class="yr"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
              
            </div>
            `;
      }
      //<text class="detail-description">${detail.details.detailDiscription}</text>
      subDetailMain3.innerHTML = htmlSubHeading3;
    });
  } catch (error) {
    console.error("Error generating sections:", error);
  }
}
async function generateSections4() {
  try {
    const locali18nData = await fetchData();
    let data = locali18nData.headers4;

    let dataInsideWorkF = dataPermotionHistoryFD;
    let dataInsideWork = dataInsideWorkF.filter(
      (item) => item.event !== "29498"
    );
    dataInsideWork.sort(
      (a, b) =>
        new Date(convertToDateString(b.startDate)) -
        new Date(convertToDateString(a.startDate))
    );

    const leftContainer4 = document.querySelector(".left-div44");
    leftContainer4.innerHTML = "";

    data.reverse().forEach((header, hindex) => {
      //CREATE HEADERS-FP+DF(PART 1)
      var imgSrc2 = "";
      if (hindex === 5) {
        // console.log("inside calendar");
        imgSrc2 = workExpImg;
      } else if (hindex === 4) {
        // console.log("inside certificate");
        imgSrc2 = workExpImg;
      } else if (hindex === 3) {
        imgSrc2 = certificateImg;
      } else if (hindex === 2) {
        imgSrc2 = whiteBoardImg;
      } else if (hindex === 1) {
        imgSrc2 = certificateImg;
      } else if (hindex === 0) {
        imgSrc2 = growthImg;
      }

      let htmlHeading4 = `
        <div class="first-part index-${hindex}">
          <div dir="rtl" lang="ar" style="margin-top: 24px" class="heading">
            <span class="section1-heading-${hindex}"> ${header.headerTitle} 
          </span>
          <div style="margin-top: 24px; margin-right:80px" class="circle">
            <img
              class="imgStyle"
              src="${imgSrc2}"
              style="position: absolute; z-index: 2; right: 6px; top: 7px"
            />
          </div>
        </div>
        <div class="sub-detail4-${hindex}">
        </div>`;

      leftContainer4.insertAdjacentHTML("afterbegin", htmlHeading4);
      const subDetailMain4 = document.querySelector(`.sub-detail4-${hindex}`);

      // CREATE DF-NO(PART 2)
      let htmlSubHeading4 = "";
      let countInsideWork = 0;
      if (hindex === 4 && dataInsideWork.length !== 0) {
        // console.log("dataInsideWork hindex==>", hindex, dataInsideWork);
        //DATA-SUBDETAILS
        dataInsideWork.forEach((detail, subindex) => {
          // let date = detail.startDate;
          if (countInsideWork <= 6) {
            countInsideWork++;
            const formattedStartDate = convertToDateString(detail.startDate);
            // const formattedEndDate = convertToDateString(detail.endDate);
            const nextDetail = dataInsideWork[subindex - 1];
            const formattedEndDate = nextDetail
              ? convertToDateString(nextDetail.startDate)
              : convertToDateString(detail.endDate);

            let date = new Date(formattedStartDate);
            let year = date.getFullYear();
            let date2 = new Date(formattedEndDate);
            let year2 = date2.getFullYear();
            if (countInsideWork === 1 && currentLanguage === "ar_SA") {
              year2 = "حتى تاريخه";
            } else if (countInsideWork === 1 && currentLanguage !== "ar_SA") {
              year2 = "Till Now";
            }

            let department, position;
            if (currentLanguage === "ar_SA") {
              department = detail.departmentNav.description_ar_SA;
              position = detail.positionNav.externalName_ar_SA;
            } else if (currentLanguage !== "ar_SA") {
              department = detail.departmentNav.description_en_US;
              position = detail.positionNav.jobTitle;
            }
            htmlSubHeading4 += `
            <div dir="rtl" class="details details-insidework">
              <span class="yr">${year}</span>
                 
              <span>-</span>
              <span class="yr">${year2}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${department} - ${position}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 4 && dataInsideWork.length === 0) {
        htmlSubHeading4 += `
           <div dir="rtl" class="details details-insidework">
              <span class="yr"></span>   
              <span></span>
              <span class="yr"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>              
            </div>`;
      }
      // const dataInsideWork = dataInsideWorkFD;
      // dataInsideWork.sort(
      //   (a, b) => new Date(b.startDate) - new Date(a.startDate)
      // );
      // if (hindex === 4 && dataInsideWork.length !== 0) {
      //   dataInsideWork.forEach((detail, subindex) => {
      //     if (subindex <= 3) {
      //       let date = new Date(detail.startDate);
      //       let year = date.getFullYear();
      //       let date2 = new Date(detail.endDate);
      //       let year2 = date2.getFullYear();
      //       if (subindex === 0 && currentLanguage === "ar_SA") {
      //         year2 = "حتى تاريخه";
      //       } else if (subindex === 0 && currentLanguage !== "ar_SA") {
      //         year2 = "Till Now";
      //       }
      //       htmlSubHeading4 += `
      //       <div dir="rtl" class="details details-insidework">
      //         <span class="yr">${year}</span>

      //         <span>-</span>
      //         <span class="yr">${year2}</span>
      //         <span style="color: #c8b789;">|</span>
      //         <span class="detail-name">${detail.title}</span>

      //       </div>`;
      //     }
      //   });
      // } else if (hindex === 4 && dataInsideWork.length === 0) {
      //   htmlSubHeading4 += `
      //       <div dir="rtl" class="details">
      //         <span class="yr"></span>
      //         <span class="detail-name">Data Not Available</span>
      //       </div>`;
      // }

      const dataOutsideWork = dataOutsideWorkFD;
      dataOutsideWork.sort(
        (a, b) => new Date(b.startDate) - new Date(a.startDate)
      );
      const outArray = outsideArray;
      if (hindex === 3 && dataOutsideWork.length !== 0) {
        let ot;
        dataOutsideWork.forEach(async (detail, subindex) => {
          if (subindex <= 3) {
            if (
              outArray[subindex][0].locale === "ar_SA" &&
              currentLanguage === "ar_SA"
            ) {
              ot = outArray[subindex][0].label;
            } else {
              ot = outArray[subindex][1].label;
            }
            let ott = "india";
            let date = new Date(detail.startDate);
            let year = date.getFullYear();
            let date2 = new Date(detail.endDate);
            let year2 = date2.getFullYear();
            htmlSubHeading4 += `
            <div dir="rtl" class="details details-outsidework">
              <span class="yr">${year}</span>
              <span>-</span>
              <span class="yr">${year2}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${ot}</span>
            </div>`;
          }
        });
      } else if (hindex === 3 && dataOutsideWork.length === 0) {
        htmlSubHeading4 += `
          <div dir="rtl" class="details details-outsidework">
              <span class="yr"></span>
              <span></span>
              <span class="yr"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
          </div>
            `;
      }
      // <span class="detail-name">${detail.startTitle}</span>

      const dataNewEducation = dataNewEducationFD;
      dataNewEducation.sort(
        (a, b) => new Date(b.cust_AwardedDate) - new Date(a.cust_AwardedDate)
      );
      if (hindex === 2 && dataNewEducation.length !== 0) {
        let deg;
        let maj;
        //DATA-SUBDETAILS
        dataNewEducation.forEach((detail, subindex) => {
          if (subindex <= 3) {
            let degree, specialization, universityName, countryOfUniversity;
            if (currentLanguage === "ar_SA") {
              degree = detail.cust_AcademicDegreeNav[0].label_ar_SA;
              specialization = detail.cust_SpecializationNav[0].label_ar_SA;
              universityName = detail.cust_UniverisytName;
              countryOfUniversity =
                detail.cust_CountryofUniversityNav[0].externalName_ar_SA;
            } else {
              degree = detail.cust_AcademicDegreeNav[0].label_en_US;
              specialization = detail.cust_SpecializationNav[0].label_en_US;
              universityName = detail.cust_UniverisytName;
              countryOfUniversity =
                detail.cust_CountryofUniversityNav[0].externalName_en_US;
            }

            let date = new Date(detail.cust_Qualification1_effectiveStartDate);
            let year = date.getFullYear();
            let date1 = new Date(detail.cust_AwardedDate);
            let year1 = date1.getFullYear();
            // Get the current month
            let month = date.getMonth(); // returns a number from 0 to 11
            const monthName = getMonthName(month);
            htmlSubHeading4 += `
            <div dir="rtl" class="details details-education">
              <span class="yr">${year1}</span>
              <span>-</span>
              <span class="detail-name">${monthName}</span>
              <span style="color: #c8b789;">|</span>
              <text class="detail-description">${specialization}/${universityName}/${countryOfUniversity}</text>
              </div>
            </div>`;
          }
        });
      } else if (hindex === 2 && dataNewEducation.length === 0) {
        htmlSubHeading4 += `
            <div dir="rtl" class="details details-education">
              <span class="yr"></span>
              <span></span>
              <span class="detail-name"></span>
              <span style="color: #c8b789;"></span>
              <text class="detail-description">Data Not Available</text>
              </div>
            </div>`;
      }

      const dataTraining2 = dataTrainingFD;
      dataTraining2.sort(
        (a, b) =>
          new Date(b.cust_TrainingCourses_effectiveStartDate) -
          new Date(a.cust_TrainingCourses_effectiveStartDate)
      );
      if (hindex === 1 && dataTraining2.length !== 0) {
        //DATA-SUBDETAILS
        dataTraining2.forEach((detail, subindex) => {
          // console.log("dataTraing2==>", detail);
          if (subindex <= 3) {
            // let date = detail.startDate;
            let date = new Date(detail.cust_TrainingCourses_effectiveStartDate);
            let year = date.getFullYear();

            let month = date.getMonth(); // returns a number from 0 to 11
            const monthName = getMonthName(month);
            htmlSubHeading4 += `
            <div dir="rtl" class="details details-education">
              <span class="yr">${year}</span>
              <span>-</span>
              <span class="detail-name">${monthName}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${detail.cust_CourseName}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 1 && dataTraining2.length === 0) {
        htmlSubHeading4 += `
          <div dir="rtl" class="details details-education">
              <span class="yr"></span>
              <span></span>
              <span class="detail-name"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
             
            </div>
            `;
      }

      const dataPerformaceEvaluation = dataPerformaceHistoryFD;
      dataPerformaceEvaluation.sort(
        (a, b) => new Date(b.cust_RatingYear) - new Date(a.cust_RatingYear)
      );
      if (hindex === 0 && dataPerformaceEvaluation.length !== 0) {
        //DATA-SUBDETAILS
        dataPerformaceEvaluation.forEach((detail, subindex) => {
          if (subindex <= 3) {
            let evaluationLabel;
            if (currentLanguage === "ar_SA") {
              evaluationLabel = detail.cust_ScoreinwordsNav[0].label_ar_SA;
            } else {
              evaluationLabel = detail.cust_ScoreinwordsNav[0].label_en_US;
            }

            let date = new Date(detail.cust_RatingYear);
            let year = date.getFullYear();

            htmlSubHeading4 += `
            <div dir="rtl" class="details details-performanceEvaluation">
              <span class="yr">${year}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${evaluationLabel}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 0 && dataPerformaceEvaluation.length === 0) {
        htmlSubHeading4 += `
          <div dir="rtl" class="details details-performanceEvaluation">
              <span class="yr"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
              
            </div>
           `;
      }

      subDetailMain4.innerHTML = htmlSubHeading4;
    });
  } catch (error) {
    console.error("Error generating sections:", error);
  }
}

async function generateSections5() {
  generateFinal(5);
}
async function generateSections6() {
  try {
    const locali18nData = await fetchData();
    let data = locali18nData.headers6;

    let dataInsideWorkF = dataPermotionHistoryFD;
    let dataInsideWork = dataInsideWorkF.filter(
      (item) => item.event !== "29498"
    );
    dataInsideWork.sort(
      (a, b) =>
        new Date(convertToDateString(b.startDate)) -
        new Date(convertToDateString(a.startDate))
    );

    const leftContainer6 = document.querySelector(".left-div66");
    leftContainer6.innerHTML = "";

    data.reverse().forEach((header, hindex) => {
      //CREATE HEADERS-FP+DF(PART 1)
      var imgSrc2 = "";
      if (hindex === 5) {
        // console.log("inside calendar");
        imgSrc2 = workExpImg;
      } else if (hindex === 4) {
        // console.log("inside certificate");
        imgSrc2 = workExpImg;
      } else if (hindex === 3) {
        imgSrc2 = certificateImg;
      } else if (hindex === 2) {
        imgSrc2 = whiteBoardImg;
      } else if (hindex === 1) {
        imgSrc2 = certificateImg;
      } else if (hindex === 0) {
        imgSrc2 = growthImg;
      }

      let htmlHeading6 = `
        <div class="first-part index-${hindex}">
          <div dir="rtl" lang="ar" style="margin-top: 24px" class="heading">
            <span class="section1-heading-${hindex}"> ${header.headerTitle} 
          </span>
          <div style="margin-top: 24px; margin-right:80px" class="circle">
            <img
              class="imgStyle"
              src="${imgSrc2}"
              style="position: absolute; z-index: 2; right: 6px; top: 7px"
            />
          </div>
        </div>
        <div class="sub-detail6-${hindex}">
        </div>`;

      leftContainer6.insertAdjacentHTML("afterbegin", htmlHeading6);
      const subDetailMain6 = document.querySelector(`.sub-detail6-${hindex}`);

      // CREATE DF-NO(PART 2)
      let htmlSubHeading6 = "";
      let countInsideWork = 0;
      if (hindex === 4 && dataInsideWork.length !== 0) {
        // console.log("dataInsideWork hindex==>", hindex, dataInsideWork);
        //DATA-SUBDETAILS
        dataInsideWork.forEach((detail, subindex) => {
          // let date = detail.startDate;
          if (countInsideWork <= 6) {
            countInsideWork++;
            const formattedStartDate = convertToDateString(detail.startDate);
            // const formattedEndDate = convertToDateString(detail.endDate);
            const nextDetail = dataInsideWork[subindex - 1];
            const formattedEndDate = nextDetail
              ? convertToDateString(nextDetail.startDate)
              : convertToDateString(detail.endDate);

            let date = new Date(formattedStartDate);
            let year = date.getFullYear();
            let date2 = new Date(formattedEndDate);
            let year2 = date2.getFullYear();
            if (countInsideWork === 1 && currentLanguage === "ar_SA") {
              year2 = "حتى تاريخه";
            } else if (countInsideWork === 1 && currentLanguage !== "ar_SA") {
              year2 = "Till Now";
            }

            let department, position;
            if (currentLanguage === "ar_SA") {
              department = detail.departmentNav.description_ar_SA;
              position = detail.positionNav.externalName_ar_SA;
            } else if (currentLanguage !== "ar_SA") {
              department = detail.departmentNav.description_en_US;
              position = detail.positionNav.jobTitle;
            }
            htmlSubHeading6 += `
            <div dir="rtl" class="details details-insidework">
              <span class="yr">${year}</span>
                 
              <span>-</span>
              <span class="yr">${year2}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${department} - ${position}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 4 && dataInsideWork.length === 0) {
        htmlSubHeading6 += `
            <div dir="rtl" class="details details-insidework">
              <span class="yr"></span>                
              <span></span>
              <span class="yr"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
              
            </div>`;
      }

      // const dataOutsideWork = dataOutsideWorkFD;
      // dataOutsideWork.sort(
      //   (a, b) => new Date(b.startDate) - new Date(a.startDate)
      // );
      // const outArray = outsideArray;
      // if (hindex === 3 && dataOutsideWork.length !== 0) {
      //   let ot;
      //   dataOutsideWork.forEach(async (detail, subindex) => {
      //     if (subindex <= 3) {
      //       if (
      //         outArray[subindex][0].locale === "ar_SA" &&
      //         currentLanguage === "ar_SA"
      //       ) {
      //         ot = outArray[subindex][0].label;
      //       } else {
      //         ot = outArray[subindex][1].label;
      //       }
      //       let ott = "india";
      //       let date = new Date(detail.startDate);
      //       let year = date.getFullYear();
      //       let date2 = new Date(detail.endDate);
      //       let year2 = date2.getFullYear();
      //       htmlSubHeading6 += `
      //       <div dir="rtl" class="details">
      //         <span class="yr">${year}</span>
      //         <span>-</span>
      //         <span class="yr">${year2}</span>
      //         <span style="color: #c8b789;">|</span>
      //         <span class="detail-name">${ot}</span>
      //       </div>`;
      //     }
      //   });
      // } else if (hindex === 3 && dataOutsideWork.length === 0) {
      //   htmlSubHeading6 += `
      //       <div dir="rtl" class="details">
      //         <span class="yr"></span>
      //         <span class="detail-name">Data Not Available</span>
      //       </div>`;
      // }
      // <span class="detail-name">${detail.startTitle}</span>

      const dataNewEducation = dataNewEducationFD;
      dataNewEducation.sort(
        (a, b) => new Date(b.cust_AwardedDate) - new Date(a.cust_AwardedDate)
      );
      if (hindex === 3 && dataNewEducation.length !== 0) {
        let deg;
        let maj;
        //DATA-SUBDETAILS
        dataNewEducation.forEach((detail, subindex) => {
          if (subindex <= 3) {
            let degree, specialization, universityName, countryOfUniversity;
            if (currentLanguage === "ar_SA") {
              degree = detail.cust_AcademicDegreeNav[0].label_ar_SA;
              specialization = detail.cust_SpecializationNav[0].label_ar_SA;
              universityName = detail.cust_UniverisytName;
              countryOfUniversity =
                detail.cust_CountryofUniversityNav[0].externalName_ar_SA;
            } else {
              degree = detail.cust_AcademicDegreeNav[0].label_en_US;
              specialization = detail.cust_SpecializationNav[0].label_en_US;
              universityName = detail.cust_UniverisytName;
              countryOfUniversity =
                detail.cust_CountryofUniversityNav[0].externalName_en_US;
            }

            let date = new Date(detail.cust_Qualification1_effectiveStartDate);
            let year = date.getFullYear();
            let date1 = new Date(detail.cust_AwardedDate);
            let year1 = date1.getFullYear();
            // Get the current month
            let month = date.getMonth(); // returns a number from 0 to 11
            const monthName = getMonthName(month);
            htmlSubHeading6 += `
            <div dir="rtl" class="details details-education">
              <span class="yr">${year1}</span>
              <span>-</span>
              <span class="detail-name">${monthName}</span>
              <span style="color: #c8b789;">|</span>
              <text class="detail-description">${specialization}/${universityName}/${countryOfUniversity}</text>
              </div>
            </div>`;
          }
        });
      } else if (hindex === 3 && dataNewEducation.length === 0) {
        htmlSubHeading6 += `
            <div dir="rtl" class="details details-education">
              <span class="yr"></span>
              <span></span>
              <span class="detail-name"></span>
              <span style="color: #c8b789;"></span>
              <text class="detail-description">Data Not Available</text>
              </div>
            </div>`;
      }

      const dataTraining2 = dataTrainingFD;
      dataTraining2.sort(
        (a, b) =>
          new Date(b.cust_TrainingCourses_effectiveStartDate) -
          new Date(a.cust_TrainingCourses_effectiveStartDate)
      );
      if (hindex === 2 && dataTraining2.length !== 0) {
        //DATA-SUBDETAILS
        dataTraining2.forEach((detail, subindex) => {
          // console.log("dataTraing2==>", detail);
          if (subindex <= 3) {
            // let date = detail.startDate;
            let date = new Date(detail.cust_TrainingCourses_effectiveStartDate);
            let year = date.getFullYear();

            let month = date.getMonth(); // returns a number from 0 to 11
            const monthName = getMonthName(month);
            htmlSubHeading6 += `
            <div dir="rtl" class="details details-education">
              <span class="yr">${year}</span>
              <span>-</span>
              <span class="detail-name">${monthName}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${detail.cust_CourseName}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 2 && dataTraining2.length === 0) {
        htmlSubHeading6 += `
          <div dir="rtl" class="details details-education">
              <span class="yr"></span>
              <span></span>
              <span class="detail-name"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
              
            </div>
            `;
      }

      const dataPerformaceEvaluation = dataPerformaceHistoryFD;
      dataPerformaceEvaluation.sort(
        (a, b) => new Date(b.cust_RatingYear) - new Date(a.cust_RatingYear)
      );
      if (hindex === 1 && dataPerformaceEvaluation.length !== 0) {
        //DATA-SUBDETAILS
        dataPerformaceEvaluation.forEach((detail, subindex) => {
          if (subindex <= 3) {
            let evaluationLabel;
            if (currentLanguage === "ar_SA") {
              evaluationLabel = detail.cust_ScoreinwordsNav[0].label_ar_SA;
            } else {
              evaluationLabel = detail.cust_ScoreinwordsNav[0].label_en_US;
            }

            let date = new Date(detail.cust_RatingYear);
            let year = date.getFullYear();

            htmlSubHeading6 += `
            <div dir="rtl" class="details details-performanceEvaluation">
              <span class="yr">${year}</span>
              <span style="color: #c8b789;">|</span>
              <span class="detail-name">${evaluationLabel}</span>
              
            </div>`;
          }
        });
      } else if (hindex === 1 && dataPerformaceEvaluation.length === 0) {
        htmlSubHeading6 += `
           <div dir="rtl" class="details details-performanceEvaluation">
              <span class="yr"></span>
              <span style="color: #c8b789;"></span>
              <span class="detail-name">Data Not Available</span>
              
            </div> 
            `;
      }

      subDetailMain6.innerHTML = htmlSubHeading6;

      generateFinal(6);
    });
  } catch (error) {
    console.error("Error generating sections:", error);
  }
}

//*******************PDF GENERATION**********************/
function removeStyleFromHtml(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  // Remove specific styles or elements
  const container = doc.querySelector(".container");
  if (container) {
    container.classList.remove("displayNone");
  }

  const body = doc.querySelector("body");
  if (body) {
    body.classList.remove("body-style");
  }

  const btnPdf = doc.querySelector(".btnPdf");
  if (btnPdf) {
    btnPdf.remove();
  }

  const btnBack = doc.querySelector(".btn");
  if (btnBack) {
    btnBack.remove();
  }

  const graphStyle1 = doc.querySelector(".xy-table-adjust1");
  if (graphStyle1) {
    graphStyle1.classList.remove("xy-table-adjust1");
  }

  const graphStyle2 = doc.querySelector(".xy-table-adjust2");
  if (graphStyle2) {
    graphStyle2.classList.remove("xy-table-adjust2");
  }

  const spinner = doc.querySelector(".spinnerFullpage");
  if (spinner) {
    spinner.parentNode.removeChild(spinner);
  }

  // Return the modified HTML as string
  return doc.documentElement.outerHTML;
}

const { jsPDF } = window.jspdf;
async function convertToPdf() {
  try {
    const { jsPDF } = window.jspdf;

    // Create a new PDF document
    const pdf = new jsPDF({
      unit: "in",
      format: [12, 12.2],
      orientation: "portrait",
    });

    // Example containers
    const containers = document.querySelectorAll(".container");
    const imgWidth = 12; // Width in inches
    const pageHeight = 14.4; // Height in inches
    const margin = 0.1; // Margin in inches

    let position = margin; // Initial position with top margin

    containers.forEach(async (container, index) => {
      try {
        // Capture the HTML content of each container
        const htmlContent = container.innerHTML;

        // Convert HTML content to canvas
        const canvas = await html2canvas(container, { scale: 2 });
        const imgData = canvas.toDataURL("image/jpeg", 0.98);
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Check if there's enough space left on the current page
        if (position + imgHeight > pageHeight - margin) {
          pdf.addPage();
          position = margin; // Reset position for the new page with top margin
        }

        // Add the image to the PDF
        pdf.addImage(
          imgData,
          "JPEG",
          margin,
          position,
          imgWidth - margin * 2,
          imgHeight
        );
        position += imgHeight + margin; // Move position down and add bottom margin

        // Generate Blob URL after processing all containers
        if (index === containers.length - 1) {
          const pdfBlob = pdf.output("blob");
          const url = URL.createObjectURL(pdfBlob);

          // Open the PDF in a new tab
          const newTab = window.open();
          if (newTab) {
            newTab.document.body.style.margin = "0";
            newTab.document.body.style.height = "100%";
            newTab.document.documentElement.style.height = "100%";

            const iframe = newTab.document.createElement("iframe");
            iframe.src = url;
            iframe.width = "100%";
            iframe.height = "100%";
            iframe.style.border = "none";
            newTab.document.body.appendChild(iframe);

            // Create a download link within the new tab
            const downloadLink = newTab.document.createElement("a");
            downloadLink.href = url;
            downloadLink.download = "document.pdf"; // Ensure the filename has .pdf extension
            downloadLink.textContent = "Download PDF";
            downloadLink.style.display = "block";
            downloadLink.style.textAlign = "center";
            downloadLink.style.marginTop = "10px";
            // newTab.document.body.appendChild(downloadLink);

            // Add event listener to revoke URL when the tab is closed
            newTab.addEventListener("beforeunload", () => {
              URL.revokeObjectURL(url);
            });
          } else {
            alert("Failed to open new tab. Please allow popups for this site.");
          }
        }
      } catch (error) {
        console.error("Error converting container to PDF:", error);
      }
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("Error generating PDF: " + error);
  }
}

function findLatestAndEarliestDates(dates) {
  if (!dates || dates.length === 0) {
    return { latest: null, earliest: null };
  }

  let latestDate = new Date(Math.max(...dates.map((date) => new Date(date))));
  let earliestDate = new Date(Math.min(...dates.map((date) => new Date(date))));

  return {
    latest: latestDate,
    earliest: earliestDate,
  };
}

function calculateYearsBetweenDates(startDate, endDate) {
  // Parse the dates
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in milliseconds
  const diffTime = Math.abs(end - start);

  // Convert milliseconds to years (1 year = 365.25 days)
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

  // Round to one digit after the decimal
  const roundedYears = diffYears.toFixed(1);

  return roundedYears;
}

async function replacePlaceholdersWithLocalData() {
  const locali18nData = await fetchData();

  const sec3PromoHis1 = document.querySelector(".promotion2");
  sec3PromoHis1.innerText = locali18nData.promotionHistory;
  const sec3PromoHis2 = document.querySelector(".promotion5");
  sec3PromoHis2.innerText = locali18nData.promotionHistory;

  const sec3Title1 = document.querySelector(".talent2");
  sec3Title1.innerText = locali18nData.talent;
  const sec3Title2 = document.querySelector(".talent5");
  sec3Title2.innerText = locali18nData.talent;

  const sec3Summary1 = document.querySelector(".assmnt-summary2");
  sec3Summary1.innerText = locali18nData.assmntSummary;
  const sec3Summary2 = document.querySelector(".assmnt-summary5");
  sec3Summary2.innerText = locali18nData.assmntSummary;

  const NOY = document.querySelectorAll(".headingYow1");
  NOY.forEach((element) => {
    element.innerText = locali18nData.headingYow;
  });

  const DOB = document.querySelectorAll(".headingDob1");
  DOB.forEach((element) => {
    element.innerText = locali18nData.headingDob;
  });

  const maritalStatus = document.querySelectorAll(".headingMs1");
  maritalStatus.forEach((element) => {
    element.innerText = locali18nData.headingMs;
  });

  const empRegion = document.querySelectorAll(".headingRegion");
  empRegion.forEach((element) => {
    element.innerText = locali18nData.headingRegion;
  });

  const regionPlaceHolder32Elements = document.querySelectorAll(
    ".regionPlaceHolder32"
  );
  regionPlaceHolder32Elements.forEach((element) => {
    element.innerText = locali18nData.regionPlaceHolder2;
  });

  const empClass = document.querySelectorAll(".headingGP1");
  empClass.forEach((element) => {
    element.innerText = locali18nData.headingGP;
  });

  const empContact = document.querySelectorAll(".headingCntct1");
  empContact.forEach((element) => {
    element.innerText = locali18nData.headingCntct;
  });

  const languageText = document.querySelectorAll(".langg");
  languageText.forEach((element) => {
    element.innerText = locali18nData.langg;
  });

  const motherToungeLabelElements = document.querySelectorAll(
    ".mother-tounge-label"
  );
  motherToungeLabelElements.forEach((element) => {
    element.innerText = locali18nData.motherToungeLabel;
  });

  const englishLabelElements = document.querySelectorAll(".engLanguage");
  englishLabelElements.forEach((element) => {
    element.innerText = locali18nData.engLanguage;
  });
}

async function getCountryNameByCode(code) {
  const listOfCountArabic = await fetch("./model/countryCodesArabic.json");
  const listOfCountriesArabic = await listOfCountArabic.json();
  const listOfCountEnglish = await fetch("./model/countryCodesEnglish.json");
  const listOfCountriesEnglish = await listOfCountEnglish.json();
  let countryCodes;
  if (currentLanguage === "ar_SA") {
    countryCodes = listOfCountriesArabic;
  } else {
    countryCodes = listOfCountriesEnglish;
  }

  return countryCodes[code] || "Unknown nationality code";
}
async function replacePlaceholdersWithSFData(userId) {
  try {
    const locali18nData = await fetchData();

    //*******************PERPERSONAL DATA*************************nalityCode/
    const dataPerPersonal = await getSFPerPersonalData(userId);

    // console.log("dataPerPersonal==>", dataPerPersonal);
    // console.log("dataPerPersonal[0]==>", dataPerPersonal[0]);
    //Region
    let countryName;
    if (dataPerPersonal.length !== 0) {
      if (dataPerPersonal[0].nationality !== null) {
        const nationalityCode = dataPerPersonal[0].nationality;
        countryName = await getCountryNameByCode(nationalityCode);
      }
    } else {
      countryName = "Data Not Available";
    }

    const dataUser = await getUserData(userId);
    let countryNameRegion;
    if (dataUser.length !== 0) {
      if (dataUser[0].country !== null) {
        countryNameRegion = dataUser[0].country;
      }
    } else {
      countryNameRegion = "Data Not Available";
    }

    let regionComment;
    if (countryNameRegion === "United Arab Emirates") {
      regionComment = locali18nData.regionPlaceHolder1No;
    } else {
      regionComment = locali18nData.regionPlaceHolder1Yes;
    }

    let dangerComment;
    if (countryNameRegion === "United Arab Emirates") {
      dangerComment = locali18nData.regionPlaceHolder2No;
    } else {
      dangerComment = locali18nData.regionPlaceHolder2Yes;
    }
    const regionPlaceHolder2Elements = document.querySelectorAll(
      ".regionPlaceHolder2"
    );
    regionPlaceHolder2Elements.forEach((element) => {
      element.innerText = regionComment;
      // element.innerText = locali18nData.regionPlaceHolder1;
    });

    const regionPlaceHolder3Elements = document.querySelectorAll(
      ".regionPlaceHolder3"
    );
    regionPlaceHolder3Elements.forEach((element) => {
      element.innerText = dangerComment;
      // element.innerText = locali18nData.regionPlaceHolder1;
    });

    //Name
    let salutationNav, salutation;
    if (dataPerPersonal.length !== 0) {
      if (dataPerPersonal[0].salutationNav !== null) {
        if (dataPerPersonal[0].salutationNav.id !== null) {
          salutationNav = await getPicklistLabelData(
            dataPerPersonal[0].salutationNav.id
          );
          salutation = await getCurrentLabel(salutationNav, currentLanguage);
          // console.log("salutation==>", salutation);
        }
      }
    } else {
      salutation = "";
    }

    let nameInArabic;
    if (dataPerPersonal.length !== 0) {
      if (dataPerPersonal[0].displayName !== null) {
        nameInArabic = salutation + "/" + dataPerPersonal[0].displayName;
      }
    } else {
      nameInArabic = "Data Not Available";
    }

    let nameInEnglish;
    if (dataPerPersonal.length !== 0) {
      if (dataPerPersonal[0].customString2 !== null) {
        nameInEnglish = salutation + "/" + dataPerPersonal[0].customString2;
      }
    } else {
      nameInEnglish = "Data Not Available";
    }

    //Marital Status
    let currentMaritalStatus, maritalStatusLabel;
    if (dataPerPersonal.length !== 0) {
      if (dataPerPersonal[0].maritalStatus !== null) {
        currentMaritalStatus = await getPicklistLabelData(
          dataPerPersonal[0].maritalStatus
        );
        maritalStatusLabel = await getCurrentLabel(
          currentMaritalStatus,
          currentLanguage
        );
      }
    } else {
      maritalStatusLabel = "Data Not Available";
    }
    let count = 0;
    const depen = await getDependentsData(userId);
    depen.forEach((dependent) => {
      if (
        dependent.cust_RelationshipNav[0].label_en_US === "Son" ||
        dependent.cust_RelationshipNav[0].label_en_US === "Daughter"
      ) {
        count++;
      }
    });

    let maritalStatusString;
    if (currentLanguage === "ar_SA") {
      const elements = document.querySelectorAll(".maritalStatusPlaceHolder");
      elements.forEach((element) => {
        element.setAttribute("dir", "rtl");
      });
      maritalStatusString = `${maritalStatusLabel} (${count} أبناء)`;
    } else {
      const elements = document.querySelectorAll(".maritalStatusPlaceHolder");
      elements.forEach((element) => {
        element.setAttribute("dir", "ltr");
      });
      maritalStatusString = `${maritalStatusLabel} (${count} child)`;
    }
    // console.log("dependents==>", depen);
    // console.log("dependents count==>", count);
    //Mother Tounge
    let motherToungeLabel, motherToungeTag;
    if (dataPerPersonal.length !== 0) {
      if (dataPerPersonal[0].nativePreferredLangNav !== null) {
        if (dataPerPersonal[0].nativePreferredLangNav.localeLabel !== null) {
          if (
            dataPerPersonal[0].nativePreferredLangNav.localeLabel ===
              "Arabic" &&
            currentLanguage === "ar_SA"
          ) {
            motherToungeLabel = "اللغة العربية";
            motherToungeTag = "AR";
          } else if (
            dataPerPersonal[0].nativePreferredLangNav.localeLabel ===
              "Arabic" &&
            currentLanguage !== "ar_SA"
          ) {
            motherToungeLabel = "Arabic Language";
            motherToungeTag = "AR";
          } else if (
            dataPerPersonal[0].nativePreferredLangNav.localeLabel !==
              "Arabic" &&
            currentLanguage === "ar_SA"
          ) {
            motherToungeLabel = "اللغة الإنجليزية";
            motherToungeTag = "EN";
          } else if (
            dataPerPersonal[0].nativePreferredLangNav.localeLabel !==
              "Arabic" &&
            currentLanguage !== "ar_SA"
          ) {
            motherToungeLabel = "English Language";
            motherToungeTag = "EN";
          }
        }
      } else {
        motherToungeLabel = "Data Not Available";
        motherToungeTag = "NA";
      }
    } else {
      motherToungeLabel = "Data Not Available";
      motherToungeTag = "NA";
    }
    //ENGLISH lANGUAGE
    let ieltsScore;
    let ieltsScoreProvided = null;
    if (ieltsScoreProvided === null && currentLanguage === "ar_SA")
      ieltsScore = "لم يتم توفير الشهادة";
    else if (ieltsScoreProvided === null && currentLanguage !== "ar_SA")
      ieltsScore = "Certificate Not Provided";
    else if (ieltsScoreProvided !== null && currentLanguage === "ar_SA")
      ieltsScore = "IELTS 6.5";
    else if (ieltsScoreProvided !== null && currentLanguage !== "ar_SA")
      ieltsScore = "IELTS 6.5";

    //*******************EMPJOB DATA*************************/
    const dataEmpJob1 = await getSFEmpJobData(userId);
    // const dataEmpJob = await getSFEmpJobPromotionHistoryData(userId);
    const dataEmpJob = dataPermotionHistoryFD;
    //Position
    let positionInArabic, positionInEnglish;
    if (dataEmpJob.length !== 0) {
      if (dataEmpJob[0].positionNav !== null) {
        if (dataEmpJob[0].positionNav.externalName_ar_SA !== null) {
          positionInArabic = dataEmpJob[0].positionNav.externalName_ar_SA;
        }
        if (dataEmpJob[0].positionNav.jobTitle !== null) {
          positionInEnglish = dataEmpJob[0].positionNav.jobTitle;
        }
      }
    } else {
      positionInArabic = "Data Not Available";
      positionInEnglish = "Data Not Availbale";
    }

    //Employee Class
    let empJobInside, currentClassLabel;
    if (dataEmpJob.length !== 0) {
      if (dataEmpJob[0].payGradeNav.externalCode !== null) {
        // if (dataEmpJob[0].employeeClassNav.id !== null) {
        //   empJobInside = await getPicklistLabelData(
        //     dataEmpJob[0].employeeClassNav.id
        //   );
        //   currentClassLabel = await getCurrentLabel(
        //     empJobInside,
        //     currentLanguage
        //   );
        // }
        if (currentLanguage === "ar_SA") {
          const elements = document.querySelectorAll(".classPlaceHolder");
          elements.forEach((element) => {
            element.setAttribute("dir", "rtl");
          });
          currentClassLabel = `${dataEmpJob[0].payGradeNav.customString1}(${dataEmpJob[0].payGradeNav.externalCode})`;
        } else {
          const elements = document.querySelectorAll(".classPlaceHolder");
          elements.forEach((element) => {
            element.setAttribute("dir", "ltr");
          });
          currentClassLabel = `${dataEmpJob[0].payGradeNav.name}(${dataEmpJob[0].payGradeNav.externalCode})`;
        }
      }
    } else {
      currentClassLabel = "Data Not Available";
    }

    //*******************PHONE EMAIL DATA*************************/
    const dataEmpPhone = await getEmployeePhoneData(userId);
    const dataEmpEmail = await getEmployeeEmailData(userId);
    let phoneNumber, email;
    if (dataEmpPhone.length !== 0) {
      if (
        dataEmpPhone[0].countryCode !== null &&
        dataEmpPhone[0].phoneNumber !== null
      ) {
        phoneNumber = `(${dataEmpPhone[0].countryCode})${dataEmpPhone[0].phoneNumber}`;
      }
    } else {
      phoneNumber = "Data Not Available";
    }

    if (dataEmpEmail.length !== 0) {
      if (dataEmpEmail[0].emailAddress !== null) {
        email = dataEmpEmail[0].emailAddress;
      }
    } else {
      email = "Data Not Available";
    }

    //*******************INSIDE WORK DATA*************************/
    const dataInsideWork = await getInsideWorkExperienceData(userId);

    //Number of Years Working
    let numberOfYearsNew;
    if (dataInsideWork.length !== 0 && currentLanguage === "ar_SA") {
      let earliestDate = new Date(-8640000000000000);
      let latestDate = new Date();
      dataInsideWork.forEach((detail, subindex) => {
        let currentStartDate = new Date(detail.startDate);
        let currentEndDate = new Date(detail.endDate);
        if (currentStartDate < latestDate) earliestDate = currentStartDate;
        else if (currentEndDate > earliestDate) latestDate = currentEndDate;
      });
      numberOfYearsNew = calculateYearsBetweenDates(earliestDate, latestDate);

      const elements = document.querySelectorAll(".noOfYearsPlaceHolder");
      elements.forEach((element) => {
        element.setAttribute("dir", "rtl");
      });
      numberOfYearsNew = numberOfYearsNew + " " + "سنوات";
    } else if (dataInsideWork.length !== 0 && currentLanguage !== "ar_SA") {
      let earliestDate = new Date(-8640000000000000);
      let latestDate = new Date();
      dataInsideWork.forEach((detail, subindex) => {
        let currentStartDate = new Date(detail.startDate);
        let currentEndDate = new Date(detail.endDate);
        if (currentStartDate < latestDate) earliestDate = currentStartDate;
        else if (currentEndDate > earliestDate) latestDate = currentEndDate;
      });
      numberOfYearsNew = calculateYearsBetweenDates(earliestDate, latestDate);
      const elements = document.querySelectorAll(".noOfYearsPlaceHolder");
      elements.forEach((element) => {
        element.setAttribute("dir", "ltr");
      });
      numberOfYearsNew = numberOfYearsNew + " " + "years";
    } else {
      numberOfYearsNew = "Data Not Available";
    }

    const contentElement = document.querySelector(".body-part");
    if (!contentElement) {
      console.error("Content element not found.");
      return;
    }

    //Photo Replace
    const photoData = await getEmployeePhotoData(userId);
    // console.log("photo data before sorting==>", photoData);
    // console.log("photo[0]==>", photoData[0]);
    let newStr, imageSr;
    if (photoData.length !== 0) {
      photoData.sort(
        (a, b) =>
          new Date(b.lastModifiedDateTime) - new Date(a.lastModifiedDateTime)
      );
      // console.log("photo data after sorting==>", photoData);
      newStr = photoData[0].photo.replace(/_/g, "/").replace(/-/g, "+");
      imageSr = `data:image/jpeg;base64,${newStr}`;
    } else {
      imageSr = "";
    }
    const imageElements = document.querySelectorAll(".employeeImage");
    imageElements.forEach((element) => {
      element.src = imageSr;
    });

    //Employee Name Replace
    const employeeNameElements = document.querySelectorAll(".employeename");
    employeeNameElements.forEach((element) => {
      element.innerText =
        currentLanguage === "ar_SA" ? nameInArabic : nameInEnglish;
    });

    //
    const positionElements = document.querySelectorAll(".position1");
    positionElements.forEach((element) => {
      element.innerText =
        currentLanguage === "ar_SA" ? positionInArabic : positionInEnglish;
    });

    const noOfYearsElements = document.querySelectorAll(
      ".noOfYearsPlaceHolder"
    );
    noOfYearsElements.forEach((element) => {
      element.innerText = numberOfYearsNew;
    });

    //*******************DATE OF BIRTH*************************/
    const perPerson = await getSFPerPersonData(userId);
    // Original date in "YYYY-MM-DD" format
    let originalDate = dataPerPersonal[0].personNav.dateOfBirth;
    // Split the date into parts
    let parts = originalDate.split("-");
    // Reformat the date to "DD-MM-YYYY"
    // let formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
    let monthNum = Number(parts[1]);
    let monthStr = getMonthName(parts[1] - 1);
    let formattedDate = `${parts[2]} ${monthStr} ${parts[0]}`;
    console.log("monthStr ==>", monthStr);
    console.log("formattedDate ==>", formattedDate);
    let dateString;
    if (perPerson[0].customDouble1 === null) {
      dateString = `${formattedDate}`;
    } else if (
      perPerson[0].customDouble1 !== null &&
      currentLanguage !== "ar_SA"
    ) {
      const elements = document.querySelectorAll(".dob");
      elements.forEach((element) => {
        element.setAttribute("dir", "ltr");
      });
      dateString = `${formattedDate}(${perPerson[0].customDouble1} years)`;
    } else if (
      perPerson[0].customDouble1 !== null &&
      currentLanguage === "ar_SA"
    ) {
      const elements = document.querySelectorAll(".dob");
      elements.forEach((element) => {
        element.setAttribute("dir", "rtl");
      });
      dateString = `${formattedDate}(${perPerson[0].customDouble1} عام)`;
      console.log("dateString==>", dateString);
    }
    const dobElements = document.querySelectorAll(".dob");
    dobElements.forEach((element) => {
      element.innerText = dateString;
    });

    //*******************MARITAL STATUS*************************/
    const maritalStatusElements = document.querySelectorAll(
      ".maritalStatusPlaceHolder"
    );

    let martlSts;
    if ((dataPerPersonal[0].maritalStatusNav.mdfExternalCode = "S"))
      martlSts = "Single";
    else martlSts = "Married";
    maritalStatusElements.forEach((element) => {
      // element.innerText = maritalStatusLabel;
      element.innerText = maritalStatusString;
    });

    const regionElements = document.querySelectorAll(".regionPlaceHolder1");
    regionElements.forEach((element) => {
      // element.innerText = countryNameRegion;
      element.innerText = "أفريقيا";
      // currentLanguage === "ar_SA" ? "الشرق الأوسط" : "Middle East";
    });

    const classElements = document.querySelectorAll(".classPlaceHolder");
    classElements.forEach((element) => {
      element.innerText = currentClassLabel;
    });

    const contactElements = document.querySelectorAll(".phonePlaceHolder");
    contactElements.forEach((element) => {
      element.innerText = phoneNumber;
    });
    const emailElements = document.querySelectorAll(".emailPlaceHolder");
    emailElements.forEach((element) => {
      element.innerText = email;
    });

    const motherToungeElements = document.querySelectorAll(".mother-tounge");
    motherToungeElements.forEach((element) => {
      element.innerText = motherToungeLabel;
    }); // mother-tounge-tag
    const motherToungeTagElements =
      document.querySelectorAll(".mother-tounge-tag");
    motherToungeTagElements.forEach((element) => {
      element.innerText = motherToungeTag;
    });

    const englishScoreElements = document.querySelectorAll(".engScore");
    englishScoreElements.forEach((element) => {
      element.innerText = ieltsScore;
    });

    let one = document.querySelector(".one");
    one.style.height = "100%";

    let potential = "Valued Performer";
    const graphCircleElements = document.querySelectorAll(".cccircle");
    graphCircleElements.forEach((element) => {
      if (potential === "Talent Risk") {
        element.style.left = "230px";
        element.style.top = "270px";
      } else if (potential === "Effective Performer") {
        element.style.left = "370px";
        element.style.top = "260px";
      } else if (potential === "Valued Performer") {
        element.style.left = "500px";
        element.style.top = "260px";
      } else if (potential === "Inconsistent Performer") {
        element.style.left = "210px";
        element.style.top = "140px";
      } else if (potential === "Core Performer") {
        element.style.left = "370px";
        element.style.top = "140px";
      } else if (potential === "Rising Talent") {
        element.style.left = "370px";
        element.style.top = "150px";
      } else if (potential === "Potential Performer") {
        element.style.left = "370px";
        element.style.top = "150px";
      } else if (potential === "Emerging Talent") {
        element.style.left = "370px";
        element.style.top = "150px";
      } else if (potential === "Top Talent") {
        element.style.left = "370px";
        element.style.top = "150px";
      }
    });
  } catch (error) {
    console.error("Error replacing placeholders:", error);
  }
}

const btnPdf = document.querySelector(".btnPdf");
btnPdf.addEventListener("click", function (e) {
  e.preventDefault();
  convertToPdf();
  // setTimeout(convertToPdf, 3000);
});

//*******************FORM SUBMISSION**********************/
let currentUserId;
const formSubmitBtn = document.querySelector(".formBtn");
formSubmitBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  const formDiv = document.querySelector(".formDiv");
  const pdfDiv = document.querySelector(".pdf-main-container");
  const fullPageSpinner = document.querySelector(".spinnerFullpage");

  const formInput = document.querySelector("#userId");
  const dat = await getSFPerPersonalData(formInput.value);

  if (formInput.value.length === 0) {
    alert("Please enter a value!!");
    return;
  }

  if (dat === undefined) {
    alert("Could Not Establish Connection to Success Factor!!");
    return;
  }

  if (dat.length !== 0) {
    formDiv.classList.add("displayNone");
    fullPageSpinner.classList.remove("displayNone");

    currentUserId = dat[0].personIdExternal;
    console.log("currentUserId dat==>", currentUserId);
    await fetchAllSFDatas(currentUserId);
    replacePlaceholdersWithLocalData();
    await replacePlaceholdersWithSFData(currentUserId);
    await generateSections1();
    await generateSections2();
    await generateSections3();
    await generateSections4();
    await generateSections5();
    await generateSections6();
    // await generateFinal();

    fullPageSpinner.classList.add("displayNone");
    pdfDiv.classList.remove("displayNone");
  } else {
    alert("User Does Not Exist! Please Enter A correct User Id");
  }
});

const backBtn = document.querySelector(".btn");
backBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  const formDiv = document.querySelector(".formDiv");
  const pdfDiv = document.querySelector(".pdf-main-container");

  formDiv.classList.remove("displayNone");
  pdfDiv.classList.add("displayNone");
});

//******************LANGUAGE TRANSLATION*************************/
function toggleDirection() {
  const subDetail10 = document.querySelector(".sub-detail1-0");
  const currentDirection = subDetail10.style.direction;

  if (currentDirection === "rtl") {
    subDetail10.style.direction = "ltr";
  } else {
    subDetail10.style.direction = "rtl";
  }
}
async function updateLanguageToArabic() {
  // const dataEng = await fetchDataArb();
  const fullPageSpinner = document.querySelector(".spinnerFullpage");
  fullPageSpinner.classList.remove("displayNone");

  await generateSections1();
  await generateSections2();
  await generateSections3();
  await generateSections4();
  await generateSections5();
  await generateSections6();
  // await generateFinal();
  await replacePlaceholdersWithSFData(currentUserId);
  replacePlaceholdersWithLocalData();

  // Select all elements with the class "details"
  const elements = document.querySelectorAll(".details");
  elements.forEach((element) => {
    element.setAttribute("dir", "rtl");
  });
  // const elements2 = document.querySelector(".sub-detail1-0");
  // elements2.setAttribute("dir", "rtl");

  fullPageSpinner.classList.add("displayNone");
}

async function updateLanguageToEnglish() {
  const fullPageSpinner = document.querySelector(".spinnerFullpage");
  fullPageSpinner.classList.remove("displayNone");
  await generateSections1();
  await generateSections2();
  await generateSections3();
  await generateSections4();
  await generateSections5();
  await generateSections6();
  // await generateFinal();
  await replacePlaceholdersWithSFData(currentUserId);
  replacePlaceholdersWithLocalData();

  // Select all elements with the class "details"
  const elements = document.querySelectorAll(".details");
  elements.forEach((element) => {
    element.setAttribute("dir", "ltr");
  });

  toggleDirection();

  fullPageSpinner.classList.add("displayNone");
}

//****************Language Changer****************/
// const languageChangerElements = document.querySelectorAll(".langChange");
// languageChangerElements.forEach((element) => {
//   element.addEventListener("click", async function (e) {
//     e.preventDefault();
//     if (currentLanguage === "ar_SA") {
//       currentLanguage = "en_US";
//       updateLanguageToEnglish();
//     } else {
//       currentLanguage = "ar_SA";
//       updateLanguageToArabic();
//     }
//   });
// });

const languageDropdown = document.getElementById("languageDropdown");

languageDropdown.addEventListener("change", async function (e) {
  const selectedLanguage = e.target.value;
  console.log("e.target.value==>", selectedLanguage);

  if (selectedLanguage === "ar_SA") {
    currentLanguage = "ar_SA";
    updateLanguageToArabic();
  } else {
    currentLanguage = "en_US";
    updateLanguageToEnglish();
  }
});
