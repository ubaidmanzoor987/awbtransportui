export function processResult(resultData: any) {

    // console.log("resultData");
    // console.log(resultData);

    if (resultData.data.applicantdateofbirth) {
        resultData.data.applicantdateofbirth = new Date((resultData.data.applicantdateofbirth as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.dateofBirth) {
        resultData.data.dateofBirth = new Date((resultData.data.dateofBirth as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.physicalExamExpirationDate) {
        resultData.data.physicalExamExpirationDate = new Date((resultData.data.physicalExamExpirationDate as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.employmentHistoryfrom) {
        resultData.data.employmentHistoryfrom = new Date((resultData.data.employmentHistoryfrom as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.employmentHistoryTo) {
        resultData.data.employmentHistoryTo = new Date((resultData.data.employmentHistoryTo as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.experienceToDate) {
        resultData.data.experienceToDate = new Date((resultData.data.experienceToDate as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.experienceFromDate) {
        resultData.data.experienceFromDate = new Date((resultData.data.experienceFromDate as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.dateOfAccident) {
        resultData.data.dateOfAccident = new Date((resultData.data.dateOfAccident as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.dateOfViolation) {
        resultData.data.dateOfViolation = new Date((resultData.data.dateOfViolation as any).$date).toISOString().split('T')[0];
    }

    if (resultData.data.addresses) {
        resultData.data.addresses.forEach(function (el:any) {
            if(el.lastYearAddressfrom) {el.lastYearAddressfrom = new Date((el.lastYearAddressfrom as any).$date).toISOString().split('T')[0];}
            if(el.lastYearAddressTo) {el.lastYearAddressTo = new Date((el.lastYearAddressTo as any).$date).toISOString().split('T')[0];}
        });
    }

    if (resultData.data.applicantAddresses) {
        resultData.data.applicantAddresses.forEach(function (el:any) {
            if(el.lastYearAddressfrom) {el.lastYearAddressfrom = new Date((el.lastYearAddressfrom as any).$date).toISOString().split('T')[0];}
            if(el.lastYearAddressTo) {el.lastYearAddressTo = new Date((el.lastYearAddressTo as any).$date).toISOString().split('T')[0];}
        });
    }
    if (resultData.data.employmentHistory) {
        resultData.data.employmentHistory.forEach(function (el:any) {
            if(el.employmentHistoryfrom) {el.employmentHistoryfrom = new Date((el.employmentHistoryfrom as any).$date).toISOString().split('T')[0];}
            if(el.employmentHistoryTo) {el.employmentHistoryTo = new Date((el.employmentHistoryTo as any).$date).toISOString().split('T')[0];}
        });
    }
    if (resultData.data.employmentExperienceHistory) {
        resultData.data.employmentExperienceHistory.forEach(function (el:any) {
            if(el.experienceFromDate) {el.experienceFromDate = new Date((el.experienceFromDate as any).$date).toISOString().split('T')[0];}
            if(el.experienceToDate) {el.experienceToDate = new Date((el.experienceToDate as any).$date).toISOString().split('T')[0];}
        });
    }

    if (resultData.data.employmentAccidentsHistory) {
        resultData.data.employmentAccidentsHistory.forEach(function (el:any) {
            if(el.dateOfAccident) {el.dateOfAccident= new Date((el.dateOfAccident as any).$date).toISOString().split('T')[0];}
        });
    }
    
    if (resultData.data.violations) {
        resultData.data.violations.forEach(function (el:any) {
            if(el.dateOfViolation) {el.dateOfViolation= new Date((el.dateOfViolation as any).$date).toISOString().split('T')[0];}
        });
    }

    if (resultData.data.licences) {
        resultData.data.licences.forEach(function (el:any) {
            if(el.licenceExpirationDate) {el.licenceExpirationDate= new Date((el.licenceExpirationDate as any).$date).toISOString().split('T')[0];}
        });
    }
    
    if (resultData.data.alcoholTestExecutionDate) {
        resultData.data.alcoholTestExecutionDate = new Date((resultData.data.alcoholTestExecutionDate as any).$date).toISOString().split('T')[0];
    }

    if (resultData.data.employeeDate) {
        resultData.data.employeeDate = new Date((resultData.data.employeeDate as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.applicationApplyDate) {
        resultData.data.applicationApplyDate = new Date((resultData.data.applicationApplyDate as any).$date).toISOString().split('T')[0];
    }

    if (resultData.data.nameOfPersonProvidingInformationDate) {
        resultData.data.nameOfPersonProvidingInformationDate = new Date((resultData.data.nameOfPersonProvidingInformationDate as any).$date).toISOString().split('T')[0];
    }  
    
    if (resultData.data.fromDateAddress) {
        resultData.data.fromDateAddress = new Date((resultData.data.fromDateAddress as any).$date).toISOString().split('T')[0];
    }

    if (resultData.data.dateOfApplication) {
        resultData.data.dateOfApplication = new Date((resultData.data.dateOfApplication as any).$date).toISOString().split('T')[0];
    }

    if (resultData.data.expiration_date) {
        resultData.data.expiration_date = new Date((resultData.data.expiration_date as any).$date).toISOString().split('T')[0];
    }


    
    
    // console.log("proces", resultData.data);
}