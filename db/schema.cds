namespace interviewSchedule.db;

using {sf_api_service} from '../srv/external/sf-api-service';

entity PicklistLabel                    as
    projection on sf_api_service.PicklistLabel {
        id,
        optionId,
         locale,
      label
    }

entity PickListValueV2                    as
    projection on sf_api_service.PickListValueV2 {
        
        optionId,
      label_en_US,
      label_ar_SA
    }

entity PicklistOption                    as
    projection on sf_api_service.PicklistOption {
         id,
        mdfExternalCode,
        optionValue,       
        status,
       
        localeLabel,
        picklistLabels,
        
    }

entity User                    as
    projection on sf_api_service.User {
        userId,
        defaultFullName,
        country
    }

entity PerPerson                    as
    projection on sf_api_service.PerPerson {
        dateOfBirth,
        countryOfBirth,
        personIdExternal,
        placeOfBirth,
        customDouble1  
    }

entity PerPersonal                    as
    projection on sf_api_service.PerPersonal {
       displayName,
       customString2,
       personIdExternal,
       maritalStatus, 
       maritalStatusNav,
        salutationNav,
       nativePreferredLang,
       nativePreferredLangNav,
       nationality,
       personNav : Association to PerPerson on personNav.personIdExternal =personIdExternal
    }

entity InsideWorkExperience                    as
    projection on sf_api_service.Background_InsideWorkExperience {
        userId,
        startDate,
        endDate,
        title
       }
    

entity OutsideWorkExperience                    as
    projection on sf_api_service.Background_OutsideWorkExperience {
        userId,
        endDate,
        startTitle,
        startDate,
       businessTypeNav 
    }

entity Photo                    as
    projection on sf_api_service.Photo {
       userId,
       photo,
       lastModifiedDateTime,
       mimeType
    }



entity Position as 
    projection on sf_api_service.Position {
        code,
        positionTitle,
        jobTitle,
        employeeClass,
        externalName_ar_SA,
        externalName_defaultValue,
        
    }

entity nameTranslation               as
    projection on sf_api_service.FoTranslation {
        foObjectID,
        value_ar_SA,
        value_en_US,       
    }

entity EventReasonNav                as
    projection on sf_api_service.FOEventReason {
        externalCode,
        name,
        event, 
        objectId, 
        nameTranslationNav: Association to nameTranslation on nameTranslationNav.foObjectID = objectId,     
    }

entity FOPayGrade                   as
    projection on sf_api_service.FOPayGrade {
        externalCode,
        internalCode,
        startDate,
        endDate,      
        customString1,
        name
    }

entity FODepartment                   as
    projection on sf_api_service.FODepartment {
        externalCode,
       description_ar_SA,
       description_en_US
    }

entity EmpJob                  as
    projection on sf_api_service.EmpJob {
       userId,
       startDate,
       endDate, 
       positionEntryDate,    
       event,
       
       position,
        positionNav,     
        employeeClass,
       employeeClassNav,
       payGrade,
       payGradeNav: Association to FOPayGrade on payGradeNav.externalCode = payGrade,
       department,
       departmentNav: Association to FODepartment on departmentNav.externalCode = payGrade,
       eventReason,
        eventReasonNav: Association to EventReasonNav on eventReasonNav.externalCode = eventReason,

     
            
    }



entity Background_Education                   as
    projection on sf_api_service.Background_Education {
       userId,
       startDate,
       school,
        
       degree,
       major,
       degreeNav,
       majorNav,    
    }

entity Country                   as
    projection on sf_api_service.Country {
        code,
        externalName_ar_SA,
        externalName_en_US
    }

entity Education                   as
    projection on sf_api_service.cust_QualificationDetails {
        cust_Qualification1_worker,
        cust_SpecializationNav,
        cust_AcademicDegreeNav,
        cust_AwardedDate,
        cust_Qualification1_effectiveStartDate,
        cust_UniverisytName,
        cust_CountryofUniversity,
       cust_CountryofUniversityNav: Association to Country on cust_CountryofUniversityNav.code = cust_CountryofUniversity, 
    }

entity Training                   as
    projection on sf_api_service.cust_TrainingCourseDetails {
      cust_CourseName,
      cust_TrainingCourses_externalCode,
      cust_TrainingCourses_effectiveStartDate 
    }

entity PerformanceEvaluation                   as
    projection on sf_api_service.TrendData_SysOverallPerformance {
     endDate,
     label,
     userId
    }

entity PerformanceHistory                   as
    projection on sf_api_service.cust_PerformanceRatingHistory {
     cust_PerformanceHistory_externalCode,
     cust_RatingYear, 
     cust_Score,
     cust_ScoreinwordsNav
     
     
    }

entity Phone                   as
    projection on sf_api_service.PerPhone {
        personIdExternal,
        countryCode,
        phoneNumber    
    }

entity Email                   as
    projection on sf_api_service.PerEmail {
        personIdExternal,
        emailAddress   
    }

entity NineBoxRating                   as
    projection on sf_api_service.cust_NineBoxxdetails {
        cust_Nineboxx_worker,
        cust_nineboxcategorization
        
    }

entity dependents                  as
    projection on sf_api_service.cust_Dep_Child {
        cust_Dep_Parent_externalCode,
        cust_DisplayName,
       
        cust_RelationshipNav
    }
