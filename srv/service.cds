using {interviewSchedule.db as db} from '../db/schema';

service serviceCatalog @(path: '/serviceCatalog') {
   
    @readonly
    entity Position as projection on db.Position;

    @readonly
    entity User as projection on db.User;

    @readonly
    entity PerPerson as projection on db.PerPerson;

     @readonly
    entity PerPersonal as projection on db.PerPersonal;

     @readonly
    entity InsideWorkExperience as projection on db.InsideWorkExperience;

     @readonly
    entity OutsideWorkExperience as projection on db.OutsideWorkExperience;

     @readonly
    entity Photo as projection on db.Photo;

    @readonly
    entity nameTranslation as projection on db.nameTranslation;

    @readonly
    entity EventReasonNav as projection on db.EventReasonNav;

   

    @readonly
    entity EmpJob as projection on db.EmpJob;

    @readonly
    entity FOPayGrade as projection on db.FOPayGrade;

    @readonly
    entity FODepartment as projection on db.FODepartment;
    

    @readonly
    entity Background_Education as projection on db.Background_Education;

    @readonly
    entity Country as projection on db.Country;

    @readonly
    entity Education as projection on db.Education;

    @readonly
    entity PicklistLabel as projection on db.PicklistLabel;

     @readonly
    entity PickListValueV2 as projection on db.PickListValueV2;

     @readonly
    entity PicklistOption as projection on db.PicklistOption;

     @readonly
    entity Training as projection on db.Training;

    @readonly
    entity PerformanceEvaluation  as projection on db.PerformanceEvaluation ;

    @readonly
    entity PerformanceHistory  as projection on db.PerformanceHistory ;

    @readonly
    entity Phone as projection on db.Phone;

    @readonly
    entity Email as projection on db.Email;

    @readonly
    entity NineBoxRating as projection on db.NineBoxRating;

    @readonly
    entity Dependents as projection on db.dependents;
}